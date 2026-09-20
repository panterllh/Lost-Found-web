// Supabase Edge Function: analyze-image
//
// Receives a base64-encoded photo, sends it to Google's Gemini API,
// and returns a short description + keyword list describing the
// item — never the item's identity or a search result. All keyword
// matching against real listings happens back in app.js, on the
// client, using the data already loaded from your database.
//
// Deploy:
//   supabase functions deploy analyze-image
//   supabase secrets set GEMINI_API_KEY=your-key-here
//
// Get a free key (no credit card needed to start) at:
//   https://aistudio.google.com/apikey
//
// Model: gemini-3.1-flash-lite — stable, cheap, multimodal, and (as
// of this writing) has no announced shutdown date. If you'd rather
// use a different Gemini model, change MODEL below; the request/
// response shape is the same across Gemini models.

import { serve } from "jsr:@std/http/server";
const MODEL = "gemini-3.1-flash-lite";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  try {
    const { imageBase64, mediaType } = await req.json();
    if (!imageBase64 || !mediaType) {
      return new Response(JSON.stringify({ error: "imageBase64 and mediaType are required" }), {
        status: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY secret is not set on this project" }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    const prompt = `You are helping a lost-and-found website describe a photo of an item so it can be matched against text listings.
Look at the photo and describe it for that purpose: its type, color, shape, brand if visible, and any distinctive detail. Also give 6 to 10 short, lowercase search keywords.
Do not guess a brand or detail that isn't visibly present. Do not identify people or read personal information such as ID card numbers.`;

    const geminiResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ inline_data: { mime_type: mediaType, data: imageBase64 } }, { text: prompt }]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              description: { type: "STRING" },
              keywords: { type: "ARRAY", items: { type: "STRING" } }
            },
            required: ["description", "keywords"]
          }
        }
      })
    });

    if (!geminiResp.ok) {
      const errText = await geminiResp.text();
      return new Response(JSON.stringify({ error: `Gemini API error: ${errText}` }), {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    const data = await geminiResp.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (parseError) {
      return new Response(JSON.stringify({ error: "Could not parse the AI response", raw: rawText }), {
        status: 502,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
      });
    }

    return new Response(
      JSON.stringify({
        description: String(parsed.description || "").slice(0, 400),
        keywords: Array.isArray(parsed.keywords) ? parsed.keywords.slice(0, 12).map(String) : []
      }),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" }
    });
  }
});
