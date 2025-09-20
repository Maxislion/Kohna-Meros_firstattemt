function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "ark-title": "Ark Fortress",
    "ark-overview-title": "Short Historical Overview",
    "ark-overview-text": "The Ark fortress is a massive building constructed in 5th century AD, remaining one of the oldest edifices in Central Asia. Originally constructed on a hill that previously served as a settlement, Ark served as a centre of power for centuries. It used to be a well-functioning city within a city: mosques, learning centres, palaces, government offices, and even prisons were constructed in the fortress. In spite of the demolition brought by Mongol conquests, the fortification was restored and functioning until the 1920 Russian invasion.",

    "ark-structure-title": "Structural Insights",
    "ark-structure-text": "Enclosing almost 4 hectares, the stronghold is confined by earthen walls stretching up to 20 metres high. They were covered by clay plaster to prevent erosion caused by precipitation. High position on the hills and well-structured walls which crowned battlements enabled defense of the fortress from invaders.",

    "ark-fact-title": "Fun Fact",
    "ark-fact-text": "Ark was built by Siyovush, a son of a Persian ruler who fell in love with king Afrasiyab’s daughter. Afrasiyab set a condition: to build a palace that would fit within a bull’s skin. Siyovush cut the skin into stripes and made a boundary using those stripes, thereby fitting a fortress within the skin of a bull.",
    "navHome": "Home",
    "navMissions": "Missions",
    "navArchitecture": "Architecture",
    "navContact": "Contact",
    "footerQuote": "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },

  uz: {
    "ark-title": "Ark Qal'asi",
    "ark-overview-title": "Qisqa Tarixiy Ma’lumot",
    "ark-overview-text": "Ark qal'asi milodiy V asrda qurilgan ulkan bino bo'lib, Markaziy Osiyodagi eng qadimiy binolardan biri bo'lib qolgan. Ilgari aholi punkti bo'lib xizmat qilgan tepalikda qurilgan ark asrlar davomida kuch markazi bo'lib xizmat qilgan. Bu shahar ichidagi yaxshi ishlaydigan shahar edi: qal'ada masjidlar, o'quv markazlar, saroylar, hukumat idoralari va hatto qamoqxonalar qurilgan. Mo'g'ul istilolari natijasida buzib tashlanganiga qaramay, istehkom qayta tiklandi va 1920 yilgi rus bosqiniga qadar faoliyat ko'rsatdi.",

    "ark-structure-title": "Tuzilish Tafsilotlari",
    "ark-structure-text": "Deyarli 4 gektar maydonni o'rab turgan qo'rg'on balandligi 20 metrgacha cho'zilgan sopol devorlar bilan o'ralgan. Yog'ingarchilik tufayli yuzaga keladigan yemirilishning oldini olish uchun devorlar loy gips bilan qoplangan. Adirlardagi baland mavqei va jangovar tojlarni o'rab turgan yaxshi qurilgan devorlari qal'ani bosqinchilardan himoya qilishga imkon berdi. Hozirda saytning g'arbiy yarmida restavratsiya ishlari olib borilmoqda, uning inshootlari qayta tiklanganidan so'ng jamoatchilikka ochilgan.",

    "ark-fact-title": "Qiziqarli Fakt",
    "ark-fact-text": "Arkni shoh Afrasiyobning qiziga oshiq bo‘lgan fors hukmdorining o‘g‘li Siyovush qurdirgan. Afrasiyab shart qo‘yadi: buqa terisiga sig‘adigan saroy qurish. Siyovush terini yo‘lakcha qilib kesib, o‘sha chiziqlar yordamida chegara yasagan, bu bilan ho‘kiz terisiga qal’a o‘rnatgan.",
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