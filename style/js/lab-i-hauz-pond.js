function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    title: "Lab-i Hauz Pond",
    overviewtitle: "Short Historical Overview",
    overviewtext: "An artificial water reservoir located in the centre of an ensemble, Lab-i Hauz was constructed in 1620 by the Grand Vizier (Prime Minister of that time) of Bukhara Nadir Divanbegi. Water in the pond was of crucial importance given the geographical location of the city, and, therefore, the pond was built with steps along its edges gradually going down to facilitate easier human access regardless of the water level.",
    structuraltitle: "Structural Insights",
    structuraltext: "The water in the reservoir was stemming from the main water canal Shah Rud (Royal Canal). Being in the form of an octagon, the reservoir is 5 metres deep at its centre. Its steps are made of limestone which was later covered with lime plaster to improve water resistance.",
    funfacttitle: "Fun Fact",
    funfacttext: "Legends say that the pond was constructed on the site of a Jewish widow’s house without her approval. A woman was desperate and cursed the pond, and there had been at least one case of drowning each year.",
    tourtitle: "Tour Tips",
    tourtext: "Best seen at sunset when the brickwork glows golden. Nearby: Mir-i-Arab Madrasa, Toki Zargaron dome bazaar.",
    navHome: "Home",
    navMissions: "Missions",
    navArchitecture: "Architecture",
    navContact: "Contact",
    footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    title: "Lab-i Hauz hovuzi",
    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "Lab-i Hovuz ansambl markazida joylashgan sun’iy suv ombori 1620-yilda Buxoro amiri (o‘sha davrning bosh vaziri) Nodir devonbegi tomonidan qurilgan. Hovuzdagi suv shaharning geografik joylashuvini hisobga olgan holda hal qiluvchi ahamiyatga ega edi va shuning uchun suv sathidan qat'i nazar, odamlarning kirishini osonlashtirish uchun hovuz chetlari bo'ylab asta-sekin pastga tushadigan zinapoyalar bilan qurilgan.",
    structuraltitle: "Tuzilish Tafsilotlari",
    structuraltext: "Labi Hovuz uzunligi 46 metr, kengligi 36 metr bo'lgan havzadir. Suv omboridagi suv Shohrud (Qirollik kanali) asosiy suv kanalidan olingan. Sakkizburchak shaklida bo'lgan suv ombori 5 metr chuqurlikda (markazida) joylashgan. Uning qadamlari ohaktoshdan yasalgan bo'lib, keyinchalik suvga chidamliligini oshirish uchun ohak gips bilan qoplangan. Ushbu qadamlar suv tashuvchilar tomonidan suvni shahar bo'ylab tarqatish uchun ishlatilgan, bu esa suvga chidamlilikni yanada muhimroq qildi.",
    funfacttitle: "Qiziqarli Fakt",
    funfacttext: "Afsonalarga ko'ra, hovuz yahudiy beva ayolning uyi o'rnida uning roziligisiz qurilgan. Bu ayol umidsiz edi va hovuzni la'natladi, shu sababdan har yili kamida bir marta cho'kish holati bo'lgan.",
    tourtitle: "Sayohat Maslahatlari",
    tourtext: "Eng yaxshi quyosh botganda, g'isht ishlari oltin rangda porlaganda ko'rinadi. Yaqin atrofda: Mir Arab madrasasi, Toki Zargaron gumbaz bozori.",
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