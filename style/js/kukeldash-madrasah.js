function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    kukeldashTitle: "Kukeldash Madrasah",
    overviewTitle: "Short Historical Overview",
    overviewTextKukeldash: "Equally funded by Abdulakhan 2 and his brother, a poet and a person profoundly involved in art, the madrasah Kukeldash was constructed in the period of prevalence of Bukhara in Mawarannahr – in 1533, to be more precise. Since its very construction, the edifice has mainly been used for educational purposes. After the Soviet invasion, though, its function shifted to representing Bukhara's legacy, and it mainly served as a museum.",
    structuralTitle: "Structural Insights",
    structuralTextKukeldash: "Kukeldash is a two-story building that includes 130 hujras (private cells) which used to house more than 320 students. As it is typical for medieval Oriental madrasahs, Kukeldash is rectangular in layout and features a grand entrance with a welcoming arch vividly designed with glazed mosaic. In the corners, the edifice was reinforced by minaret-like towers, yielding to its solidity.",
    legendsTitle: "Fun Fact",
    legendsTextKukeldash: "Locals used to believe that a pistachio tree, taking its roots in one of the domes of madrasah, held mysterious features, protecting the madrasah.",
    navHome: "Home",
    navMissions: "Missions",
    navArchitecture: "Architecture",
    navContact: "Contact",
    footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    kukeldashTitle: "Ko‘kaldosh Madrasasi",
    overviewTitle: "Qisqa Tarixiy Ma’lumot",
    overviewTextKukeldash: "Abdullaxon II va uning ukasi, shoir va san’at bilan chuqur shug‘ullangan shaxs tomonidan bir xil mablag‘ evaziga Ko‘kaldosh madrasasi Buxoroning Movarounnahrda hukm surgan davrida, aniqrog‘i 1533 yilda qurilgan. Qurilish boshlanganidan beri bino asosan ta'lim maqsadlarida foydalanilgan. Sovet istilosidan keyin esa uning vazifasi Buxoro merosini aks ettirishga oʻtdi va u asosan muzey sifatida xizmat qildi.",
    structuralTitle: "Tuzilish Tafsilotlari",
    structuralTextKukeldash: "Koʻkaldosh ikki qavatli bino boʻlib, 130 ta hujrani (xususiy hujralarni) oʻz ichiga oladi. Bu binoda avvallari 320 dan ortiq talabalar istiqomat qilgan. Oʻrta asr Sharq madrasalariga xos boʻlgan Koʻkaldosh toʻrtburchak shaklida boʻlib, yaltiroq mozaika bilan jonli tarzda ishlangan mehmondoʻst arkli ulkan kirish eshigiga ega. Imorat burchaklarida minorasimon minoralar bilan mustahkamlanib, mustahkamligini ta’minlagan.",
    legendsTitle: "Qiziqarli Fakt",
    legendsTextKukeldash: "Mahalliy aholi madrasa gumbazlaridan birida ildiz otgan pista daraxti madrasani himoya qilib, sirli xususiyatga ega ekanligiga ishonishgan.",
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