function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    minarettitle: "Minaret Kalyan",

    overviewtitle: "Short Historical Overview",
    overviewtext: "Built in 1127, Kalyan Minaret (Big Lighthouse) reflects the greatness of 12th century Oriental architecture. In times of peace, it was used to call for five-time prayers, with the voice stretching throughout the whole city. In times of war, it served as a tower to spot approaching enemies, so its role was immense both in peaceful times and during wars.",

    structuralinsightstitle: "Structural Insights",
    structuralinsightstext: "The cylindrical tower stretches 47 feet up and 10 meters down at its foundation. Tower is made of fired bricks with different ornamental strip patterns — 14, to be more specific. Foundation was left to rest for two years before beginning the construction of the building. Known for its earthquake resistance, Minaret endured not only shakes but also bombardments from bolsheviks.",

    funfacttitle: "Fun Fact",
    funfacttext: "Legend says camel milk, bull’s blood, and eggs were mixed into the bricks to strengthen the mortar at the foundation. Another myth claims that when Genghis Khan approached Bukhara and saw the Kalyan Minaret, his helmet fell off. To pick it up, he had to bow. He considered it as a sign to not destroy the edifice.",
        navHome: "Home",
        navMissions: "Missions",
        navArchitecture: "Architecture",
        navContact: "Contact",
        footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },

  uz: {
    minarettitle: "Minorai Kalon",

    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "1127-yilda qurilgan Minorai Kalon (Katta mayoq) 12-asr Sharq meʼmorchiligining buyukligini aks ettiradi. Tinchlik davrida besh vaqt azon aytish uchun ishlatilgan, muazzinning ovozini butun shahar eshitgan. Urush paytida u yaqinlashib kelayotgan dushmanlarni aniqlash uchun minora bo'lib xizmat qilgan, shuning uchun ham tinch vaqtlarda ham, urushlar paytida ham uning roli juda katta edi.",

    structuralinsightstitle: "Tuzilish Tafsilotlari",
    structuralinsightstext: "Silindrsimon minora poydevorida 47 fut yuqoriga va 10 metr pastga cho'zilgan. Turli xil bezakli tasma naqshlari bilan pishgan g'ishtdan qurilgan - 14 xil, aniqroq aytganda. Bino qurilishi boshlanishidan oldin poydevor ikki yil dam olishga qoldirildi. Zilzilalarga chidamliligi bilan tanilgan minora nafaqat silkinishlarga, balki bolsheviklarning bombardimonlariga ham chidadi. Uning dizayniga kelsak, g'ishtlar 12-asr sharqona dizaynini ifodalovchi xattotlik va o'ymakorlikning bir necha xil usullari bilan yaratilgan.",

    funfacttitle: "Afsonalar",
    funfacttext: "Afsonaga ko'ra, poydevordagi ohakni mustahkamlash uchun g'ishtlarga tuya suti, buqaning qoni va tuxum qo'shilgan.",
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