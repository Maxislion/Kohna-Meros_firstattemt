function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
    en: {
        kalyan_title: "Kalyan Mosque",
        kalyan_overview_title: "Short Historical Overview",
        kalyan_overview_text: "The main structure of Kalyan Mosque was laid in the 12th century but destroyed after some time following the Mongolian invasions. Main modifications and retrofits were induced in the 1500s under the rule of the Shaybanid dynasty, bringing it to the appearance that it bears now. The Mosque has been the main place for prayers for more than 500 years.",
        kalyan_structural_title: "Structural Insights",
        kalyan_structural_text: "As it is typical of buildings of that time, Kalyan Mosque is a structure built of adobe bricks. It is in a rectangular shape in layout, with its courtyard housing a huge maksura room on the western part. The perimeter of the courtyard is accompanied with pillar-doomed galleries, totalling 208 pillars and 288 domes.",
        kalyan_funfact_title: "Fun Fact",
        kalyan_funfact_text: "There is a local belief that if one whispers something under the dome of the mosque, his or her words will echo in a way that can be heard only by that very person.",
        navHome: "Home",
        navMissions: "Missions",
        navArchitecture: "Architecture",
        navContact: "Contact",
        footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
    },
    uz: {
        kalyan_title: "Kalon Masjidi",
        kalyan_overview_title: "Qisqa Tarixiy Ma’lumot",
        kalyan_overview_text: "Masjidi Kalonning asosiy inshooti 12-asrda qurilgan, ammo moʻgʻullar bosqinidan keyin vayron qilingan. 1500-yillarda Shayboniylar sulolasi davrida asosiy oʻzgartirish va taʼmirlash ishlari olib borilib, hozirgi koʻrinishiga keltirildi. Masjid 500 yildan ortiq vaqt davomida ibodat qilinadigan asosiy joy bo'lib kelgan.",
        kalyan_structural_title: "Tuzilish Tafsilotlari",
        kalyan_structural_text: "Masjidi Kalon pishiq gʻishtdan qurilgan bo‘lib, o‘sha davr me’morchiligining o‘ziga xos namunasi hisoblanadi. U to‘rtburchak shaklda boʻlib, hovlining g‘arbiy qismida katta maksura xonasi joylashgan. Hovli 208 ta ustun va 288 ta gumbazdan iborat galereyalar bilan o‘ralgan. Sharqiy kirish eshigi ko‘k sirli kafel va mozaikalar bilan bezatilgan bo‘lib, sharqona kayfiyat yaratadi.",
        kalyan_funfact_title: "Qiziqarli Fakt",
        kalyan_funfact_text: "Mahalliy aqida borki, agar kimdir masjid gumbazi ostida nimadir pichirlasa, uning so‘zlari faqat o‘sha odam eshitadigan darajada aks sado beradi.",
        navHome: "Bosh sahifa",
        navMissions: "Maqsadlarimiz",
        navArchitecture: "Arxitektura",
        navContact: "Aloqa",
        footerQuote: "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
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