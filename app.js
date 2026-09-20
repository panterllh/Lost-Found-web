(function () {
  "use strict";

  const LANG_KEY = "lost_found_lang";

  const categories = ["electronics", "wallet", "documents", "bags", "keys", "clothing", "bottle", "other"];

  const supabase = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);

  const i18n = {
    en: {
      appName: "Lost & Found",
      tagline: "Report, search, match, message, and recover lost items without exposing private contact details.",
      navHome: "Home",
      navSearch: "Search",
      navReport: "Report",
      navMessages: "Messages",
      navNotifications: "Notifications",
      navProfile: "Profile",
      navDashboard: "Dashboard",
      language: "ไทย",
      menu: "Menu",
      searchPlaceholder: "Search item name, description, location, or keywords",
      heroEyebrow: "Community recovery platform",
      heroTitle: "Lost & Found",
      heroCopy: "A practical place for schools, universities, offices, and neighborhoods to report missing belongings, verify matches, and return items safely.",
      lostCta: "I Lost Something",
      foundCta: "I Found Something",
      searchCta: "Search",
      reported: "Items Reported",
      recovered: "Items Recovered",
      activeListings: "Active Listings",
      recentlyLost: "Recently reported lost",
      recentlyFound: "Recently found items",
      viewDetails: "View Details",
      searchTitle: "Search listings",
      searchSubtitle: "Use natural keywords like black iPhone near school, blue wallet, lost AirPods, or กระเป๋าสตางค์สีดำ.",
      filters: "Filters",
      type: "Lost / Found",
      allTypes: "All types",
      lost: "Lost",
      found: "Found",
      category: "Category",
      allCategories: "All categories",
      location: "Location",
      date: "Date",
      anyDate: "Any date",
      today: "Today",
      week: "Past 7 days",
      month: "Past 30 days",
      status: "Status",
      active: "Active",
      recoveredStatus: "Recovered",
      sortBy: "Sort by",
      relevance: "Relevance",
      newest: "Newest",
      oldest: "Oldest",
      noResults: "No results found",
      noResultsHint: "Try fewer words, a nearby location, or a broader category.",
      reportLostTitle: "Report a lost item",
      reportFoundTitle: "Report a found item",
      reportSubtitle: "Add clear details and photos so the right person can verify the item.",
      stepDetails: "1. Details",
      stepPhotos: "2. Photos",
      stepPreview: "3. Preview",
      itemName: "Item name",
      description: "Description",
      color: "Color",
      brand: "Brand",
      lostLocation: "Location where it was lost",
      foundLocation: "Location where it was found",
      dateTime: "Date and approximate time",
      details: "Additional identifying details",
      contactPrefs: "Contact preferences",
      optionalContact: "Optional contact note",
      next: "Next",
      back: "Back",
      publish: "Publish listing",
      chooseFiles: "Choose files",
      dropPhotos: "Drag photos here or choose files",
      uploadHelp: "Add multiple photos. You can remove or reorder them before publishing.",
      remove: "Remove",
      moveUp: "Up",
      moveDown: "Down",
      preview: "Preview",
      required: "This field is required.",
      published: "Listing published.",
      messageUser: "Message User",
      thinkMine: "I Think This Is Mine",
      reportListing: "Report Listing",
      markRecovered: "Mark as Recovered",
      deleteListing: "Delete Listing",
      recoveredLabel: "Recovered / Found",
      poster: "Poster",
      currentStatus: "Current status",
      possibleMatches: "Possible Matches",
      possibleMatch: "Possible match",
      similarity: "Similarity",
      high: "High",
      medium: "Medium",
      low: "Low",
      noMatches: "No possible matches yet.",
      chatTitle: "Messages",
      conversations: "Conversations",
      typeMessage: "Write a message about return details...",
      send: "Send",
      noConversations: "No conversations yet",
      notificationTitle: "Notifications",
      markAllRead: "Mark all read",
      emptyNotifications: "No notifications right now",
      profileTitle: "Profile",
      memberSince: "Member since",
      itemsReported: "Items reported",
      itemsFound: "Items found",
      activeReports: "Active listings",
      recoveredHistory: "Recovered history",
      manageListings: "Manage listings",
      dashboardTitle: "Dashboard",
      dashboardSubtitle: "Your active reports, possible matches, messages, and updates in one place.",
      activeLost: "Active lost reports",
      activeFound: "Active found reports",
      recentRecovered: "Recently recovered items",
      suspicious: "Report suspicious or inappropriate listing",
      reportReason: "Reason",
      submitReport: "Submit report",
      reportSent: "Report submitted. Thanks for helping keep the community safe.",
      confirmRecover: "Mark this listing as recovered? It will leave active search but remain in your history.",
      confirmDelete: "Permanently delete this listing?",
      deleted: "Listing deleted.",
      recoveredToast: "Listing marked as recovered.",
      messageSent: "Message sent.",
      interactionSent: "The poster has been notified.",
      all: "All",
      photo: "Photo",
      noPhoto: "No photo",
      ownerOnly: "Only the listing owner can do that.",
      signedInAs: "Signed in as",
      contactSafe: "Private contact details are hidden. Use internal messages to coordinate safely.",
      loading: "Loading",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      imageReady: "Photos attached",
      statusLost: "Lost",
      statusFound: "Found",
      statusRecovered: "Recovered",
      statusMatch: "Possible Match",
      electronics: "Electronics",
      wallet: "Wallet",
      documents: "Documents",
      bags: "Bags",
      keys: "Keys",
      clothing: "Clothing",
      bottle: "Bottle",
      other: "Other",
      createAccount: "Create account",
      logIn: "Log in",
      logOut: "Log out",
      alreadyHaveAccount: "Already have an account? Log in",
      dontHaveAccount: "Don't have an account? Create one",
      yourName: "Your name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      invalidCredentials: "Incorrect email or password.",
      passwordsNoMatch: "Passwords do not match.",
      accountCreated: "Account created. Welcome!",
      checkEmailConfirm: "Check your email to confirm your account, then log in.",
      welcomeBack: "Welcome back,",
      loggedOut: "Logged out.",
      registerTitle: "Create your account",
      registerSubtitle: "Join the community to report, search, and recover items.",
      loginTitle: "Log in",
      loginSubtitle: "Log in to report items, message posters, and see your dashboard.",
      noLostYet: "No lost items reported yet.",
      noFoundYet: "No found items reported yet."
    },
    th: {
      appName: "Lost & Found",
      tagline: "แจ้งของหาย ค้นหา จับคู่ ส่งข้อความ และรับคืนของได้โดยไม่เปิดเผยข้อมูลติดต่อส่วนตัว",
      navHome: "หน้าแรก",
      navSearch: "ค้นหา",
      navReport: "แจ้งรายการ",
      navMessages: "ข้อความ",
      navNotifications: "แจ้งเตือน",
      navProfile: "โปรไฟล์",
      navDashboard: "แดชบอร์ด",
      language: "EN",
      menu: "เมนู",
      searchPlaceholder: "ค้นหาชื่อสิ่งของ รายละเอียด สถานที่ หรือคำสำคัญ",
      heroEyebrow: "แพลตฟอร์มช่วยคืนของในชุมชน",
      heroTitle: "Lost & Found",
      heroCopy: "พื้นที่ใช้งานจริงสำหรับโรงเรียน มหาวิทยาลัย สำนักงาน และชุมชน เพื่อแจ้งของหาย ตรวจสอบรายการที่อาจตรงกัน และคืนของอย่างปลอดภัย",
      lostCta: "ฉันทำของหาย",
      foundCta: "ฉันพบของ",
      searchCta: "ค้นหา",
      reported: "รายการที่แจ้ง",
      recovered: "คืนของสำเร็จ",
      activeListings: "รายการที่ยังเปิดอยู่",
      recentlyLost: "ของหายล่าสุด",
      recentlyFound: "ของที่พบล่าสุด",
      viewDetails: "ดูรายละเอียด",
      searchTitle: "ค้นหารายการ",
      searchSubtitle: "ค้นหาด้วยภาษาธรรมชาติ เช่น black iPhone near school, blue wallet, lost AirPods หรือ กระเป๋าสตางค์สีดำ",
      filters: "ตัวกรอง",
      type: "ของหาย / ของที่พบ",
      allTypes: "ทุกประเภท",
      lost: "ของหาย",
      found: "ของที่พบ",
      category: "หมวดหมู่",
      allCategories: "ทุกหมวดหมู่",
      location: "สถานที่",
      date: "วันที่",
      anyDate: "ทุกเวลา",
      today: "วันนี้",
      week: "7 วันที่ผ่านมา",
      month: "30 วันที่ผ่านมา",
      status: "สถานะ",
      active: "กำลังเปิดอยู่",
      recoveredStatus: "คืนของแล้ว",
      sortBy: "เรียงตาม",
      relevance: "ความเกี่ยวข้อง",
      newest: "ใหม่สุด",
      oldest: "เก่าสุด",
      noResults: "ไม่พบรายการ",
      noResultsHint: "ลองใช้คำน้อยลง เปลี่ยนสถานที่ใกล้เคียง หรือเลือกหมวดหมู่กว้างขึ้น",
      reportLostTitle: "แจ้งของหาย",
      reportFoundTitle: "แจ้งของที่พบ",
      reportSubtitle: "เพิ่มรายละเอียดและรูปภาพให้ชัดเจน เพื่อให้เจ้าของตัวจริงตรวจสอบได้",
      stepDetails: "1. รายละเอียด",
      stepPhotos: "2. รูปภาพ",
      stepPreview: "3. ตรวจสอบ",
      itemName: "ชื่อสิ่งของ",
      description: "รายละเอียด",
      color: "สี",
      brand: "ยี่ห้อ",
      lostLocation: "สถานที่ที่หาย",
      foundLocation: "สถานที่ที่พบ",
      dateTime: "วันที่และเวลาโดยประมาณ",
      details: "รายละเอียดระบุตัวตนเพิ่มเติม",
      contactPrefs: "ช่องทางติดต่อที่สะดวก",
      optionalContact: "หมายเหตุการติดต่อเพิ่มเติม",
      next: "ถัดไป",
      back: "ย้อนกลับ",
      publish: "เผยแพร่รายการ",
      chooseFiles: "เลือกไฟล์",
      dropPhotos: "ลากรูปมาวาง หรือเลือกไฟล์",
      uploadHelp: "เพิ่มได้หลายรูป ลบหรือจัดลำดับก่อนเผยแพร่ได้",
      remove: "ลบ",
      moveUp: "ขึ้น",
      moveDown: "ลง",
      preview: "ตัวอย่าง",
      required: "จำเป็นต้องกรอกข้อมูลนี้",
      published: "เผยแพร่รายการแล้ว",
      messageUser: "ส่งข้อความ",
      thinkMine: "คิดว่านี่เป็นของฉัน",
      reportListing: "รายงานรายการ",
      markRecovered: "ทำเครื่องหมายว่าคืนของแล้ว",
      deleteListing: "ลบรายการ",
      recoveredLabel: "คืนของแล้ว / พบแล้ว",
      poster: "ผู้โพสต์",
      currentStatus: "สถานะปัจจุบัน",
      possibleMatches: "รายการที่อาจตรงกัน",
      possibleMatch: "อาจตรงกัน",
      similarity: "ความคล้าย",
      high: "สูง",
      medium: "ปานกลาง",
      low: "ต่ำ",
      noMatches: "ยังไม่มีรายการที่อาจตรงกัน",
      chatTitle: "ข้อความ",
      conversations: "บทสนทนา",
      typeMessage: "พิมพ์ข้อความเพื่อนัดหมายการคืนของ...",
      send: "ส่ง",
      noConversations: "ยังไม่มีบทสนทนา",
      notificationTitle: "การแจ้งเตือน",
      markAllRead: "อ่านทั้งหมด",
      emptyNotifications: "ยังไม่มีการแจ้งเตือน",
      profileTitle: "โปรไฟล์",
      memberSince: "เป็นสมาชิกตั้งแต่",
      itemsReported: "รายการที่แจ้ง",
      itemsFound: "รายการที่พบ",
      activeReports: "รายการที่เปิดอยู่",
      recoveredHistory: "ประวัติรายการที่คืนแล้ว",
      manageListings: "จัดการรายการ",
      dashboardTitle: "แดชบอร์ด",
      dashboardSubtitle: "ดูรายการที่เปิดอยู่ รายการที่อาจตรงกัน ข้อความ และอัปเดตสำคัญในที่เดียว",
      activeLost: "ของหายที่ยังเปิดอยู่",
      activeFound: "ของที่พบที่ยังเปิดอยู่",
      recentRecovered: "คืนของสำเร็จล่าสุด",
      suspicious: "รายงานรายการที่น่าสงสัยหรือไม่เหมาะสม",
      reportReason: "เหตุผล",
      submitReport: "ส่งรายงาน",
      reportSent: "ส่งรายงานแล้ว ขอบคุณที่ช่วยดูแลชุมชน",
      confirmRecover: "ทำเครื่องหมายว่าคืนของแล้วหรือไม่ รายการจะออกจากผลค้นหาที่เปิดอยู่ แต่ยังอยู่ในประวัติของคุณ",
      confirmDelete: "ลบรายการนี้ถาวรหรือไม่",
      deleted: "ลบรายการแล้ว",
      recoveredToast: "ทำเครื่องหมายว่าคืนของแล้ว",
      messageSent: "ส่งข้อความแล้ว",
      interactionSent: "แจ้งเตือนผู้โพสต์แล้ว",
      all: "ทั้งหมด",
      photo: "รูปภาพ",
      noPhoto: "ไม่มีรูป",
      ownerOnly: "เฉพาะเจ้าของรายการเท่านั้นที่ทำได้",
      signedInAs: "เข้าสู่ระบบเป็น",
      contactSafe: "ข้อมูลติดต่อส่วนตัวถูกซ่อน ใช้ข้อความภายในเพื่อนัดหมายอย่างปลอดภัย",
      loading: "กำลังโหลด",
      edit: "แก้ไข",
      save: "บันทึก",
      cancel: "ยกเลิก",
      imageReady: "แนบรูปแล้ว",
      statusLost: "ของหาย",
      statusFound: "ของที่พบ",
      statusRecovered: "คืนของแล้ว",
      statusMatch: "อาจตรงกัน",
      electronics: "อุปกรณ์อิเล็กทรอนิกส์",
      wallet: "กระเป๋าสตางค์",
      documents: "เอกสาร",
      bags: "กระเป๋า",
      keys: "กุญแจ",
      clothing: "เสื้อผ้า",
      bottle: "ขวดน้ำ",
      other: "อื่น ๆ",
      createAccount: "สร้างบัญชี",
      logIn: "เข้าสู่ระบบ",
      logOut: "ออกจากระบบ",
      alreadyHaveAccount: "มีบัญชีอยู่แล้ว? เข้าสู่ระบบ",
      dontHaveAccount: "ยังไม่มีบัญชี? สร้างบัญชี",
      yourName: "ชื่อของคุณ",
      email: "อีเมล",
      password: "รหัสผ่าน",
      confirmPassword: "ยืนยันรหัสผ่าน",
      invalidCredentials: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      passwordsNoMatch: "รหัสผ่านไม่ตรงกัน",
      accountCreated: "สร้างบัญชีสำเร็จ ยินดีต้อนรับ!",
      checkEmailConfirm: "ตรวจสอบอีเมลเพื่อยืนยันบัญชี จากนั้นเข้าสู่ระบบ",
      welcomeBack: "ยินดีต้อนรับกลับ,",
      loggedOut: "ออกจากระบบแล้ว",
      registerTitle: "สร้างบัญชีของคุณ",
      registerSubtitle: "เข้าร่วมชุมชนเพื่อแจ้ง ค้นหา และรับคืนของ",
      loginTitle: "เข้าสู่ระบบ",
      loginSubtitle: "เข้าสู่ระบบเพื่อแจ้งรายการ ส่งข้อความ และดูแดชบอร์ดของคุณ",
      noLostYet: "ยังไม่มีรายการของหาย",
      noFoundYet: "ยังไม่มีรายการของที่พบ"
    }
  };

  const state = {
    db: { users: [], listings: [], conversations: [], notifications: [], reports: [] },
    session: null,
    authError: null,
    lang: localStorage.getItem(LANG_KEY) || "en",
    mobileOpen: false,
    searchLoading: false,
    reportDraft: null,
    selectedConversationId: null,
    selectedImageIndex: 0,
    modal: null
  };

  function t(key) {
    return (i18n[state.lang] && i18n[state.lang][key]) || i18n.en[key] || key;
  }

  function text(value) {
    if (value && typeof value === "object") return value[state.lang] || value.en || value.th || "";
    return value || "";
  }

  function html(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function id(prefix) {
    return `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function formatDate(iso, withTime = false) {
    const options = withTime
      ? { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }
      : { year: "numeric", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat(state.lang === "th" ? "th-TH" : "en-US", options).format(new Date(iso));
  }

  function svgImage(title, color, accent, detail) {
    const safeTitle = html(title);
    const safeDetail = html(detail || "");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="900" height="675" viewBox="0 0 900 675">
        <rect width="900" height="675" fill="${color}"/>
        <path d="M0 520C180 455 277 545 445 492C619 437 641 314 900 352V675H0Z" fill="${accent}" opacity=".22"/>
        <rect x="110" y="96" width="680" height="476" rx="32" fill="rgba(255,255,255,.78)"/>
        <circle cx="225" cy="210" r="56" fill="${accent}" opacity=".88"/>
        <rect x="315" y="168" width="340" height="32" rx="16" fill="#182321" opacity=".82"/>
        <rect x="315" y="224" width="250" height="24" rx="12" fill="#61716f" opacity=".65"/>
        <rect x="165" y="330" width="570" height="142" rx="24" fill="#ffffff" opacity=".82"/>
        <text x="450" y="396" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="800" fill="#182321">${safeTitle}</text>
        <text x="450" y="442" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#61716f">${safeDetail}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function avatarImage(initials, color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" rx="80" fill="${color}"/><text x="80" y="94" text-anchor="middle" font-family="Arial" font-size="48" font-weight="800" fill="white">${html(initials)}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  const AVATAR_COLORS = ["#0f6e5a", "#316da8", "#b9852b", "#b83b23", "#5c7a35", "#7c6a9c"];

  function initialsOf(name) {
    return (
      (name || "?")
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase() || "?"
    );
  }

  function colorForId(idStr) {
    let hash = 0;
    for (let i = 0; i < String(idStr).length; i += 1) hash = (hash * 31 + idStr.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[hash % AVATAR_COLORS.length];
  }

  // ---------------- Supabase row <-> app shape mapping ----------------

  function mapProfileRow(row) {
    return {
      id: row.id,
      name: row.name,
      memberSince: row.created_at,
      avatar: row.avatar_url || avatarImage(initialsOf(row.name), colorForId(row.id))
    };
  }

  function mapListingRow(row) {
    return {
      id: row.id,
      type: row.type,
      status: row.status,
      posterId: row.poster_id,
      name: row.name,
      category: row.category,
      description: row.description,
      color: row.color || "",
      brand: row.brand || "",
      location: row.location,
      dateTime: row.date_time,
      details: row.details || "",
      photos: row.photos || [],
      contactPrefs: row.contact_prefs || "",
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      recoveredAt: row.recovered_at
    };
  }

  function mapConversationRow(row) {
    const messages = (row.messages || [])
      .slice()
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .map((m) => ({ id: m.id, senderId: m.sender_id, body: m.body, createdAt: m.created_at }));
    return {
      id: row.id,
      itemId: row.item_id,
      participants: row.participants,
      unreadBy: row.unread_by || [],
      updatedAt: row.updated_at,
      createdAt: row.created_at,
      messages
    };
  }

  function mapNotificationRow(row) {
    return {
      id: row.id,
      userId: row.user_id,
      type: row.type,
      itemId: row.item_id,
      conversationId: row.conversation_id,
      title: row.title,
      body: row.body,
      read: row.read,
      createdAt: row.created_at
    };
  }

  // ---------------- Data loading (real database) ----------------

  function uid() {
    return state.session ? state.session.user.id : null;
  }

  function currentUser() {
    if (!state.session) return null;
    return state.db.users.find((user) => user.id === uid()) || null;
  }

  function userName(user) {
    if (!user) return "";
    return state.lang === "th" && user.nameTh ? user.nameTh : user.name;
  }

  async function refreshProfiles() {
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
      toast(error.message);
      return;
    }
    state.db.users = (data || []).map(mapProfileRow);
  }

  async function refreshListings() {
    const { data, error } = await supabase.from("listings").select("*").order("created_at", { ascending: false });
    if (error) {
      toast(error.message);
      return;
    }
    state.db.listings = (data || []).map(mapListingRow);
  }

  async function refreshConversations() {
    if (!state.session) {
      state.db.conversations = [];
      return;
    }
    const { data, error } = await supabase
      .from("conversations")
      .select("*, messages(*)")
      .contains("participants", [uid()])
      .order("updated_at", { ascending: false });
    if (error) {
      toast(error.message);
      return;
    }
    state.db.conversations = (data || []).map(mapConversationRow);
  }

  async function refreshNotifications() {
    if (!state.session) {
      state.db.notifications = [];
      return;
    }
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", uid())
      .order("created_at", { ascending: false });
    if (error) {
      toast(error.message);
      return;
    }
    state.db.notifications = (data || []).map(mapNotificationRow);
  }

  async function refreshAll() {
    await Promise.all([refreshProfiles(), refreshListings(), refreshConversations(), refreshNotifications()]);
  }

  function listingImage(listing) {
    return listing.photos && listing.photos[0] ? listing.photos[0] : svgImage(t("noPhoto"), "#f0f7f5", "#087f7b", "");
  }

  function statusLabel(listing) {
    if (listing.status === "recovered") return t("statusRecovered");
    return listing.type === "lost" ? t("statusLost") : t("statusFound");
  }

  function statusClass(listing) {
    if (listing.status === "recovered") return "badge-recovered";
    return listing.type === "lost" ? "badge-lost" : "badge-found";
  }

  function tokenize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter(Boolean);
  }

  function searchableText(listing) {
    return [
      text(listing.name),
      text(listing.description),
      t(listing.category),
      text(listing.color),
      listing.brand,
      text(listing.location),
      text(listing.details),
      listing.type,
      statusLabel(listing)
    ].join(" ");
  }

  function daysBetween(a, b) {
    return Math.abs(new Date(a).getTime() - new Date(b).getTime()) / 86400000;
  }

  function scoreListing(query, listing) {
    const qTokens = tokenize(query);
    if (!qTokens.length) return 1;
    const listingText = searchableText(listing).toLowerCase();
    let score = 0;
    qTokens.forEach((token) => {
      if (listingText.includes(token)) score += token.length > 2 ? 3 : 1;
    });
    return score;
  }

  function findMatches(source, limit = 4) {
    const sourceTokens = new Set(tokenize(searchableText(source)));
    return state.db.listings
      .filter((item) => item.id !== source.id && item.type !== source.type && item.status !== "recovered")
      .map((item) => {
        const itemTokens = new Set(tokenize(searchableText(item)));
        let score = 0;
        sourceTokens.forEach((token) => {
          if (itemTokens.has(token)) score += token.length > 2 ? 3 : 1;
        });
        if (item.category === source.category) score += 15;
        if (text(item.color).toLowerCase() && text(item.color).toLowerCase() === text(source.color).toLowerCase()) score += 12;
        if (item.brand && source.brand && item.brand.toLowerCase() === source.brand.toLowerCase()) score += 10;
        if (text(item.location).toLowerCase().includes(text(source.location).split(",")[0].toLowerCase().slice(0, 8))) score += 8;
        const gap = daysBetween(item.dateTime, source.dateTime);
        if (gap <= 1) score += 9;
        else if (gap <= 7) score += 5;
        if ((item.photos || []).length && (source.photos || []).length && score > 18) score += 4;
        return { item, score };
      })
      .filter((match) => match.score >= 12)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((match) => ({
        ...match,
        confidence: match.score >= 42 ? "high" : match.score >= 24 ? "medium" : "low"
      }));
  }

  function getRoute() {
    const raw = location.hash.replace(/^#/, "") || "home";
    const [path, queryString = ""] = raw.split("?");
    return { path, params: new URLSearchParams(queryString) };
  }

  function go(path) {
    location.hash = path;
  }

  function icon(name) {
    const paths = {
      home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      report: '<path d="M12 5v14"/><path d="M5 12h14"/>',
      messages: '<path d="M4 5h16v11H8l-4 4V5Z"/>',
      bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
      user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 14.5-4 16 0"/>',
      dash: '<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
      menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
      send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
      check: '<path d="m20 6-11 11-5-5"/>'
    };
    return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">${paths[name] || paths.search}</svg>`;
  }

  function navItems() {
    const items = [
      ["home", t("navHome"), "home"],
      ["search", t("navSearch"), "search"]
    ];
    if (state.session) {
      items.push(
        ["dashboard", t("navDashboard"), "dash"],
        ["messages", t("navMessages"), "messages"],
        ["notifications", t("navNotifications"), "bell"],
        ["profile", t("navProfile"), "user"]
      );
    }
    return items;
  }

  function unreadMessages() {
    const myId = uid();
    if (!myId) return 0;
    return state.db.conversations.filter((conversation) => conversation.participants.includes(myId) && conversation.unreadBy.includes(myId)).length;
  }

  function unreadNotifications() {
    const myId = uid();
    if (!myId) return 0;
    return state.db.notifications.filter((notification) => notification.userId === myId && !notification.read).length;
  }

  function renderShell(content) {
    const route = getRoute().path.split("/")[0];
    const user = currentUser();
    const messageCount = unreadMessages();
    const notificationCount = unreadNotifications();
    const links = navItems()
      .map(([key, label, iconName]) => {
        const active = route === key || (route === "item" && key === "search");
        const count = key === "messages" ? messageCount : key === "notifications" ? notificationCount : 0;
        return `<a class="nav-link ${active ? "active" : ""}" href="#${key}">${icon(iconName)}<span>${html(label)}</span>${count ? `<span class="badge-dot">${count}</span>` : ""}</a>`;
      })
      .join("");

    const authActions = state.session
      ? `
        <span class="user-switch" title="${html(userName(user))}"><span>${html(userName(user))}</span></span>
        <button class="ghost-button" data-action="logout" type="button">${html(t("logOut"))}</button>`
      : `
        <a class="ghost-button" href="#login">${html(t("logIn"))}</a>
        <a class="primary-button" href="#register">${html(t("createAccount"))}</a>`;

    return `
      <div class="app-shell">
        <header class="topbar">
          <nav class="nav">
            <a class="brand" href="#home" aria-label="${html(t("appName"))}">
              <span class="brand-mark">LF</span>
              <span>${html(t("appName"))}</span>
            </a>
            <div class="nav-links">${links}</div>
            <div class="nav-actions">
              <button class="lang-toggle" data-action="toggle-lang" type="button">${html(t("language"))}</button>
              ${authActions}
              <button class="mobile-menu-button" data-action="toggle-menu" type="button" aria-label="${html(t("menu"))}">${icon("menu")}</button>
            </div>
          </nav>
          <div class="mobile-menu ${state.mobileOpen ? "open" : ""}">${links}</div>
        </header>
        <main>${content}</main>
        <nav class="bottom-nav">${navItems().slice(0, 5).map(([key, label, iconName]) => `<a class="nav-link ${route === key ? "active" : ""}" href="#${key}">${icon(iconName)}<span>${html(label)}</span></a>`).join("")}</nav>
        ${state.modal ? renderModal() : ""}
      </div>`;
  }

  function renderHome() {
    const active = state.db.listings.filter((listing) => listing.status !== "recovered");
    const recovered = state.db.listings.filter((listing) => listing.status === "recovered");
    const recentLost = active.filter((listing) => listing.type === "lost").sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
    const recentFound = active.filter((listing) => listing.type === "found").sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
    const showcase = [...recentLost, ...recentFound].slice(0, 3);
    return `
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <div class="eyebrow">${html(t("heroEyebrow"))}</div>
            <h1>${html(t("heroTitle"))}</h1>
            <p class="hero-copy">${html(t("heroCopy"))}</p>
            <form class="search-panel" id="home-search">
              ${icon("search")}
              <input id="home-query" autocomplete="off" placeholder="${html(t("searchPlaceholder"))}" />
              <button class="primary-button" type="submit">${icon("search")}${html(t("searchCta"))}</button>
            </form>
            <div class="hero-actions">
              <a class="primary-button" href="#report/lost">${html(t("lostCta"))}</a>
              <a class="secondary-button" href="#report/found">${html(t("foundCta"))}</a>
            </div>
          </div>
          <aside class="hero-side">
            <div class="feature-strip">
              ${statCard(state.db.listings.length, t("reported"))}
              ${statCard(recovered.length, t("recovered"))}
              ${statCard(active.length, t("activeListings"))}
            </div>
            <div class="panel hero-showcase">
              <div class="showcase-top">
                <strong>${html(t("possibleMatches"))}</strong>
                <span class="status-badge badge-match">${html(t("statusMatch"))}</span>
              </div>
              <div class="showcase-stack">
                ${showcase.length ? showcase.map((listing) => miniFloatingCard(listing)).join("") : `<p class="muted">${html(t("noResultsHint"))}</p>`}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <div><h2>${html(t("recentlyLost"))}</h2><p>${html(t("contactSafe"))}</p></div>
            <a class="ghost-button" href="#search?type=lost">${html(t("navSearch"))}</a>
          </div>
          ${recentLost.length ? `<div class="grid cards">${recentLost.map(itemCard).join("")}</div>` : emptyState(t("noLostYet"), t("contactSafe"), "report")}
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <div><h2>${html(t("recentlyFound"))}</h2><p>${html(t("tagline"))}</p></div>
            <a class="ghost-button" href="#search?type=found">${html(t("navSearch"))}</a>
          </div>
          ${recentFound.length ? `<div class="grid cards">${recentFound.map(itemCard).join("")}</div>` : emptyState(t("noFoundYet"), t("tagline"), "report")}
        </div>
      </section>`;
  }

  function statCard(value, label) {
    return `<div class="stat-card"><div class="stat-value">${html(value)}</div><div class="stat-label">${html(label)}</div></div>`;
  }

  function miniFloatingCard(listing) {
    return `
      <a class="mini-card floating-item" href="#item/${listing.id}">
        <img class="item-thumb" src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
        <div class="mini-card-body">
          <div class="card-foot">
            <h3 class="mini-title">${html(text(listing.name))}</h3>
            <span class="status-badge ${statusClass(listing)}">${html(statusLabel(listing))}</span>
          </div>
          <div class="meta">${html(text(listing.location))}</div>
        </div>
      </a>`;
  }

  function itemCard(listing, score) {
    return `
      <article class="item-card">
        <img class="item-thumb" src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
        <div class="item-card-body">
          <div class="card-foot">
            <span class="status-badge ${statusClass(listing)}">${html(statusLabel(listing))}</span>
            <span class="meta">${html(formatDate(listing.createdAt))}</span>
          </div>
          <h3 class="item-title">${html(text(listing.name))}</h3>
          <div class="meta">${html(text(listing.location))}</div>
          <p class="meta">${html(text(listing.description)).slice(0, 135)}${text(listing.description).length > 135 ? "..." : ""}</p>
          ${score ? `<span class="confidence">${html(t("relevance"))}: ${html(score)}</span>` : ""}
          <div class="card-foot">
            <span class="category-pill badge-match">${html(t(listing.category))}</span>
            <a class="secondary-button" href="#item/${listing.id}">${html(t("viewDetails"))}</a>
          </div>
        </div>
      </article>`;
  }

  function renderSearch() {
    const route = getRoute();
    const filters = {
      q: route.params.get("q") || "",
      type: route.params.get("type") || "all",
      category: route.params.get("category") || "all",
      location: route.params.get("location") || "",
      date: route.params.get("date") || "any",
      status: route.params.get("status") || "active",
      sort: route.params.get("sort") || "relevance"
    };
    const results = runSearch(filters);
    return `
      <section class="section">
        <div class="container">
          <div class="page-title">
            <div>
              <h1>${html(t("searchTitle"))}</h1>
              <p>${html(t("searchSubtitle"))}</p>
            </div>
            <a class="primary-button" href="#report/lost">${html(t("lostCta"))}</a>
          </div>
          <form class="search-panel" id="search-form">
            ${icon("search")}
            <input id="search-q" name="q" value="${html(filters.q)}" autocomplete="off" placeholder="${html(t("searchPlaceholder"))}" />
            <button class="primary-button" type="submit">${html(t("searchCta"))}</button>
          </form>
          <div class="filters-layout section">
            <aside class="panel filters">
              <strong>${html(t("filters"))}</strong>
              ${selectField("filter-type", t("type"), filters.type, [["all", t("allTypes")], ["lost", t("lost")], ["found", t("found")]])}
              ${selectField("filter-category", t("category"), filters.category, [["all", t("allCategories")], ...categories.map((cat) => [cat, t(cat)])])}
              ${inputField("filter-location", t("location"), filters.location)}
              ${selectField("filter-date", t("date"), filters.date, [["any", t("anyDate")], ["today", t("today")], ["week", t("week")], ["month", t("month")]])}
              ${selectField("filter-status", t("status"), filters.status, [["active", t("active")], ["recovered", t("recoveredStatus")], ["all", t("all")]])}
            </aside>
            <section>
              <div class="toolbar">
                <div class="muted">${state.searchLoading ? html(t("loading")) : `${results.length} ${html(t("activeListings")).toLowerCase()}`}</div>
                ${selectField("filter-sort", t("sortBy"), filters.sort, [["relevance", t("relevance")], ["newest", t("newest")], ["oldest", t("oldest")]])}
              </div>
              ${state.searchLoading ? `<div class="grid cards">${Array.from({ length: 6 }, () => `<div class="skeleton"></div>`).join("")}</div>` : results.length ? `<div class="grid cards">${results.map((entry) => itemCard(entry.listing, filters.q ? entry.score : 0)).join("")}</div>` : emptyState(t("noResults"), t("noResultsHint"), "search")}
            </section>
          </div>
        </div>
      </section>`;
  }

  function runSearch(filters) {
    let items = state.db.listings.map((listing) => ({ listing, score: scoreListing(filters.q, listing) }));
    if (filters.q) items = items.filter((entry) => entry.score > 0);
    if (filters.type !== "all") items = items.filter((entry) => entry.listing.type === filters.type);
    if (filters.category !== "all") items = items.filter((entry) => entry.listing.category === filters.category);
    if (filters.location) {
      const location = filters.location.toLowerCase();
      items = items.filter((entry) => text(entry.listing.location).toLowerCase().includes(location));
    }
    if (filters.status === "active") items = items.filter((entry) => entry.listing.status !== "recovered");
    if (filters.status === "recovered") items = items.filter((entry) => entry.listing.status === "recovered");
    if (filters.date !== "any") {
      const days = filters.date === "today" ? 1 : filters.date === "week" ? 7 : 30;
      const cutoff = Date.now() - days * 86400000;
      items = items.filter((entry) => new Date(entry.listing.dateTime).getTime() >= cutoff);
    }
    if (filters.sort === "newest") items.sort((a, b) => new Date(b.listing.createdAt) - new Date(a.listing.createdAt));
    else if (filters.sort === "oldest") items.sort((a, b) => new Date(a.listing.createdAt) - new Date(b.listing.createdAt));
    else items.sort((a, b) => b.score - a.score || new Date(b.listing.createdAt) - new Date(a.listing.createdAt));
    return items;
  }

  function inputField(idValue, label, value, type = "text") {
    return `<div class="field"><label for="${idValue}">${html(label)}</label><input id="${idValue}" type="${type}" value="${html(value || "")}" /></div>`;
  }

  function textareaField(idValue, label, value) {
    return `<div class="field span-2"><label for="${idValue}">${html(label)}</label><textarea id="${idValue}">${html(value || "")}</textarea></div>`;
  }

  function selectField(idValue, label, value, options) {
    return `<div class="field"><label for="${idValue}">${html(label)}</label><select id="${idValue}">${options.map(([optionValue, optionLabel]) => `<option value="${html(optionValue)}" ${String(value) === String(optionValue) ? "selected" : ""}>${html(optionLabel)}</option>`).join("")}</select></div>`;
  }

  function emptyState(title, body, iconName = "shield") {
    return `<div class="empty-state">${icon(iconName)}<h3>${html(title)}</h3><p>${html(body || "")}</p></div>`;
  }

  function createDraft(type) {
    return {
      type,
      step: 1,
      errors: {},
      uploadProgress: 0,
      itemName: "",
      category: "electronics",
      description: "",
      color: "",
      brand: "",
      location: "",
      dateTime: new Date().toISOString().slice(0, 16),
      details: "",
      photos: [],
      contactPrefs: "Internal message only"
    };
  }

  function renderReport(type) {
    if (!state.reportDraft || state.reportDraft.type !== type) state.reportDraft = createDraft(type);
    const draft = state.reportDraft;
    const title = type === "lost" ? t("reportLostTitle") : t("reportFoundTitle");
    return `
      <section class="section">
        <div class="container">
          <div class="page-title">
            <div><h1>${html(title)}</h1><p>${html(t("reportSubtitle"))}</p></div>
            <div class="segmented">
              <button type="button" data-action="report-type" data-type="lost" class="${type === "lost" ? "active" : ""}">${html(t("lost"))}</button>
              <button type="button" data-action="report-type" data-type="found" class="${type === "found" ? "active" : ""}">${html(t("found"))}</button>
            </div>
          </div>
          <div class="form-shell">
            <aside class="steps">
              <button class="step ${draft.step === 1 ? "active" : ""}" data-action="set-step" data-step="1" type="button">${html(t("stepDetails"))}</button>
              <button class="step ${draft.step === 2 ? "active" : ""}" data-action="set-step" data-step="2" type="button">${html(t("stepPhotos"))}</button>
              <button class="step ${draft.step === 3 ? "active" : ""}" data-action="set-step" data-step="3" type="button">${html(t("stepPreview"))}</button>
            </aside>
            <form class="form-card" id="report-form">
              ${draft.step === 1 ? renderReportDetails(draft, type) : ""}
              ${draft.step === 2 ? renderReportPhotos(draft) : ""}
              ${draft.step === 3 ? renderReportPreview(draft, type) : ""}
              <div class="button-row">
                ${draft.step > 1 ? `<button class="ghost-button" data-action="prev-step" type="button">${html(t("back"))}</button>` : ""}
                ${draft.step < 3 ? `<button class="primary-button" data-action="next-step" type="button">${html(t("next"))}</button>` : `<button class="primary-button" data-action="publish-listing" type="button">${icon("check")}${html(t("publish"))}</button>`}
              </div>
            </form>
          </div>
        </div>
      </section>`;
  }

  function fieldError(draft, key) {
    return draft.errors[key] ? `<div class="error-text">${html(t("required"))}</div>` : "";
  }

  function renderReportDetails(draft, type) {
    return `
      <div class="form-grid">
        <div class="field"><label for="draft-itemName">${html(t("itemName"))}</label><input id="draft-itemName" data-draft="itemName" value="${html(draft.itemName)}" />${fieldError(draft, "itemName")}</div>
        ${selectField("draft-category", t("category"), draft.category, categories.map((cat) => [cat, t(cat)]))}
        <div class="field"><label for="draft-color">${html(t("color"))}</label><input id="draft-color" data-draft="color" value="${html(draft.color)}" />${fieldError(draft, "color")}</div>
        <div class="field"><label for="draft-brand">${html(t("brand"))}</label><input id="draft-brand" data-draft="brand" value="${html(draft.brand)}" /></div>
        <div class="field span-2"><label for="draft-location">${html(type === "lost" ? t("lostLocation") : t("foundLocation"))}</label><input id="draft-location" data-draft="location" value="${html(draft.location)}" />${fieldError(draft, "location")}</div>
        <div class="field span-2"><label for="draft-dateTime">${html(t("dateTime"))}</label><input id="draft-dateTime" data-draft="dateTime" type="datetime-local" value="${html(draft.dateTime)}" />${fieldError(draft, "dateTime")}</div>
        ${textareaField("draft-description", t("description"), draft.description).replace("<textarea", '<textarea data-draft="description"')}${fieldError(draft, "description")}
        ${textareaField("draft-details", t("details"), draft.details).replace("<textarea", '<textarea data-draft="details"')}
        <div class="field span-2"><label for="draft-contactPrefs">${html(t("contactPrefs"))}</label><input id="draft-contactPrefs" data-draft="contactPrefs" value="${html(draft.contactPrefs)}" /><div class="meta">${html(t("contactSafe"))}</div></div>
      </div>`;
  }

  function renderReportPhotos(draft) {
    return `
      <div class="dropzone" id="dropzone">
        <div>
          <h3>${html(t("dropPhotos"))}</h3>
          <p class="muted">${html(t("uploadHelp"))}</p>
          <label class="secondary-button" for="photo-input">${html(t("chooseFiles"))}</label>
          <input id="photo-input" type="file" accept="image/*" multiple hidden />
          <div class="progress"><span style="width:${draft.uploadProgress}%"></span></div>
        </div>
      </div>
      <div class="upload-grid">
        ${draft.photos.map((photo, index) => `
          <div class="upload-tile">
            <img src="${photo}" alt="${html(t("photo"))} ${index + 1}" />
            <div class="upload-actions">
              <button type="button" data-action="move-photo" data-index="${index}" data-dir="-1">${html(t("moveUp"))}</button>
              <button type="button" data-action="move-photo" data-index="${index}" data-dir="1">${html(t("moveDown"))}</button>
              <button type="button" data-action="remove-photo" data-index="${index}">${html(t("remove"))}</button>
            </div>
          </div>`).join("")}
      </div>`;
  }

  function renderReportPreview(draft, type) {
    const previewListing = {
      id: "preview",
      type,
      status: "active",
      name: draft.itemName,
      category: draft.category,
      description: draft.description,
      color: draft.color,
      brand: draft.brand,
      location: draft.location,
      dateTime: new Date(draft.dateTime).toISOString(),
      details: draft.details,
      photos: draft.photos,
      contactPrefs: draft.contactPrefs,
      createdAt: nowIso()
    };
    const matches = findMatches(previewListing);
    return `
      <h2>${html(t("preview"))}</h2>
      <div class="grid two">
        ${itemCard(previewListing)}
        <div class="panel">
          <h3>${html(t("possibleMatches"))}</h3>
          ${matches.length ? matches.map(matchCard).join("") : `<p class="muted">${html(t("noMatches"))}</p>`}
        </div>
      </div>`;
  }

  function renderItem(idValue) {
    const listing = state.db.listings.find((item) => item.id === idValue);
    if (!listing) return `<section class="section"><div class="container">${emptyState(t("noResults"), t("noResultsHint"))}</div></section>`;
    const poster = state.db.users.find((user) => user.id === listing.posterId) || { name: "?", avatar: svgImage(t("noPhoto"), "#f0f7f5", "#087f7b", ""), memberSince: listing.createdAt };
    const isOwner = listing.posterId === uid();
    const matches = findMatches(listing);
    const images = listing.photos && listing.photos.length ? listing.photos : [listingImage(listing)];
    const selected = Math.min(state.selectedImageIndex, images.length - 1);
    return `
      <section class="section">
        <div class="container detail-layout">
          <article class="panel">
            <div class="gallery">
              <img class="gallery-main" src="${images[selected]}" alt="${html(text(listing.name))}" />
              <div class="gallery-strip">${images.map((photo, index) => `<img class="${index === selected ? "active" : ""}" data-action="select-image" data-index="${index}" src="${photo}" alt="${html(t("photo"))} ${index + 1}" />`).join("")}</div>
            </div>
            <div class="detail-title section">
              <div>
                <span class="status-badge ${statusClass(listing)}">${html(statusLabel(listing))}</span>
                <h1>${html(text(listing.name))}</h1>
                <p class="hero-copy">${html(text(listing.description))}</p>
              </div>
            </div>
            ${listing.status === "recovered" ? `<div class="empty-state"><h3>${html(t("recoveredLabel"))}</h3><p>${html(t("contactSafe"))}</p></div>` : ""}
            <dl class="info-list">
              <div><dt>${html(t("category"))}</dt><dd>${html(t(listing.category))}</dd></div>
              <div><dt>${html(t("color"))}</dt><dd>${html(text(listing.color))}</dd></div>
              <div><dt>${html(t("brand"))}</dt><dd>${html(listing.brand || "-")}</dd></div>
              <div><dt>${html(t("location"))}</dt><dd>${html(text(listing.location))}</dd></div>
              <div><dt>${html(t("date"))}</dt><dd>${html(formatDate(listing.dateTime, true))}</dd></div>
              <div><dt>${html(t("currentStatus"))}</dt><dd>${html(statusLabel(listing))}</dd></div>
            </dl>
            <div class="section">
              <h2>${html(t("details"))}</h2>
              <p class="meta">${html(text(listing.details))}</p>
            </div>
          </article>
          <aside class="grid">
            <div class="panel">
              <h3>${html(t("poster"))}</h3>
              <div class="poster">
                <span class="avatar"><img src="${poster.avatar}" alt="${html(userName(poster))}" /></span>
                <div><strong>${html(userName(poster))}</strong><div class="meta">${html(t("memberSince"))}: ${html(formatDate(poster.memberSince))}</div></div>
              </div>
              <p class="meta">${html(t("contactSafe"))}</p>
              <div class="button-row">
                ${!isOwner ? `<button class="primary-button" data-action="message-user" data-id="${listing.id}" type="button">${html(t("messageUser"))}</button><button class="secondary-button" data-action="think-mine" data-id="${listing.id}" type="button">${html(t("thinkMine"))}</button>` : ""}
                <button class="ghost-button" data-action="open-report-modal" data-id="${listing.id}" type="button">${html(t("reportListing"))}</button>
                ${isOwner ? `<button class="ghost-button" data-action="open-edit-modal" data-id="${listing.id}" type="button">${html(t("edit"))}</button>` : ""}
                ${isOwner && listing.status !== "recovered" ? `<button class="secondary-button" data-action="recover-listing" data-id="${listing.id}" type="button">${html(t("markRecovered"))}</button>` : ""}
                ${isOwner ? `<button class="danger-button" data-action="delete-listing" data-id="${listing.id}" type="button">${html(t("deleteListing"))}</button>` : ""}
              </div>
            </div>
            <div class="panel">
              <h3>${html(t("possibleMatches"))}</h3>
              ${matches.length ? matches.map(matchCard).join("") : `<p class="muted">${html(t("noMatches"))}</p>`}
            </div>
          </aside>
        </div>
      </section>`;
  }

  function matchCard(match) {
    return `
      <a class="match-card" href="#item/${match.item.id}">
        <img src="${listingImage(match.item)}" alt="${html(text(match.item.name))}" />
        <div>
          <strong>${html(text(match.item.name))}</strong>
          <div class="meta">${html(text(match.item.location))}</div>
          <span class="confidence">${html(t("similarity"))}: ${html(t(match.confidence))}</span>
        </div>
      </a>`;
  }

  function renderMessages() {
    const myId = uid();
    const conversations = state.db.conversations
      .filter((conversation) => conversation.participants.includes(myId))
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    if (!state.selectedConversationId && conversations[0]) state.selectedConversationId = conversations[0].id;
    const active = state.db.conversations.find((conversation) => conversation.id === state.selectedConversationId) || conversations[0];
    return `
      <section class="section">
        <div class="container">
          <div class="page-title"><div><h1>${html(t("chatTitle"))}</h1><p>${html(t("contactSafe"))}</p></div></div>
          <div class="chat-layout">
            <aside class="conversation-list">
              <strong>${html(t("conversations"))}</strong>
              ${conversations.length ? conversations.map(conversationCard).join("") : emptyState(t("noConversations"), t("contactSafe"), "messages")}
            </aside>
            <section class="panel chat-panel">
              ${active ? chatPanel(active) : emptyState(t("noConversations"), t("contactSafe"), "messages")}
            </section>
          </div>
        </div>
      </section>`;
  }

  function conversationCard(conversation) {
    const myId = uid();
    const listing = state.db.listings.find((item) => item.id === conversation.itemId);
    const otherId = conversation.participants.find((idValue) => idValue !== myId);
    const other = state.db.users.find((user) => user.id === otherId);
    const last = conversation.messages[conversation.messages.length - 1];
    const unread = conversation.unreadBy.includes(myId);
    return `
      <button class="conversation-card ${conversation.id === state.selectedConversationId ? "active" : ""}" data-action="select-conversation" data-id="${conversation.id}" type="button">
        <img src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
        <span>
          <strong>${html(text(listing.name))}</strong>
          <span class="meta">${html(userName(other))}: ${html(last ? last.body.slice(0, 42) : "")}</span>
        </span>
        ${unread ? `<span class="badge-dot">1</span>` : ""}
      </button>`;
  }

  function chatPanel(conversation) {
    const myId = uid();
    const listing = state.db.listings.find((item) => item.id === conversation.itemId);
    const otherId = conversation.participants.find((idValue) => idValue !== myId);
    const other = state.db.users.find((user) => user.id === otherId);
    return `
      <div class="chat-header">
        <div class="poster">
          <img class="avatar" src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
          <div><strong>${html(text(listing.name))}</strong><div class="meta">${html(userName(other))} · ${html(text(listing.location))}</div></div>
        </div>
      </div>
      <div class="messages" id="message-list">
        ${conversation.messages.map((message) => `<div class="bubble ${message.senderId === myId ? "mine" : ""}">${html(message.body)}<div class="bubble-time">${html(formatDate(message.createdAt, true))}</div></div>`).join("")}
      </div>
      <form class="chat-input" id="chat-form">
        <input id="chat-message" placeholder="${html(t("typeMessage"))}" autocomplete="off" />
        <button class="primary-button" type="submit">${icon("send")}${html(t("send"))}</button>
      </form>`;
  }

  function renderNotifications() {
    const myId = uid();
    const notes = state.db.notifications.filter((note) => note.userId === myId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return `
      <section class="section">
        <div class="container">
          <div class="page-title">
            <div><h1>${html(t("notificationTitle"))}</h1><p>${html(t("dashboardSubtitle"))}</p></div>
            <button class="ghost-button" data-action="mark-all-read" type="button">${html(t("markAllRead"))}</button>
          </div>
          <div class="grid">${notes.length ? notes.map(notificationRow).join("") : emptyState(t("emptyNotifications"), t("dashboardSubtitle"), "bell")}</div>
        </div>
      </section>`;
  }

  function notificationRow(note) {
    return `
      <a class="notification-row ${note.read ? "" : "unread"}" href="${note.conversationId ? "#messages" : note.itemId ? `#item/${note.itemId}` : "#notifications"}" data-action="read-note" data-id="${note.id}">
        <div><strong>${html(text(note.title))}</strong><div class="meta">${html(text(note.body))}</div></div>
        <span class="meta">${html(formatDate(note.createdAt, true))}</span>
      </a>`;
  }

  function renderProfile() {
    const user = currentUser();
    const myId = uid();
    const mine = state.db.listings.filter((listing) => listing.posterId === myId);
    const active = mine.filter((listing) => listing.status !== "recovered");
    const recovered = mine.filter((listing) => listing.status === "recovered");
    return `
      <section class="section">
        <div class="container">
          <div class="profile-head">
            <span class="avatar"><img src="${user.avatar}" alt="${html(userName(user))}" /></span>
            <div><h1>${html(userName(user))}</h1><p class="meta">${html(t("signedInAs"))} ${html(userName(user))} · ${html(t("memberSince"))}: ${html(formatDate(user.memberSince))}</p></div>
            <button class="ghost-button" data-action="logout" type="button">${html(t("logOut"))}</button>
          </div>
          <div class="section grid three">
            ${statCard(mine.length, t("itemsReported"))}
            ${statCard(mine.filter((item) => item.type === "found").length, t("itemsFound"))}
            ${statCard(recovered.length, t("recovered"))}
          </div>
          <div class="grid two">
            <section class="panel">
              <h2>${html(t("manageListings"))}</h2>
              <div class="grid">${active.length ? active.map(listingRow).join("") : emptyState(t("noResults"), t("noResultsHint"))}</div>
            </section>
            <section class="panel">
              <h2>${html(t("recoveredHistory"))}</h2>
              <div class="grid">${recovered.length ? recovered.map(listingRow).join("") : emptyState(t("emptyNotifications"), t("dashboardSubtitle"))}</div>
            </section>
          </div>
        </div>
      </section>`;
  }

  function listingRow(listing) {
    const myId = uid();
    return `
      <div class="listing-row">
        <img src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
        <div><strong>${html(text(listing.name))}</strong><div class="meta">${html(text(listing.location))} · ${html(formatDate(listing.createdAt))}</div><span class="status-badge ${statusClass(listing)}">${html(statusLabel(listing))}</span></div>
        <div class="button-row">
          <a class="secondary-button" href="#item/${listing.id}">${html(t("viewDetails"))}</a>
          ${listing.posterId === myId ? `<button class="ghost-button" data-action="open-edit-modal" data-id="${listing.id}" type="button">${html(t("edit"))}</button>` : ""}
          ${listing.posterId === myId && listing.status !== "recovered" ? `<button class="ghost-button" data-action="recover-listing" data-id="${listing.id}" type="button">${html(t("markRecovered"))}</button>` : ""}
        </div>
      </div>`;
  }

  function renderDashboard() {
    const myId = uid();
    const mine = state.db.listings.filter((listing) => listing.posterId === myId);
    const activeLost = mine.filter((listing) => listing.type === "lost" && listing.status !== "recovered");
    const activeFound = mine.filter((listing) => listing.type === "found" && listing.status !== "recovered");
    const possible = mine.flatMap((listing) => findMatches(listing).map((match) => ({ source: listing, ...match }))).slice(0, 5);
    const notes = state.db.notifications.filter((note) => note.userId === myId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
    const recovered = mine.filter((listing) => listing.status === "recovered");
    return `
      <section class="section">
        <div class="container">
          <div class="page-title"><div><h1>${html(t("dashboardTitle"))}</h1><p>${html(t("dashboardSubtitle"))}</p></div></div>
          <div class="grid three">
            ${statCard(activeLost.length, t("activeLost"))}
            ${statCard(activeFound.length, t("activeFound"))}
            ${statCard(unreadMessages(), t("navMessages"))}
          </div>
          <div class="section grid two">
            <section class="panel"><h2>${html(t("possibleMatches"))}</h2><div class="grid">${possible.length ? possible.map((entry) => matchCard(entry)).join("") : emptyState(t("noMatches"), t("dashboardSubtitle"))}</div></section>
            <section class="panel"><h2>${html(t("notificationTitle"))}</h2><div class="grid">${notes.length ? notes.map(notificationRow).join("") : emptyState(t("emptyNotifications"), t("dashboardSubtitle"))}</div></section>
            <section class="panel"><h2>${html(t("activeReports"))}</h2><div class="grid">${mine.filter((listing) => listing.status !== "recovered").map(listingRow).join("") || emptyState(t("noResults"), t("noResultsHint"))}</div></section>
            <section class="panel"><h2>${html(t("recentRecovered"))}</h2><div class="grid">${recovered.map(listingRow).join("") || emptyState(t("emptyNotifications"), t("dashboardSubtitle"))}</div></section>
          </div>
        </div>
      </section>`;
  }

  function renderModal() {
    if (state.modal.type === "report") {
      return `
        <div class="modal-backdrop" data-action="close-modal">
          <form class="modal" id="report-modal">
            <h2>${html(t("suspicious"))}</h2>
            <div class="field"><label for="report-reason">${html(t("reportReason"))}</label><textarea id="report-reason" required></textarea></div>
            <div class="button-row">
              <button class="primary-button" type="submit">${html(t("submitReport"))}</button>
              <button class="ghost-button" data-action="close-modal" type="button">${html(t("cancel"))}</button>
            </div>
          </form>
        </div>`;
    }
    if (state.modal.type === "edit") {
      const listing = state.db.listings.find((item) => item.id === state.modal.itemId);
      if (!listing) return "";
      return `
        <div class="modal-backdrop" data-action="close-modal">
          <form class="modal" id="edit-modal">
            <h2>${html(t("edit"))}</h2>
            <div class="form-grid">
              <div class="field"><label for="edit-name">${html(t("itemName"))}</label><input id="edit-name" required value="${html(text(listing.name))}" /></div>
              ${selectField("edit-category", t("category"), listing.category, categories.map((cat) => [cat, t(cat)]))}
              <div class="field"><label for="edit-color">${html(t("color"))}</label><input id="edit-color" required value="${html(text(listing.color))}" /></div>
              <div class="field"><label for="edit-brand">${html(t("brand"))}</label><input id="edit-brand" value="${html(listing.brand || "")}" /></div>
              <div class="field span-2"><label for="edit-location">${html(t("location"))}</label><input id="edit-location" required value="${html(text(listing.location))}" /></div>
              <div class="field span-2"><label for="edit-description">${html(t("description"))}</label><textarea id="edit-description" required>${html(text(listing.description))}</textarea></div>
              <div class="field span-2"><label for="edit-details">${html(t("details"))}</label><textarea id="edit-details">${html(text(listing.details))}</textarea></div>
            </div>
            <div class="button-row">
              <button class="primary-button" type="submit">${html(t("save"))}</button>
              <button class="ghost-button" data-action="close-modal" type="button">${html(t("cancel"))}</button>
            </div>
          </form>
        </div>`;
    }
    return "";
  }

  function renderLogin() {
    return `
      <section class="section">
        <div class="container auth-wrap">
          <div class="page-title"><div><h1>${html(t("loginTitle"))}</h1><p>${html(t("loginSubtitle"))}</p></div></div>
          <form class="form-card" id="login-form">
            <div class="form-grid">
              <div class="field span-2"><label for="login-email">${html(t("email"))}</label><input id="login-email" type="email" required autocomplete="email" /></div>
              <div class="field span-2"><label for="login-password">${html(t("password"))}</label><input id="login-password" type="password" required autocomplete="current-password" /></div>
            </div>
            ${state.authError ? `<div class="error-text">${html(state.authError)}</div>` : ""}
            <div class="button-row">
              <button class="primary-button" type="submit">${html(t("logIn"))}</button>
              <a class="ghost-button" href="#register">${html(t("dontHaveAccount"))}</a>
            </div>
          </form>
        </div>
      </section>`;
  }

  function renderRegister() {
    return `
      <section class="section">
        <div class="container auth-wrap">
          <div class="page-title"><div><h1>${html(t("registerTitle"))}</h1><p>${html(t("registerSubtitle"))}</p></div></div>
          <form class="form-card" id="register-form">
            <div class="form-grid">
              <div class="field span-2"><label for="reg-name">${html(t("yourName"))}</label><input id="reg-name" required autocomplete="name" /></div>
              <div class="field span-2"><label for="reg-email">${html(t("email"))}</label><input id="reg-email" type="email" required autocomplete="email" /></div>
              <div class="field span-2"><label for="reg-password">${html(t("password"))}</label><input id="reg-password" type="password" minlength="6" required autocomplete="new-password" /></div>
              <div class="field span-2"><label for="reg-password2">${html(t("confirmPassword"))}</label><input id="reg-password2" type="password" minlength="6" required autocomplete="new-password" /></div>
            </div>
            ${state.authError ? `<div class="error-text">${html(state.authError)}</div>` : ""}
            <div class="button-row">
              <button class="primary-button" type="submit">${html(t("createAccount"))}</button>
              <a class="ghost-button" href="#login">${html(t("alreadyHaveAccount"))}</a>
            </div>
          </form>
        </div>
      </section>`;
  }

  function renderApp() {
    document.documentElement.lang = state.lang;
    const route = getRoute();
    const [page, arg] = route.path.split("/");

    const protectedPages = ["report", "messages", "notifications", "profile", "dashboard"];
    if (protectedPages.includes(page) && !state.session) {
      location.hash = "login";
      return;
    }
    if ((page === "login" || page === "register") && state.session) {
      location.hash = "home";
      return;
    }

    let content = "";
    if (page === "home") content = renderHome();
    else if (page === "search") content = renderSearch();
    else if (page === "report") content = renderReport(arg === "found" ? "found" : "lost");
    else if (page === "item") content = renderItem(arg);
    else if (page === "messages") content = renderMessages();
    else if (page === "notifications") content = renderNotifications();
    else if (page === "profile") content = renderProfile();
    else if (page === "dashboard") content = renderDashboard();
    else if (page === "login") content = renderLogin();
    else if (page === "register") content = renderRegister();
    else content = renderHome();
    document.getElementById("app").innerHTML = renderShell(content);
    bindPage();
  }

  function updateSearchFromFilters() {
    const params = new URLSearchParams();
    const q = document.getElementById("search-q")?.value.trim() || "";
    const fields = [
      ["q", q, ""],
      ["type", document.getElementById("filter-type")?.value, "all"],
      ["category", document.getElementById("filter-category")?.value, "all"],
      ["location", document.getElementById("filter-location")?.value.trim(), ""],
      ["date", document.getElementById("filter-date")?.value, "any"],
      ["status", document.getElementById("filter-status")?.value, "active"],
      ["sort", document.getElementById("filter-sort")?.value, "relevance"]
    ];
    fields.forEach(([key, value, defaultValue]) => {
      if (value && value !== defaultValue) params.set(key, value);
    });
    state.searchLoading = true;
    history.replaceState(null, "", `#search${params.toString() ? `?${params}` : ""}`);
    renderApp();
    setTimeout(() => {
      state.searchLoading = false;
      renderApp();
    }, 420);
  }

  function validateDraft(step = state.reportDraft.step) {
    const draft = state.reportDraft;
    const required = step === 1 ? ["itemName", "description", "color", "location", "dateTime"] : [];
    draft.errors = {};
    required.forEach((key) => {
      if (!String(draft[key] || "").trim()) draft.errors[key] = true;
    });
    return Object.keys(draft.errors).length === 0;
  }

  function tObj(en, th) {
    return { en, th };
  }

  async function addNotification(userId, type, itemId, title, body, conversationId) {
    const { error } = await supabase.from("notifications").insert({
      user_id: userId,
      type,
      item_id: itemId || null,
      conversation_id: conversationId || null,
      title,
      body,
      read: false
    });
    if (error) toast(error.message);
  }

  async function publishListing() {
    if (!state.session) return go("login");
    if (!validateDraft(1)) {
      state.reportDraft.step = 1;
      renderApp();
      return;
    }
    const draft = state.reportDraft;
    const posterId = uid();
    const { data, error } = await supabase
      .from("listings")
      .insert({
        poster_id: posterId,
        type: draft.type,
        status: "active",
        name: draft.itemName,
        category: draft.category,
        description: draft.description,
        color: draft.color,
        brand: draft.brand,
        location: draft.location,
        date_time: new Date(draft.dateTime).toISOString(),
        details: draft.details,
        photos: draft.photos,
        contact_prefs: draft.contactPrefs
      })
      .select()
      .single();
    if (error) {
      toast(error.message);
      return;
    }
    const listing = mapListingRow(data);
    state.db.listings.unshift(listing);
    const matches = findMatches(listing);
    if (matches.length) {
      await addNotification(posterId, "match", listing.id, tObj("Possible matches found", "พบรายการที่อาจตรงกัน"), tObj(`${matches.length} listing may match your report.`, `มี ${matches.length} รายการที่อาจตรงกับรายการของคุณ`));
      for (const match of matches) {
        if (match.item.posterId !== posterId) {
          await addNotification(match.item.posterId, "match", match.item.id, tObj("Someone posted a possible match", "มีคนโพสต์รายการที่อาจตรงกัน"), tObj(`${text(listing.name)} may match your listing.`, `${text(listing.name)} อาจตรงกับรายการของคุณ`));
        }
      }
      await refreshNotifications();
    }
    state.reportDraft = null;
    toast(t("published"));
    go(`item/${listing.id}`);
  }

  async function getOrCreateConversation(listing) {
    const myId = uid();
    const existing = state.db.conversations.find((c) => c.itemId === listing.id && c.participants.includes(myId) && c.participants.includes(listing.posterId));
    if (existing) return existing;
    const greeting = state.lang === "th" ? "สวัสดีครับ/ค่ะ ฉันติดต่อเรื่องรายการนี้ อยากตรวจสอบรายละเอียดเพิ่มเติม" : "Hi, I am contacting you about this listing and would like to verify a few details.";
    const { data: convoRow, error } = await supabase
      .from("conversations")
      .insert({ item_id: listing.id, participants: [myId, listing.posterId], unread_by: [listing.posterId] })
      .select()
      .single();
    if (error) {
      toast(error.message);
      return null;
    }
    const { data: msgRow, error: msgError } = await supabase
      .from("messages")
      .insert({ conversation_id: convoRow.id, sender_id: myId, body: greeting })
      .select()
      .single();
    if (msgError) toast(msgError.message);
    await addNotification(listing.posterId, "message", listing.id, tObj("New message", "ข้อความใหม่"), tObj(`${userName(currentUser())} messaged you about ${text(listing.name)}.`, `${userName(currentUser())} ส่งข้อความเกี่ยวกับ ${text(listing.name)}`), convoRow.id);
    const conversation = mapConversationRow({ ...convoRow, messages: msgRow ? [msgRow] : [] });
    state.db.conversations.unshift(conversation);
    return conversation;
  }

  async function markRecovered(listingId) {
    const listing = state.db.listings.find((item) => item.id === listingId);
    if (!listing) return;
    if (listing.posterId !== uid()) {
      toast(t("ownerOnly"));
      return;
    }
    if (!confirm(t("confirmRecover"))) return;
    const { error } = await supabase.from("listings").update({ status: "recovered", recovered_at: nowIso(), updated_at: nowIso() }).eq("id", listingId);
    if (error) {
      toast(error.message);
      return;
    }
    listing.status = "recovered";
    listing.recoveredAt = nowIso();
    listing.updatedAt = nowIso();
    await addNotification(uid(), "status", listing.id, tObj("Listing recovered", "คืนของสำเร็จ"), tObj(`${text(listing.name)} was moved to recovered history.`, `${text(listing.name)} ถูกย้ายไปยังประวัติคืนของแล้ว`));
    await refreshNotifications();
    toast(t("recoveredToast"));
    renderApp();
  }

  async function deleteListing(listingId) {
    const listing = state.db.listings.find((item) => item.id === listingId);
    if (!listing) return;
    if (listing.posterId !== uid()) {
      toast(t("ownerOnly"));
      return;
    }
    if (!confirm(t("confirmDelete"))) return;
    const { error } = await supabase.from("listings").delete().eq("id", listingId);
    if (error) {
      toast(error.message);
      return;
    }
    state.db.listings = state.db.listings.filter((item) => item.id !== listingId);
    state.db.conversations = state.db.conversations.filter((conversation) => conversation.itemId !== listingId);
    toast(t("deleted"));
    go("profile");
  }

  function toast(message) {
    const region = document.getElementById("toast-region");
    const node = document.createElement("div");
    node.className = "toast";
    node.textContent = message;
    region.appendChild(node);
    setTimeout(() => node.remove(), 3400);
  }

  async function readFiles(files) {
    if (!state.session) return;
    const draft = state.reportDraft;
    const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
    if (!imageFiles.length) return;
    draft.uploadProgress = 5;
    renderApp();
    let done = 0;
    for (const file of imageFiles) {
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
      const path = `${uid()}/${id("photo")}.${ext}`;
      const { error } = await supabase.storage.from("listing-photos").upload(path, file, { cacheControl: "3600", upsert: false });
      if (!error) {
        const { data } = supabase.storage.from("listing-photos").getPublicUrl(path);
        draft.photos.push(data.publicUrl);
      } else {
        toast(error.message);
      }
      done += 1;
      draft.uploadProgress = Math.round((done / imageFiles.length) * 100);
      renderApp();
    }
  }

  function bindPage() {
    document.querySelectorAll("[data-action]").forEach((node) => {
      node.addEventListener("click", handleAction);
    });

    const homeSearch = document.getElementById("home-search");
    if (homeSearch) {
      homeSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const q = document.getElementById("home-query").value.trim();
        go(`search${q ? `?q=${encodeURIComponent(q)}` : ""}`);
      });
    }

    const searchForm = document.getElementById("search-form");
    if (searchForm) searchForm.addEventListener("submit", (event) => { event.preventDefault(); updateSearchFromFilters(); });
    ["filter-type", "filter-category", "filter-location", "filter-date", "filter-status", "filter-sort"].forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field) field.addEventListener("change", updateSearchFromFilters);
    });

    document.querySelectorAll("[data-draft]").forEach((field) => {
      field.addEventListener("input", () => {
        state.reportDraft[field.dataset.draft] = field.value;
        if (state.reportDraft.errors[field.dataset.draft]) state.reportDraft.errors[field.dataset.draft] = false;
      });
    });
    const category = document.getElementById("draft-category");
    if (category) category.addEventListener("change", () => { state.reportDraft.category = category.value; });

    const dropzone = document.getElementById("dropzone");
    const photoInput = document.getElementById("photo-input");
    if (photoInput) photoInput.addEventListener("change", () => readFiles(photoInput.files));
    if (dropzone) {
      ["dragenter", "dragover"].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); dropzone.classList.add("drag"); }));
      ["dragleave", "drop"].forEach((name) => dropzone.addEventListener(name, (event) => { event.preventDefault(); dropzone.classList.remove("drag"); }));
      dropzone.addEventListener("drop", (event) => readFiles(event.dataTransfer.files));
    }

    const chatForm = document.getElementById("chat-form");
    if (chatForm) {
      chatForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = document.getElementById("chat-message");
        const body = input.value.trim();
        if (!body) return;
        const conversation = state.db.conversations.find((entry) => entry.id === state.selectedConversationId);
        if (!conversation) return;
        const myId = uid();
        const { data, error } = await supabase.from("messages").insert({ conversation_id: conversation.id, sender_id: myId, body }).select().single();
        if (error) {
          toast(error.message);
          return;
        }
        conversation.messages.push({ id: data.id, senderId: data.sender_id, body: data.body, createdAt: data.created_at });
        const unreadBy = conversation.participants.filter((participantId) => participantId !== myId);
        await supabase.from("conversations").update({ unread_by: unreadBy, updated_at: nowIso() }).eq("id", conversation.id);
        conversation.unreadBy = unreadBy;
        conversation.updatedAt = nowIso();
        const listing = state.db.listings.find((item) => item.id === conversation.itemId);
        for (const userId of unreadBy) {
          await addNotification(userId, "message", conversation.itemId, tObj("New message", "ข้อความใหม่"), tObj(`${userName(currentUser())} sent a message about ${text(listing.name)}.`, `${userName(currentUser())} ส่งข้อความเกี่ยวกับ ${text(listing.name)}`), conversation.id);
        }
        toast(t("messageSent"));
        renderApp();
      });
    }

    const reportModal = document.getElementById("report-modal");
    if (reportModal) {
      reportModal.addEventListener("submit", async (event) => {
        event.preventDefault();
        const { error } = await supabase.from("reports").insert({
          item_id: state.modal.itemId,
          reporter_id: uid(),
          reason: document.getElementById("report-reason").value.trim()
        });
        state.modal = null;
        if (error) {
          toast(error.message);
          renderApp();
          return;
        }
        toast(t("reportSent"));
        renderApp();
      });
    }

    const editModal = document.getElementById("edit-modal");
    if (editModal) {
      editModal.addEventListener("submit", async (event) => {
        event.preventDefault();
        const listing = state.db.listings.find((item) => item.id === state.modal.itemId);
        if (!listing) return;
        if (listing.posterId !== uid()) {
          toast(t("ownerOnly"));
          return;
        }
        const updates = {
          name: document.getElementById("edit-name").value.trim(),
          category: document.getElementById("edit-category").value,
          color: document.getElementById("edit-color").value.trim(),
          brand: document.getElementById("edit-brand").value.trim(),
          location: document.getElementById("edit-location").value.trim(),
          description: document.getElementById("edit-description").value.trim(),
          details: document.getElementById("edit-details").value.trim(),
          updated_at: nowIso()
        };
        const { error } = await supabase.from("listings").update(updates).eq("id", listing.id);
        if (error) {
          toast(error.message);
          return;
        }
        Object.assign(listing, {
          name: updates.name,
          category: updates.category,
          color: updates.color,
          brand: updates.brand,
          location: updates.location,
          description: updates.description,
          details: updates.details,
          updatedAt: updates.updated_at
        });
        state.modal = null;
        toast(t("save"));
        renderApp();
      });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          state.authError = t("invalidCredentials");
          renderApp();
          return;
        }
        state.authError = null;
        state.session = data.session;
        await refreshAll();
        toast(`${t("welcomeBack")} ${userName(currentUser())}`);
        go("home");
      });
    }

    const registerForm = document.getElementById("register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("reg-name").value.trim();
        const email = document.getElementById("reg-email").value.trim();
        const password = document.getElementById("reg-password").value;
        const password2 = document.getElementById("reg-password2").value;
        if (password !== password2) {
          state.authError = t("passwordsNoMatch");
          renderApp();
          return;
        }
        const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
        if (error) {
          state.authError = error.message;
          renderApp();
          return;
        }
        state.authError = null;
        if (data.session) {
          state.session = data.session;
          await refreshAll();
          toast(t("accountCreated"));
          go("home");
        } else {
          toast(t("checkEmailConfirm"));
          go("login");
        }
      });
    }
  }

  async function handleAction(event) {
    const actionNode = event.currentTarget;
    const action = actionNode.dataset.action;
    if (action === "toggle-lang") {
      state.lang = state.lang === "en" ? "th" : "en";
      localStorage.setItem(LANG_KEY, state.lang);
      renderApp();
    } else if (action === "toggle-menu") {
      state.mobileOpen = !state.mobileOpen;
      renderApp();
    } else if (action === "logout") {
      await supabase.auth.signOut();
      toast(t("loggedOut"));
      go("home");
    } else if (action === "report-type") {
      go(`report/${actionNode.dataset.type}`);
    } else if (action === "set-step") {
      const targetStep = Number(actionNode.dataset.step);
      if (targetStep > state.reportDraft.step && !validateDraft(1)) {
        state.reportDraft.step = 1;
      } else {
        state.reportDraft.step = targetStep;
      }
      renderApp();
    } else if (action === "next-step") {
      if (state.reportDraft.step === 1 && !validateDraft(1)) return renderApp();
      state.reportDraft.step += 1;
      renderApp();
    } else if (action === "prev-step") {
      state.reportDraft.step -= 1;
      renderApp();
    } else if (action === "publish-listing") {
      await publishListing();
    } else if (action === "remove-photo") {
      state.reportDraft.photos.splice(Number(actionNode.dataset.index), 1);
      renderApp();
    } else if (action === "move-photo") {
      const indexValue = Number(actionNode.dataset.index);
      const target = indexValue + Number(actionNode.dataset.dir);
      if (target < 0 || target >= state.reportDraft.photos.length) return;
      const [photo] = state.reportDraft.photos.splice(indexValue, 1);
      state.reportDraft.photos.splice(target, 0, photo);
      renderApp();
    } else if (action === "select-image") {
      state.selectedImageIndex = Number(actionNode.dataset.index);
      renderApp();
    } else if (action === "message-user") {
      if (!state.session) return go("login");
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing || listing.posterId === uid()) return;
      const conversation = await getOrCreateConversation(listing);
      if (!conversation) return;
      state.selectedConversationId = conversation.id;
      toast(t("messageSent"));
      go("messages");
    } else if (action === "think-mine") {
      if (!state.session) return go("login");
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing) return;
      await addNotification(listing.posterId, "interaction", listing.id, tObj("Someone may own your found item", "มีคนอาจเป็นเจ้าของรายการที่คุณพบ"), tObj(`${userName(currentUser())} thinks ${text(listing.name)} may be theirs.`, `${userName(currentUser())} คิดว่า ${text(listing.name)} อาจเป็นของเขา/เธอ`));
      toast(t("interactionSent"));
    } else if (action === "open-report-modal") {
      event.preventDefault();
      if (!state.session) return go("login");
      state.modal = { type: "report", itemId: actionNode.dataset.id };
      renderApp();
    } else if (action === "open-edit-modal") {
      event.preventDefault();
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing || listing.posterId !== uid()) {
        toast(t("ownerOnly"));
        return;
      }
      state.modal = { type: "edit", itemId: listing.id };
      renderApp();
    } else if (action === "close-modal") {
      if (actionNode.classList.contains("modal-backdrop") && event.target !== actionNode) return;
      state.modal = null;
      renderApp();
    } else if (action === "recover-listing") {
      await markRecovered(actionNode.dataset.id);
    } else if (action === "delete-listing") {
      await deleteListing(actionNode.dataset.id);
    } else if (action === "select-conversation") {
      state.selectedConversationId = actionNode.dataset.id;
      const conversation = state.db.conversations.find((entry) => entry.id === state.selectedConversationId);
      const myId = uid();
      if (conversation && conversation.unreadBy.includes(myId)) {
        const nextUnread = conversation.unreadBy.filter((userId) => userId !== myId);
        await supabase.from("conversations").update({ unread_by: nextUnread }).eq("id", conversation.id);
        conversation.unreadBy = nextUnread;
      }
      renderApp();
    } else if (action === "mark-all-read") {
      const ids = state.db.notifications.filter((n) => !n.read).map((n) => n.id);
      if (ids.length) {
        await supabase.from("notifications").update({ read: true }).in("id", ids);
        state.db.notifications.forEach((note) => { note.read = true; });
      }
      renderApp();
    } else if (action === "read-note") {
      const note = state.db.notifications.find((entry) => entry.id === actionNode.dataset.id);
      if (note && !note.read) {
        note.read = true;
        await supabase.from("notifications").update({ read: true }).eq("id", note.id);
      }
    }
  }

  window.addEventListener("hashchange", () => {
    state.mobileOpen = false;
    state.selectedImageIndex = 0;
    renderApp();
  });

  async function bootstrap() {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    state.session = session;
    await refreshAll();
    renderApp();

    supabase.auth.onAuthStateChange(async (_event, session) => {
      state.session = session;
      await refreshAll();
      renderApp();
    });
  }

  bootstrap();
})();
