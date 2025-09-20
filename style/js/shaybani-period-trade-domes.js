function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "shaybanidomes-title": "Shaybani-period Trade Domes",
    "shaybanidomes-overviewtitle": "Short Historical Overview",
    "shaybanidomes-overviewtext": "The Trade Domes of Bukhara were built during the early 16th century under the Shaybanid dynasty, after they made Bukhara their capital. These domes—Toqi Sarrafon, Toqi Telpak Furushon, Tim Abdulla, and Toqi Zargaron—were more than just marketplaces. Each was specialized: for moneychangers, cap sellers, carpet sellers, or jewelers. Built where caravan roads crossed, they turned Bukhara into a hub of international trade, connecting China, Persia, and the Middle East. The domes weren’t just for business—they were places to talk, rest, and share news.",
    "shaybanidomes-structuraltitle": "Structural Insights",
    "shaybanidomes-structuraltext": "Each trade dome is shaped like a crossroad, with arched entrances on all sides and a high central dome for light and air. Shops are built into the thick brick walls, keeping them cool in summer and warm in winter. The domes aren't flashy like madrasahs—they're practical, strong, and smartly designed. Small side domes and passageways branch out from the main hall, creating a calm, maze-like atmosphere where people could browse and bargain without the harsh sun. These structures used local bricks and clever ventilation, proving that good design doesn’t always need decoration—it just needs to work beautifully.",
    "shaybanidomes-facttitle": "Fun Fact",
    "shaybanidomes-facttext": "These domes were economic engines, cultural crossroads, and architectural marvels that shaped Bukhara’s identity.",
    "navHome": "Home",
    "navMissions": "Missions",
    "navArchitecture": "Architecture",
    "navContact": "Contact",
    "footerQuote": "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    "shaybanidomes-title": "Shayboniylar davri Savdo gumbazlari",
    "shaybanidomes-overviewtitle": "Qisqa Tarixiy Ma’lumot",
    "shaybanidomes-overviewtext": "Buxoroning Savdo gumbazlari 16-asr boshlarida Shayboniylar sulolasi davrida, Buxoroni poytaxtga aylantirgandan keyin qurilgan. Bu gumbazlar — Toʻqi Sarrafon, Toʻqi Telpak Furushon, Tim Abdulla va Toʻqi Zargaron — bozor maydonidan ham koʻproq edi. Ularning har biri ixtisoslashgan edi: pul almashtiruvchilar, qalpoq sotuvchilar, gilam sotuvchilar yoki zargarlar uchun. Karvon yoʻllari kesishgan joyda qurilgan ular Buxoroni Xitoy, Fors va Yaqin Sharqni bogʻlovchi xalqaro savdo markaziga aylantirgan. Gumbazlar faqat biznes uchun emas, balki suhbatlashish, dam olish va yangiliklar almashish uchun joy edi.",
    "shaybanidomes-structuraltitle": "Tuzilish Tafsilotlari",
    "shaybanidomes-structuraltext": "Har bir savdo gumbazi chorrahaga oʻxshab, har tomondan arkli kirish eshigi, yorugʻlik va havo uchun baland markaziy gumbazi bor. Do'konlar qalin g'isht devorlariga qurilgan bo'lib, ular izolyatsiyani ta'minlaydi, yozda salqin va qishda issiq bo'ladi. Gumbazlar madrasalardek ko‘z-ko‘z emas — ular amaliy, mustahkam va aqlli tarzda yaratilgan. Kichkina yon gumbazlar va o'tish yo'llari asosiy zaldan tarqalib, odamlar qattiq quyoshsiz sayohat qilishlari va savdolashishlari mumkin bo'lgan sokin, labirintga o'xshash muhit yaratadi. Ushbu tuzilmalar mahalliy g'ishtlardan va aqlli shamollatishdan foydalangan, bu yaxshi dizayn har doim bezakka muhtoj emasligini isbotladi - u faqat chiroyli ishlashi kerak.",
    "shaybanidomes-facttitle": "Fakt",
    "shaybanidomes-facttext": "Bu gumbazlar Buxoroning oʻziga xosligini shakllantirgan iqtisodiy vosita, madaniy chorraha va meʼmoriy moʻjizalar edi.",
    "navHome": "Home",
    "navMissions": "Missions",
    "navArchitecture": "Architecture",
    "navContact": "Contact",
    "footerQuote": "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  }
};


function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const switchers = [
    document.getElementById("languageSwitcherDesktop"),
    document.getElementById("languageSwitcherMobile")
  ];

  switchers.forEach(sw => {
    if (sw) {
      sw.addEventListener("change", e => {
        setLanguage(e.target.value);
        switchers.forEach(other => {
          if (other && other !== sw) other.value = e.target.value;
        });
      });
    }
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function moveSlide(step) {
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 5s
setInterval(() => {
  moveSlide(1);
}, 3000);