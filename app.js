(function () {
  "use strict";

  const DB_KEY = "lost_found_app_v1";
  const LANG_KEY = "lost_found_lang";
  const CURRENT_USER_KEY = "lost_found_current_user";

  const categories = ["electronics", "wallet", "documents", "bags", "keys", "clothing", "bottle", "other"];

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
      authHint: "Demo account",
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
      other: "Other"
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
      authHint: "บัญชีสาธิต",
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
      other: "อื่น ๆ"
    }
  };

  const state = {
    db: null,
    lang: localStorage.getItem(LANG_KEY) || "en",
    currentUserId: localStorage.getItem(CURRENT_USER_KEY) || "u1",
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

  function daysAgo(days, hour = 9) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    date.setHours(hour, 15, 0, 0);
    return date.toISOString();
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

  function defaultDb() {
    const users = [
      { id: "u1", name: "Maya Chen", nameTh: "มายา เฉิน", memberSince: "2025-02-16", avatar: avatarImage("MC", "#087f7b") },
      { id: "u2", name: "Narin S.", nameTh: "นรินทร์ ส.", memberSince: "2024-08-03", avatar: avatarImage("NS", "#316da8") },
      { id: "u3", name: "Pim R.", nameTh: "พิมพ์ ร.", memberSince: "2026-01-22", avatar: avatarImage("PR", "#c97826") }
    ];

    const listings = [
      {
        id: "l1",
        type: "lost",
        status: "active",
        posterId: "u1",
        name: { en: "Black iPhone", th: "ไอโฟนสีดำ" },
        category: "electronics",
        description: { en: "Black iPhone in a clear case. The lock screen has a beach photo.", th: "ไอโฟนสีดำใส่เคสใส หน้าจอล็อกเป็นรูปทะเล" },
        color: { en: "Black", th: "ดำ" },
        brand: "Apple",
        location: { en: "Hatyai Wittayalai School cafeteria", th: "โรงอาหารโรงเรียนหาดใหญ่วิทยาลัย" },
        dateTime: daysAgo(1, 12),
        details: { en: "Small sticker inside the case. Please message through the app.", th: "มีสติกเกอร์เล็ก ๆ ด้านในเคส กรุณาส่งข้อความผ่านแอป" },
        photos: [svgImage("iPhone", "#e9eef2", "#087f7b", "black case")],
        contactPrefs: "Internal message only",
        createdAt: daysAgo(1, 13),
        updatedAt: daysAgo(1, 13)
      },
      {
        id: "l2",
        type: "found",
        status: "active",
        posterId: "u2",
        name: { en: "Blue wallet", th: "กระเป๋าสตางค์สีน้ำเงิน" },
        category: "wallet",
        description: { en: "Blue wallet found on a bench. Contains cards; owner must identify details.", th: "พบกระเป๋าสตางค์สีน้ำเงินบนม้านั่ง มีบัตรอยู่ด้านใน เจ้าของต้องยืนยันรายละเอียด" },
        color: { en: "Blue", th: "น้ำเงิน" },
        brand: "Coach",
        location: { en: "Central Hatyai, entrance B", th: "เซ็นทรัลหาดใหญ่ ทางเข้า B" },
        dateTime: daysAgo(2, 18),
        details: { en: "Kept safely at the information counter after posting.", th: "ฝากไว้ที่จุดประชาสัมพันธ์หลังจากโพสต์แล้ว" },
        photos: [svgImage("Wallet", "#e3eef8", "#316da8", "blue leather")],
        contactPrefs: "Message in app",
        createdAt: daysAgo(2, 19),
        updatedAt: daysAgo(2, 19)
      },
      {
        id: "l3",
        type: "lost",
        status: "active",
        posterId: "u3",
        name: { en: "Student ID card", th: "บัตรนักเรียน" },
        category: "documents",
        description: { en: "Student ID card with green lanyard, likely dropped near the library.", th: "บัตรนักเรียนพร้อมสายคล้องสีเขียว น่าจะหล่นแถวห้องสมุด" },
        color: { en: "Green and white", th: "เขียวและขาว" },
        brand: "School ID",
        location: { en: "Prince of Songkla University library", th: "ห้องสมุดมหาวิทยาลัยสงขลานครินทร์" },
        dateTime: daysAgo(3, 15),
        details: { en: "Name starts with P. Please do not post the ID number publicly.", th: "ชื่อขึ้นต้นด้วย พ. กรุณาอย่าโพสต์เลขบัตรต่อสาธารณะ" },
        photos: [svgImage("ID Card", "#f0f7f5", "#2e7d52", "green lanyard")],
        contactPrefs: "Internal message",
        createdAt: daysAgo(3, 16),
        updatedAt: daysAgo(3, 16)
      },
      {
        id: "l4",
        type: "found",
        status: "active",
        posterId: "u2",
        name: { en: "Black backpack", th: "กระเป๋าเป้สีดำ" },
        category: "bags",
        description: { en: "Black backpack found near school gate. Has a math notebook inside.", th: "พบกระเป๋าเป้สีดำใกล้ประตูโรงเรียน มีสมุดคณิตศาสตร์อยู่ด้านใน" },
        color: { en: "Black", th: "ดำ" },
        brand: "Adidas",
        location: { en: "Near Hatyai school gate", th: "ใกล้ประตูโรงเรียนหาดใหญ่" },
        dateTime: daysAgo(0, 7),
        details: { en: "Owner can verify notebook name and one hidden item.", th: "เจ้าของสามารถยืนยันชื่อบนสมุดและของด้านในอีกหนึ่งชิ้น" },
        photos: [svgImage("Backpack", "#e9e1d6", "#182321", "near school")],
        contactPrefs: "Message in app",
        createdAt: daysAgo(0, 8),
        updatedAt: daysAgo(0, 8)
      },
      {
        id: "l5",
        type: "lost",
        status: "active",
        posterId: "u1",
        name: { en: "AirPods", th: "AirPods" },
        category: "electronics",
        description: { en: "White AirPods case with initials MC. Last seen in the university shuttle.", th: "เคส AirPods สีขาว มีตัวย่อ MC เห็นครั้งสุดท้ายบนรถรับส่งมหาวิทยาลัย" },
        color: { en: "White", th: "ขาว" },
        brand: "Apple",
        location: { en: "PSU shuttle stop", th: "ป้ายรถรับส่ง ม.อ." },
        dateTime: daysAgo(4, 10),
        details: { en: "Case has a tiny scratch near the hinge.", th: "เคสมีรอยเล็ก ๆ ใกล้บานพับ" },
        photos: [svgImage("AirPods", "#fff7ec", "#c97826", "white case")],
        contactPrefs: "Internal message",
        createdAt: daysAgo(4, 12),
        updatedAt: daysAgo(4, 12)
      },
      {
        id: "l6",
        type: "found",
        status: "active",
        posterId: "u3",
        name: { en: "Set of keys", th: "พวงกุญแจ" },
        category: "keys",
        description: { en: "Three keys with a small red keychain, found by the parking area.", th: "กุญแจสามดอกพร้อมพวงกุญแจสีแดง พบแถวลานจอดรถ" },
        color: { en: "Silver and red", th: "เงินและแดง" },
        brand: "",
        location: { en: "Kim Yong Market parking", th: "ลานจอดรถตลาดกิมหยง" },
        dateTime: daysAgo(5, 17),
        details: { en: "Owner should describe the keychain shape.", th: "เจ้าของควรบอกรูปทรงพวงกุญแจได้" },
        photos: [svgImage("Keys", "#fae5e8", "#b84c54", "red tag")],
        contactPrefs: "Message in app",
        createdAt: daysAgo(5, 18),
        updatedAt: daysAgo(5, 18)
      },
      {
        id: "l7",
        type: "found",
        status: "active",
        posterId: "u2",
        name: { en: "Water bottle", th: "ขวดน้ำ" },
        category: "bottle",
        description: { en: "Green insulated water bottle found after basketball practice.", th: "พบขวดน้ำเก็บความเย็นสีเขียวหลังซ้อมบาสเกตบอล" },
        color: { en: "Green", th: "เขียว" },
        brand: "Hydro Flask",
        location: { en: "Hatyai municipal gym", th: "สนามกีฬาเทศบาลนครหาดใหญ่" },
        dateTime: daysAgo(6, 20),
        details: { en: "Sticker on one side. Owner can describe it.", th: "มีสติกเกอร์ด้านหนึ่ง เจ้าของบอกลายได้" },
        photos: [svgImage("Bottle", "#e3f3e8", "#2e7d52", "green")],
        contactPrefs: "Internal message",
        createdAt: daysAgo(6, 21),
        updatedAt: daysAgo(6, 21)
      },
      {
        id: "l8",
        type: "lost",
        status: "recovered",
        posterId: "u1",
        name: { en: "School jacket", th: "เสื้อแจ็กเก็ตโรงเรียน" },
        category: "clothing",
        description: { en: "Black school jacket was returned after a match notification.", th: "เสื้อแจ็กเก็ตโรงเรียนสีดำได้รับคืนหลังมีการแจ้งเตือนรายการที่ตรงกัน" },
        color: { en: "Black", th: "ดำ" },
        brand: "School uniform",
        location: { en: "Hatyai school auditorium", th: "หอประชุมโรงเรียนหาดใหญ่" },
        dateTime: daysAgo(14, 16),
        details: { en: "Recovered and kept in history.", th: "คืนของแล้วและเก็บไว้ในประวัติ" },
        photos: [svgImage("Jacket", "#ece8df", "#182321", "recovered")],
        contactPrefs: "Closed",
        createdAt: daysAgo(15, 11),
        updatedAt: daysAgo(12, 10),
        recoveredAt: daysAgo(12, 10)
      }
    ];

    const conversations = [
      {
        id: "c1",
        itemId: "l4",
        participants: ["u1", "u2"],
        unreadBy: ["u1"],
        updatedAt: daysAgo(0, 9),
        messages: [
          { id: "m1", senderId: "u2", body: "Hi, I found a black backpack near the school gate. Does it have your math notebook?", createdAt: daysAgo(0, 8) },
          { id: "m2", senderId: "u1", body: "It might be mine. The notebook should have a blue cover and my name inside.", createdAt: daysAgo(0, 9) }
        ]
      }
    ];

    const notifications = [
      { id: "n1", userId: "u1", type: "match", itemId: "l1", title: { en: "Possible match found", th: "พบรายการที่อาจตรงกัน" }, body: { en: "A black backpack was found near Hatyai school.", th: "พบกระเป๋าเป้สีดำใกล้โรงเรียนหาดใหญ่" }, read: false, createdAt: daysAgo(0, 9) },
      { id: "n2", userId: "u1", type: "message", itemId: "l4", conversationId: "c1", title: { en: "New message", th: "ข้อความใหม่" }, body: { en: "Narin replied about a found backpack.", th: "นรินทร์ตอบกลับเกี่ยวกับกระเป๋าเป้ที่พบ" }, read: false, createdAt: daysAgo(0, 9) },
      { id: "n3", userId: "u1", type: "status", itemId: "l8", title: { en: "School jacket recovered", th: "คืนเสื้อแจ็กเก็ตแล้ว" }, body: { en: "Your listing is preserved in recovered history.", th: "รายการถูกเก็บไว้ในประวัติคืนของแล้ว" }, read: true, createdAt: daysAgo(12, 10) }
    ];

    return { version: 1, users, listings, conversations, notifications, reports: [] };
  }

  function loadDb() {
    try {
      const saved = JSON.parse(localStorage.getItem(DB_KEY) || "null");
      if (saved && saved.version === 1 && Array.isArray(saved.listings)) return saved;
    } catch (_) {
      /* fall through to seed data */
    }
    const seeded = defaultDb();
    localStorage.setItem(DB_KEY, JSON.stringify(seeded));
    return seeded;
  }

  function saveDb() {
    localStorage.setItem(DB_KEY, JSON.stringify(state.db));
  }

  function currentUser() {
    return state.db.users.find((user) => user.id === state.currentUserId) || state.db.users[0];
  }

  function userName(user) {
    return state.lang === "th" && user.nameTh ? user.nameTh : user.name;
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
    return [
      ["home", t("navHome"), "home"],
      ["search", t("navSearch"), "search"],
      ["dashboard", t("navDashboard"), "dash"],
      ["messages", t("navMessages"), "messages"],
      ["notifications", t("navNotifications"), "bell"],
      ["profile", t("navProfile"), "user"]
    ];
  }

  function unreadMessages() {
    return state.db.conversations.filter((conversation) => conversation.participants.includes(state.currentUserId) && conversation.unreadBy.includes(state.currentUserId)).length;
  }

  function unreadNotifications() {
    return state.db.notifications.filter((notification) => notification.userId === state.currentUserId && !notification.read).length;
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
              <button class="user-switch" data-action="switch-user" type="button" title="${html(t("authHint"))}">
                <span>${html(userName(user))}</span>
              </button>
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
                ${showcase.map((listing) => miniFloatingCard(listing)).join("")}
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
          <div class="grid cards">${recentLost.map(itemCard).join("")}</div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <div><h2>${html(t("recentlyFound"))}</h2><p>${html(t("tagline"))}</p></div>
            <a class="ghost-button" href="#search?type=found">${html(t("navSearch"))}</a>
          </div>
          <div class="grid cards">${recentFound.map(itemCard).join("")}</div>
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
    const poster = state.db.users.find((user) => user.id === listing.posterId);
    const isOwner = listing.posterId === state.currentUserId;
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
    const conversations = state.db.conversations
      .filter((conversation) => conversation.participants.includes(state.currentUserId))
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
    const listing = state.db.listings.find((item) => item.id === conversation.itemId);
    const otherId = conversation.participants.find((idValue) => idValue !== state.currentUserId);
    const other = state.db.users.find((user) => user.id === otherId);
    const last = conversation.messages[conversation.messages.length - 1];
    const unread = conversation.unreadBy.includes(state.currentUserId);
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
    const listing = state.db.listings.find((item) => item.id === conversation.itemId);
    const otherId = conversation.participants.find((idValue) => idValue !== state.currentUserId);
    const other = state.db.users.find((user) => user.id === otherId);
    return `
      <div class="chat-header">
        <div class="poster">
          <img class="avatar" src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
          <div><strong>${html(text(listing.name))}</strong><div class="meta">${html(userName(other))} · ${html(text(listing.location))}</div></div>
        </div>
      </div>
      <div class="messages" id="message-list">
        ${conversation.messages.map((message) => `<div class="bubble ${message.senderId === state.currentUserId ? "mine" : ""}">${html(message.body)}<div class="bubble-time">${html(formatDate(message.createdAt, true))}</div></div>`).join("")}
      </div>
      <form class="chat-input" id="chat-form">
        <input id="chat-message" placeholder="${html(t("typeMessage"))}" autocomplete="off" />
        <button class="primary-button" type="submit">${icon("send")}${html(t("send"))}</button>
      </form>`;
  }

  function renderNotifications() {
    const notes = state.db.notifications.filter((note) => note.userId === state.currentUserId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
    const mine = state.db.listings.filter((listing) => listing.posterId === state.currentUserId);
    const active = mine.filter((listing) => listing.status !== "recovered");
    const recovered = mine.filter((listing) => listing.status === "recovered");
    return `
      <section class="section">
        <div class="container">
          <div class="profile-head">
            <span class="avatar"><img src="${user.avatar}" alt="${html(userName(user))}" /></span>
            <div><h1>${html(userName(user))}</h1><p class="meta">${html(t("signedInAs"))} ${html(userName(user))} · ${html(t("memberSince"))}: ${html(formatDate(user.memberSince))}</p></div>
            <button class="ghost-button" data-action="switch-user" type="button">${html(t("authHint"))}</button>
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
    return `
      <div class="listing-row">
        <img src="${listingImage(listing)}" alt="${html(text(listing.name))}" />
        <div><strong>${html(text(listing.name))}</strong><div class="meta">${html(text(listing.location))} · ${html(formatDate(listing.createdAt))}</div><span class="status-badge ${statusClass(listing)}">${html(statusLabel(listing))}</span></div>
        <div class="button-row">
          <a class="secondary-button" href="#item/${listing.id}">${html(t("viewDetails"))}</a>
          ${listing.posterId === state.currentUserId ? `<button class="ghost-button" data-action="open-edit-modal" data-id="${listing.id}" type="button">${html(t("edit"))}</button>` : ""}
          ${listing.posterId === state.currentUserId && listing.status !== "recovered" ? `<button class="ghost-button" data-action="recover-listing" data-id="${listing.id}" type="button">${html(t("markRecovered"))}</button>` : ""}
        </div>
      </div>`;
  }

  function renderDashboard() {
    const mine = state.db.listings.filter((listing) => listing.posterId === state.currentUserId);
    const activeLost = mine.filter((listing) => listing.type === "lost" && listing.status !== "recovered");
    const activeFound = mine.filter((listing) => listing.type === "found" && listing.status !== "recovered");
    const possible = mine.flatMap((listing) => findMatches(listing).map((match) => ({ source: listing, ...match }))).slice(0, 5);
    const notes = state.db.notifications.filter((note) => note.userId === state.currentUserId).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);
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

  function renderApp() {
    document.documentElement.lang = state.lang;
    const route = getRoute();
    const [page, arg] = route.path.split("/");
    let content = "";
    if (page === "home") content = renderHome();
    else if (page === "search") content = renderSearch();
    else if (page === "report") content = renderReport(arg === "found" ? "found" : "lost");
    else if (page === "item") content = renderItem(arg);
    else if (page === "messages") content = renderMessages();
    else if (page === "notifications") content = renderNotifications();
    else if (page === "profile") content = renderProfile();
    else if (page === "dashboard") content = renderDashboard();
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

  function publishListing() {
    if (!validateDraft(1)) {
      state.reportDraft.step = 1;
      renderApp();
      return;
    }
    const draft = state.reportDraft;
    const listing = {
      id: id("l"),
      type: draft.type,
      status: "active",
      posterId: state.currentUserId,
      name: draft.itemName,
      category: draft.category,
      description: draft.description,
      color: draft.color,
      brand: draft.brand,
      location: draft.location,
      dateTime: new Date(draft.dateTime).toISOString(),
      details: draft.details,
      photos: draft.photos.length ? draft.photos : [svgImage(draft.itemName || t("photo"), "#f0f7f5", "#087f7b", t(draft.category))],
      contactPrefs: draft.contactPrefs,
      createdAt: nowIso(),
      updatedAt: nowIso()
    };
    state.db.listings.unshift(listing);
    const matches = findMatches(listing);
    if (matches.length) {
      addNotification(state.currentUserId, "match", listing.id, tObj("Possible matches found", "พบรายการที่อาจตรงกัน"), tObj(`${matches.length} listing may match your report.`, `มี ${matches.length} รายการที่อาจตรงกับรายการของคุณ`));
      matches.forEach((match) => {
        if (match.item.posterId !== state.currentUserId) {
          addNotification(match.item.posterId, "match", match.item.id, tObj("Someone posted a possible match", "มีคนโพสต์รายการที่อาจตรงกัน"), tObj(`${text(listing.name)} may match your listing.`, `${text(listing.name)} อาจตรงกับรายการของคุณ`));
        }
      });
    }
    saveDb();
    state.reportDraft = null;
    toast(t("published"));
    go(`item/${listing.id}`);
  }

  function tObj(en, th) {
    return { en, th };
  }

  function addNotification(userId, type, itemId, title, body, conversationId) {
    state.db.notifications.unshift({ id: id("n"), userId, type, itemId, conversationId, title, body, read: false, createdAt: nowIso() });
  }

  function getOrCreateConversation(listing) {
    const existing = state.db.conversations.find((conversation) => conversation.itemId === listing.id && conversation.participants.includes(state.currentUserId) && conversation.participants.includes(listing.posterId));
    if (existing) return existing;
    const conversation = {
      id: id("c"),
      itemId: listing.id,
      participants: [state.currentUserId, listing.posterId],
      unreadBy: [],
      updatedAt: nowIso(),
      messages: [
        { id: id("m"), senderId: state.currentUserId, body: state.lang === "th" ? "สวัสดีครับ/ค่ะ ฉันติดต่อเรื่องรายการนี้ อยากตรวจสอบรายละเอียดเพิ่มเติม" : "Hi, I am contacting you about this listing and would like to verify a few details.", createdAt: nowIso() }
      ]
    };
    state.db.conversations.unshift(conversation);
    addNotification(listing.posterId, "message", listing.id, tObj("New message", "ข้อความใหม่"), tObj(`${userName(currentUser())} messaged you about ${text(listing.name)}.`, `${userName(currentUser())} ส่งข้อความเกี่ยวกับ ${text(listing.name)}`), conversation.id);
    saveDb();
    return conversation;
  }

  function markRecovered(listingId) {
    const listing = state.db.listings.find((item) => item.id === listingId);
    if (!listing) return;
    if (listing.posterId !== state.currentUserId) {
      toast(t("ownerOnly"));
      return;
    }
    if (!confirm(t("confirmRecover"))) return;
    listing.status = "recovered";
    listing.recoveredAt = nowIso();
    listing.updatedAt = nowIso();
    addNotification(state.currentUserId, "status", listing.id, tObj("Listing recovered", "คืนของสำเร็จ"), tObj(`${text(listing.name)} was moved to recovered history.`, `${text(listing.name)} ถูกย้ายไปยังประวัติคืนของแล้ว`));
    saveDb();
    toast(t("recoveredToast"));
    renderApp();
  }

  function deleteListing(listingId) {
    const listing = state.db.listings.find((item) => item.id === listingId);
    if (!listing) return;
    if (listing.posterId !== state.currentUserId) {
      toast(t("ownerOnly"));
      return;
    }
    if (!confirm(t("confirmDelete"))) return;
    state.db.listings = state.db.listings.filter((item) => item.id !== listingId);
    state.db.conversations = state.db.conversations.filter((conversation) => conversation.itemId !== listingId);
    saveDb();
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

  function readFiles(files) {
    const draft = state.reportDraft;
    const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
    if (!imageFiles.length) return;
    draft.uploadProgress = 5;
    renderApp();
    let done = 0;
    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        draft.photos.push(reader.result);
        done += 1;
        draft.uploadProgress = Math.round((done / imageFiles.length) * 100);
        renderApp();
      };
      reader.readAsDataURL(file);
    });
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
      if (field) field.addEventListener(fieldId === "filter-location" ? "change" : "change", updateSearchFromFilters);
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
      chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.getElementById("chat-message");
        const body = input.value.trim();
        if (!body) return;
        const conversation = state.db.conversations.find((entry) => entry.id === state.selectedConversationId);
        if (!conversation) return;
        conversation.messages.push({ id: id("m"), senderId: state.currentUserId, body, createdAt: nowIso() });
        conversation.updatedAt = nowIso();
        conversation.unreadBy = conversation.participants.filter((participantId) => participantId !== state.currentUserId);
        const listing = state.db.listings.find((item) => item.id === conversation.itemId);
        conversation.unreadBy.forEach((userId) => addNotification(userId, "message", conversation.itemId, tObj("New message", "ข้อความใหม่"), tObj(`${userName(currentUser())} sent a message about ${text(listing.name)}.`, `${userName(currentUser())} ส่งข้อความเกี่ยวกับ ${text(listing.name)}`), conversation.id));
        saveDb();
        toast(t("messageSent"));
        renderApp();
      });
    }

    const reportModal = document.getElementById("report-modal");
    if (reportModal) {
      reportModal.addEventListener("submit", (event) => {
        event.preventDefault();
        state.db.reports.push({ id: id("r"), itemId: state.modal.itemId, reporterId: state.currentUserId, reason: document.getElementById("report-reason").value.trim(), createdAt: nowIso() });
        state.modal = null;
        saveDb();
        toast(t("reportSent"));
        renderApp();
      });
    }

    const editModal = document.getElementById("edit-modal");
    if (editModal) {
      editModal.addEventListener("submit", (event) => {
        event.preventDefault();
        const listing = state.db.listings.find((item) => item.id === state.modal.itemId);
        if (!listing) return;
        if (listing.posterId !== state.currentUserId) {
          toast(t("ownerOnly"));
          return;
        }
        listing.name = document.getElementById("edit-name").value.trim();
        listing.category = document.getElementById("edit-category").value;
        listing.color = document.getElementById("edit-color").value.trim();
        listing.brand = document.getElementById("edit-brand").value.trim();
        listing.location = document.getElementById("edit-location").value.trim();
        listing.description = document.getElementById("edit-description").value.trim();
        listing.details = document.getElementById("edit-details").value.trim();
        listing.updatedAt = nowIso();
        state.modal = null;
        saveDb();
        toast(t("save"));
        renderApp();
      });
    }
  }

  function handleAction(event) {
    const actionNode = event.currentTarget;
    const action = actionNode.dataset.action;
    if (action === "toggle-lang") {
      state.lang = state.lang === "en" ? "th" : "en";
      localStorage.setItem(LANG_KEY, state.lang);
      renderApp();
    } else if (action === "toggle-menu") {
      state.mobileOpen = !state.mobileOpen;
      renderApp();
    } else if (action === "switch-user") {
      const index = state.db.users.findIndex((user) => user.id === state.currentUserId);
      state.currentUserId = state.db.users[(index + 1) % state.db.users.length].id;
      localStorage.setItem(CURRENT_USER_KEY, state.currentUserId);
      state.selectedConversationId = null;
      toast(`${t("signedInAs")} ${userName(currentUser())}`);
      renderApp();
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
      publishListing();
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
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing || listing.posterId === state.currentUserId) return;
      const conversation = getOrCreateConversation(listing);
      state.selectedConversationId = conversation.id;
      toast(t("messageSent"));
      go("messages");
    } else if (action === "think-mine") {
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing) return;
      addNotification(listing.posterId, "interaction", listing.id, tObj("Someone may own your found item", "มีคนอาจเป็นเจ้าของรายการที่คุณพบ"), tObj(`${userName(currentUser())} thinks ${text(listing.name)} may be theirs.`, `${userName(currentUser())} คิดว่า ${text(listing.name)} อาจเป็นของเขา/เธอ`));
      saveDb();
      toast(t("interactionSent"));
    } else if (action === "open-report-modal") {
      event.preventDefault();
      state.modal = { type: "report", itemId: actionNode.dataset.id };
      renderApp();
    } else if (action === "open-edit-modal") {
      event.preventDefault();
      const listing = state.db.listings.find((item) => item.id === actionNode.dataset.id);
      if (!listing || listing.posterId !== state.currentUserId) {
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
      markRecovered(actionNode.dataset.id);
    } else if (action === "delete-listing") {
      deleteListing(actionNode.dataset.id);
    } else if (action === "select-conversation") {
      state.selectedConversationId = actionNode.dataset.id;
      const conversation = state.db.conversations.find((entry) => entry.id === state.selectedConversationId);
      if (conversation) {
        conversation.unreadBy = conversation.unreadBy.filter((userId) => userId !== state.currentUserId);
        saveDb();
      }
      renderApp();
    } else if (action === "mark-all-read") {
      state.db.notifications.forEach((note) => {
        if (note.userId === state.currentUserId) note.read = true;
      });
      saveDb();
      renderApp();
    } else if (action === "read-note") {
      const note = state.db.notifications.find((entry) => entry.id === actionNode.dataset.id);
      if (note) {
        note.read = true;
        saveDb();
      }
    }
  }

  window.addEventListener("hashchange", () => {
    state.mobileOpen = false;
    state.selectedImageIndex = 0;
    renderApp();
  });

  state.db = loadDb();
  if (!state.db.users.some((user) => user.id === state.currentUserId)) state.currentUserId = state.db.users[0].id;
  renderApp();
})();
