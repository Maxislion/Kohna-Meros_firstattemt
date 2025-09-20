function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "alam-title": "A’lam Madrasa",
    "alam-overview-title": "Short Historical Overview",
    "alam-overview": "Constructed in 1825 by the Emir of Bukhara, Nasrullah Khan, the A’lam Madrasa was a center of Islamic scholarship. Named after a revered scholar, it attracted students from across Central Asia. Unlike older madrasas, it reflects late-period Bukharan architecture, with less grandeur but refined craftsmanship. It functioned as a religious school until the Soviet era, when it was repurposed for secular use. Post-independence, it was restored as a cultural site. Though smaller than the famed Kukeldash Madrasa, its historical role in education and theology makes it an important piece of Bukhara’s intellectual heritage.",
    "alam-structure-title": "Structural Insights",
    "alam-structure": "The madrasa follows a traditional courtyard layout, with student cells (hujras) lining the perimeter. Its façade features a modest portal with intricate tilework and carved wooden doors. The interior courtyard has a mosque and lecture halls, all adorned with geometric patterns in muted blues and greens. The brick construction includes decorative niches and arched alcoves. Unlike earlier madrasas, its ornamentation is simpler, reflecting 19th-century economic constraints. The structure’s compact design maximizes space efficiently, typical of late-era Bukharan religious schools. Restoration work has preserved its original charm while reinforcing its aging walls.",
    "alam-legends-title": "Legends",
    "alam-legends": "A legend claims that the madrasa’s founder, Emir Nasrullah, buried a cursed manuscript in its foundations. Anyone who disturbs it will face misfortune—a warning that kept Soviet archaeologists from excavating the site during their surveys of Bukhara.",
    "navHome": "Home",
    "navMissions": "Missions",
    "navArchitecture": "Architecture",
    "navContact": "Contact",
    "footerQuote": "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },
  uz: {
    "alam-title": "A’lam Madrasasi",
    "alam-overview-title": "Qisqa Tarixiy Ma’lumot",
    "alam-overview": "1825-yilda Buxoro amiri Nasrullaxon tomonidan qurilgan A’lam madrasasi islom ilmlari markazi edi. Muhtaram olim nomi bilan atalgan u butun Markaziy Osiyodan talabalarni o‘ziga tortdi. Qadimgi madrasalardan farqli o‘laroq, bu yerda so‘nggi davrdagi Buxoro me’morchiligi aks ettirilgan bo‘lib, ulug‘vorligi kam, ammo nafis hunarmandchilikka ega. U sovet davriga qadar diniy maktab sifatida faoliyat ko‘rsatib, undan keyin dunyoviy maqsadlarda foydalanish uchun mo‘ljallangan edi. Mustaqillikdan so‘ng u madaniy maskan sifatida qayta tiklandi. Mashhur Koʻkeldosh madrasasidan kichikroq boʻlsa-da, taʼlim va ilohiyotdagi tarixiy oʻrni uni Buxoroning maʼnaviy merosining muhim qismiga aylantiradi.",
    "alam-structure-title": "Tuzilish Tafsilotlari",
    "alam-structure": "Madrasa anʼanaviy hovli tartibiga amal qiladi, atrofi boʻylab talabalar hujralari (hujralar) joylashgan. Uning fasadida murakkab plitkalar va o'yilgan yog'och eshiklari bo'lgan kamtarona portal mavjud. Ichki hovlida masjid va ma'ruzalar zallari mavjud bo'lib, ularning barchasi o'chirilgan ko'k va yashil ranglardagi geometrik naqshlar bilan bezatilgan. G'isht konstruktsiyasi dekorativ nişlar va kemerli alkovlarni o'z ichiga oladi. Avvalgi madrasalardan farqli o‘laroq, uning bezaklari soddaroq bo‘lib, 19-asrdagi iqtisodiy cheklovlarni aks ettiradi. Tuzilmaning ixcham dizayni bo'sh joyni samarali tarzda kengaytiradi, bu oxirgi davrdagi Buxoro diniy maktablariga xosdir. Qayta tiklash ishlari eskirgan devorlarni mustahkamlash bilan birga o'zining asl jozibasini saqlab qoldi.",
    "alam-legends-title": "Rivoyatlar",
    "alam-legends": "Rivoyatda aytilishicha, madrasa asoschisi amir Nasrulloh uning poydevoriga la’nati qo‘lyozmani ko‘mgan. Buni buzgan har qanday odam baxtsizlikka duch keladi - bu ogohlantirish Sovet arxeologlarini Buxoroni o'rganish paytida bu joyni qazishdan to'xtatdi.",
    "navHome": "Bosh sahifa",
    "navMissions": "Maqsadlarimiz",
    "navArchitecture": "Arxitektura",
    "navContact": "Aloqa",
    "footerQuote": "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
  }
};


function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}

// подключаем селекты
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
          if (other && other !== sw) other.value = e.target.value; // синхронизация
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