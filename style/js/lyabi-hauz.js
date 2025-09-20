function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    title: "Lyabi-Hauz",
    overviewtitle: "Short Historical Overview",
    overviewtext: "Lab-i Hauz is an ensemble that includes three buildings around a pool: Kukeldash madrassah, Khanqah, and madrassa of Nadir Divan-begi. The ensemble was built between the 16th and 17th centuries by Nadir Divan-begi, a patron of Islam and a noble man of that time.",
    structuraltitle: "Structural Insights",
    structuraltext: "Each edifice in the Lab-i Hauz ensemble is made of baked bricks, a usual practice of medieval Bukharian architecture. They follow the same pattern, with glazed ornamentation of entrance and arch opening. When it comes to the pond, it is 2.5 metres deep, with limestone coverage on the steps. It provides a symmetry, connecting all the buildings of the ensemble in a tranquil water reservoir.",
    navHome: "Home",
    navMissions: "Missions",
    navArchitecture: "Architecture",
    navContact: "Contact",
    footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    title: "Labi Hovuz",
    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "Lab-i Hauz ansambl boʻlib, hovuz atrofidagi uchta bino: Koʻkaldosh madrasasi, Xonqa va Nodir Devonbegi madrasasini oʻz ichiga oladi. Ansambl 16—17-asrlarda islom homiysi, oʻsha davrning oliyjanob insoni Nodir Devonbegi tomonidan qurilgan.",
    structuraltitle: "Tuzilish Tafsilotlari",
    structuraltext: "Labi Hovuz ansamblidagi har bir bino o‘rta asrlar Buxoro me’morchiligining odatiy amaliyoti bo‘lgan pishiq g‘ishtdan qurilgan. Ular xuddi shu naqsh bo'yicha, kirish va ark ochilishining sirlangan bezaklari bilan. Hovuz haqida gap ketganda, u 2,5 metr chuqurlikda, zinapoyalarda ohaktosh bilan qoplangan. Bu ansamblning barcha binolarini sokin suv havzasida birlashtirib, simmetriyani ta'minlaydi.",
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