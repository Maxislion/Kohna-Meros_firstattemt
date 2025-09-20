function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  uz: {
    gaukushonTitle: "Gaukushon (Masjid va Madrasa)",
    overviewTitle: "Qisqa Tarixiy Ma’lumot",
    gaukushonOverview: "Masjid va madrasani oʻz ichiga olgan “Gaukushon” ansambli 16-asrda Shayboniylar sulolasi hukmronligi davrida, Abdullaxon II davrida qurilgan. \"Gaukushon\" nomi \"buqa so'yish joyi\" degan ma'noni anglatadi, chunki bu hudud bir vaqtlar chorva bozori va so'yish joyi bo'lgan. Buxoro poytaxtga aylangach, xonlar shovqin-suronli bozorni ibodat va ilm maskani bilan almashtirishga qaror qildilar — tartibsizlik makonini osoyishtalikka aylantirdilar. Masjid juma namozi uchun xizmat qilgan, madrasa esa diniy ulamolar tayyorlagan va bu Buxoroning yirik islomiy bilim markazi sifatidagi rolini mustahkamlashga yordam bergan.",
    structureTitle: "Tuzilish Tafsilotlari",
    gaukushonStructure: "Gaukushon masjidi madrasasi joylashuvi jihatidan assimetrik bo‘lib, boshqa madrashlardan shu jihati bilan ajralib turadi. Masjid minorasi deyarli 20 metr balandlikda bo'lib, shahar bo'ylab namozxonlarni chaqirishga yordam beradi. Chap tomonda joylashgan ayvon Sovet davrida bir necha bor ta'mirlangan. Binolar 16-asrga xos bezak bilan pishgan g'ishtdan qurilgan. Murakkab plitkalar o'rniga simmetriya, muvozanat va ravshanlikka e'tibor qaratiladi. Namoz zali salqin va soyali, madrasaning hovlisida bir qavatli talabalar xonalari va dars xonalari mavjud. Birgalikda ular amaliy nafislikni aks ettiradi - kuchli, foydali va keraksiz chaqnashsiz ma'naviy, xuddi o'sha paytdagi shahar xarakteriga o'xshaydi.",
    funfactTitle: "Qiziqarli Fakt",
    gaukushonFunFact: "Sayyohlar ko'pincha ramziy o'zgarishlar haqida o'ylashadi: bir vaqtlar so'yish uchun foydalanilgan joy shaharning ma'naviy va ma'rifiy markaziga aylandi.",
    navHome: "Bosh sahifa",
    navMissions: "Maqsadlarimiz",
    navArchitecture: "Arxitektura",
    navContact: "Aloqa",
    footerQuote: "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
  },
  en: {
    gaukushonTitle: "Govkushon Madrasa & Mosque",
    overviewTitle: "Short Historical Overview",
    gaukushonOverview: "The Gaukushon Ensemble, which includes a mosque and madrasah, was built in the 16th century under the rule of the Sheibanid dynasty, during the reign of Abdullah Khan II. The name “Gaukushon” means “place of bull slaughter,” as the area was once a livestock market and slaughteryard. When Bukhara became the capital, the khans decided to replace the noisy bazaar with a place of worship and learning—transforming a space of chaos into one of calm. The mosque served for Friday prayers, while the madrasah trained religious scholars, helping solidify Bukhara’s role as a major Islamic learning center.",
    structureTitle: "Structural Insights",
    gaukushonStructure: "The Gaukushon Mosque and Madrasah are built in a harmonious, rectangular layout, with a spacious courtyard in between. The mosque’s minaret is one of the tallest in Bukhara after the Kalyan Minaret, helping call worshippers across the city. The buildings are made from baked brick, with decoration typical for the 16th century. Instead of elaborate tilework, the focus is on symmetry, balance, and clarity. The prayer hall is cool and shaded, while the madrasah features student rooms and lecture spaces. Together, they reflect practical elegance — strong, useful, and spiritual without unnecessary flash, much like the city’s character at the time.",
    funfactTitle: "Fun Fact",
    gaukushonFunFact: "Visitors often reflect on the symbolic transformation: a place once used for slaughter evolving into a spiritual and educational heart of the city.",
    navHome: "Home",
    navMissions: "Missions",
    navArchitecture: "Architecture",
    navContact: "Contact",
    footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
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