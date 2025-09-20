function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    bolo_title: "Bolo-Hauz Mosque",
    bolo_overview_title: "Short Historical Overview",
    bolo_overview_text: "The Bolo-Hauz Mosque was built in 1712 during the rule of Emir Abu’l-Fayz Khan. Located across from the Ark Fortress, it was originally intended as a public prayer place but soon became the Emir’s own Friday mosque. Bolo-Hauz, Children’s Pool in translation, refers to the pond in front of the mosque. Though not the oldest in Bukhara, it became an important symbol of the religious period, especially in the early 20th century.",
    bolo_structural_title: "Structural Insights",
    bolo_structural_text: "The most striking feature of Bolo-Hauz Mosque is its tall wooden columns supporting a richly painted roof. The ceiling above the entrance is decorated with bright geometric patterns, blending strength with artistry. The thickness of the walls of the mosque stabilizes temperature inside, while the iwan improves the airflow.",
    bolo_funfact_title: "Fun Fact",
    bolo_funfact_text: "Bukhara was facing a severe drought, and the Bolo-Hauz complex was built with the intention of providing a water source for the people, making it a place for people to perform ablutions before prayer. The reservoir, or \"Khauz,\" was meant to be a practical solution to the water shortage. The combination of the water and the mosque was seen as a way to bring blessings to the city.",
    navHome: "Home",
    navMissions: "Missions",
    navArchitecture: "Architecture",
    navContact: "Contact",
    footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    bolo_title: "Bolo-Hauz masjidi",
    bolo_overview_title: "Qisqa Tarixiy Ma’lumot",
    bolo_overview_text: "Bolo-Hauz masjidi 1712 yilda amir Abul-Fayzxon davrida qurilgan. Ark qal'asi ro'parasida joylashgan bo'lib, dastlab jamoat namozgohi sifatida mo'ljallangan edi, lekin tez orada amirning o'zining juma masjidiga aylandi. Bolo-Hauz, tarjimada bolalar hovuzi, masjid oldidagi hovuzga ishora qiladi. Buxorodagi eng qadimiy boʻlmasa-da, ayniqsa, 20-asr boshlarida diniy davrning muhim ramziga aylandi.",
    bolo_structural_title: "Tuzilish Tafsilotlari",
    bolo_structural_text: "Bolo-Hauz masjidining eng hayratlanarli jihati uning baland bo'yli 20 ta yog'och ustunlari bo'yalgan tomni qo'llab-quvvatlaydi. Uning poydevori masjidning yuk ko'tarish qobiliyatiga mos keladigan betondan qilingan. Kirish tepasidagi shift yorqin geometrik naqshlar bilan bezatilgan bo'lib, kuchni badiiylik bilan uyg'unlashtiradi. Masjid devorlarining qalinligi ichki haroratni barqarorlashtiradi, eyvon esa havo oqimini yaxshilaydi.",
    bolo_funfact_title: "Qiziqarli Fakt",
    bolo_funfact_text: "Buxoro qattiq qurg‘oqchilikka duchor bo‘lib, odamlarga suv manbai bo‘lsin, namozdan oldin tahorat oladigan maskan bo‘lsin, degan niyatda Bolo-hauz majmuasi qurilgan. Suv ombori yoki “Xauz” suv taqchilligining amaliy yechimi bo‘lishi kerak edi. Suv va masjidning uyg'unligi shaharga baraka olib kelish usuli sifatida ko'rilgan.",
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