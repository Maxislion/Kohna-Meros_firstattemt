function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      title: "Abdullaziz-Khan Madrassa",
      overviewTitle: "Short Historical Overview",
      overviewText: "The Abdullaziz-Khan Madrasah was built in 1652 by Abdullaziz Khan, a ruler of the Ashtarkhanid (Janid) dynasty. It stands directly opposite the older Ulughbek Madrasah, creating a visual dialogue between two eras of Bukhara’s history. While Ulughbek’s was about learning and simplicity, Abdullaziz’s madrasah was about grandeur and artistic expression. He wanted to show the city’s strength, wealth, and devotion through architecture. Though he ruled only briefly, this madrasah became his legacy. With its detailed tilework, tall portal, and richly decorated interiors, it marked one of the last great masterpieces of Bukhara’s religious architecture before the city entered decline.",
      structureTitle: "Structural Insights",
      structureText: "The structure is grand and richly detailed. The entrance portal is massive, with bright mosaic tiles, floral patterns, and intricate calligraphy that rise toward the sky. Inside, the courtyard is wide, surrounded by student rooms, prayer halls, and lecture spaces. The ceiling of the mosque chamber is especially stunning, painted with gold and deep blue in complex patterns. The building uses the most refined tilework in Bukhara. Its design is more theatrical than earlier madrasahs—made to impress. Every part of the structure seems to say: “Look what we can build.”",
      funFactTitle: "Fun Fact",
      funFactText: "The decoration of the madrassah is not finished as the ruler was dethroned before the end of the construction work. The project was terminated by the architect with the rise of a new ruling.",

      // new
      navHome: "Home",
      navMissions: "Missions",
      navArchitecture: "Architecture",
      navContact: "Contact",
      footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
    },
    uz: {
      title: "Abdullazizxon Madrasasi",
      overviewTitle: "Qisqa Tarixiy Ma’lumot",
      overviewText: "Abdullazizxon madrasasi 1652 yilda Ashtarxoniylar (Joniylar) sulolasi hukmdori Abdullazizxon tomonidan qurilgan. U to‘g‘ridan-to‘g‘ri qadimgi Ulug‘bek madrasasining ro‘parasida joylashgan bo‘lib, Buxoro tarixining ikki davri o‘rtasida vizual dialogni yaratadi. Ulug‘bekniki ilm va soddalik haqida bo‘lsa, Abdullaziz madrasasi ulug‘vorlik va badiiy ifoda haqida edi. U me'morchilik orqali shaharning kuchini, boyligini va sadoqatini ko'rsatmoqchi edi. U qisqa vaqt hukmronlik qilgan bo‘lsa-da, bu madrasa unga meros bo‘lib qolgan. Batafsil koshinkorligi, baland portali va ajoyib bezatilgan interyeri bilan u Buxoroning diniy meʼmorchiligining shahar tanazzulga uchrashidan oldingi soʻnggi buyuk durdonalaridan biri boʻlgan.",
      structureTitle: "Tuzilish Tafsilotlari",
      structureText: "Tuzilishi katta va boy tafsilotlarga ega. Kirish portali massiv bo'lib, yorqin mozaik plitalar, gul naqshlari va osmonga ko'tarilgan murakkab xattotlik bilan bezatilgan. Ichkarida hovli keng, atrofi talabalar xonalari, namozxonlar, ma’ruza xonalari bilan o‘ralgan. Masjid xonasining shifti, ayniqsa, hayratlanarli, murakkab naqshlarda oltin va chuqur ko'k rangga bo'yalgan. Binoda Buxorodagi eng nafis koshinlardan foydalanilgan. Uning dizayni avvalgi madrasalardan ko'ra ko'proq teatrlashtirilgan - taassurot qoldirish uchun qilingan. Tuzilishning har bir qismi: “Qarang, biz nima qurishimiz mumkin”, deganga o‘xshaydi.",
      funFactTitle: "Qiziqarli Fakt",
      funFactText: "Hukmdor qurilish ishlari tugamasdan taxtdan tushirilgani uchun madrasani bezash tugallanmagan. Loyiha arxitektor tomonidan yangi qarorning ko‘tarilishi bilan tugatildi.",

      // new
      navHome: "Bosh sahifa",
      navMissions: "Maqsadlarimiz",
      navArchitecture: "Arxitektura",
      navContact: "Aloqa",
      footerQuote: "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
    }
  };

  const langDesktop = document.getElementById("languageSwitcherDesktop");
  const langMobile = document.getElementById("languageSwitcherMobile");

  const title = document.querySelector(".minaret-title");
  const overviewTitle = document.querySelectorAll(".minaret-subtitle")[0];
  const overviewText = document.querySelectorAll(".minaret-text")[0];
  const structureTitle = document.querySelectorAll(".minaret-subtitle")[1];
  const structureText = document.querySelectorAll(".minaret-text")[1];
  const funFactTitle = document.querySelectorAll(".minaret-subtitle")[2];
  const funFactText = document.querySelector(".minaret-text-last");

  // new selectors
  const navLinks = document.querySelectorAll(".header-nav .left_nav ul li a, .mobile-nav a");
  const footerQuote = document.querySelector(".footer-quote");

  function updateLanguage(lang) {
    const t = translations[lang];
    title.textContent = t.title;
    overviewTitle.textContent = t.overviewTitle;
    overviewText.textContent = t.overviewText;
    structureTitle.textContent = t.structureTitle;
    structureText.textContent = t.structureText;
    funFactTitle.textContent = t.funFactTitle;
    funFactText.textContent = t.funFactText;

    // nav
    navLinks[0].textContent = t.navHome;
    navLinks[1].textContent = t.navMissions;
    navLinks[2].textContent = t.navArchitecture;
    navLinks[3].textContent = t.navContact;

    // footer
    footerQuote.textContent = t.footerQuote;
  }

  function syncLanguage(lang) {
    langDesktop.value = lang;
    langMobile.value = lang;
    updateLanguage(lang);
  }

  langDesktop.addEventListener("change", function () {
    syncLanguage(this.value);
  });

  langMobile.addEventListener("change", function () {
    syncLanguage(this.value);
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

// Auto-slide every 3s
setInterval(() => {
  moveSlide(1);
}, 3000);
