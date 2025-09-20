function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    minarettitle: "Nadir Divan Begi Madrasah",

    overviewtitle: "Short Historical Overview",
    overviewtext: "Commissioned in the 1920s by Nadir Divan-Begi, prime minister of Bukhara of that time, Nadir Divan-Begi madrasah was originally constructed as a caravanserai — an edifice for travelers and merchants to rest. Later, being worshiped for its marvelous appearance, the buildings were slightly altered to serve educational purposes. Today, the building is not just a madrasah that used to satisfy the needs of people of the past but a relic and a representation of ambitions of 17th century Bukhara.",

    structuralinsightstitle: "Structural Insights (Visual representations)",
    structuralinsightstext: "Though made of baked bricks as it is common for medieval oriental buildings in the region, the madrasah is more improvised than other edifices of that time. To be more specific, the courtyard seems to be wider and welcoming and student private cells welcoming compared to other madrasas — the result of a shift in purpose of the building. Another astonishing feature of the Nadir Divan-Begi madrasah is the entrance’s arch that is ornamented by an image of a line chasing a deer, quite an unusual art form for an Islamic edifice.",

    facttitle: "Fun Fact",
    facttext: "“This is a marvelous madrasah” claimed Quli Khan after seeing the grand entrance to the building. Scared of upsetting the ruler, Nadir Divan-Begi repurposed the building in one single night, adding prayers and slightly changing the layout.",
        navHome: "Home",
        navMissions: "Missions",
        navArchitecture: "Architecture",
        navContact: "Contact",
        footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
  },

  uz: {
    minarettitle: "Nodir Devonbegi Madrasasi",

    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "1920-yillarda Buxoroning oʻsha davrdagi bosh vaziri Nodir Divonbegi tomonidan foydalanishga topshirilgan Nodir Divonbegi madrasasi dastlab karvonsaroy — sayohatchilar va savdogarlar dam olishi uchun bino sifatida qurilgan. Keyinchalik, ajoyib ko'rinishi uchun sig'inishgan binolar ta'lim maqsadlarida xizmat qilish uchun biroz o'zgartirildi. Bugungi kunda bu bino nafaqat o'tmishdagi odamlarning ehtiyojlarini qondiradigan madrasa, balki 17-asr Buxoroning yodgorligi va orzu-umidlarining ifodasidir.",

    structuralinsightstitle: "Tuzilish Tafsilotlari (Ko‘rgazmali tasvirlar)",
    structuralinsightstext: "Mintaqadagi o'rta asr sharq binolari uchun odatiy hol bo'lgani uchun pishiq g'ishtdan qurilgan bo'lsa-da, madrasa o'sha davrdagi boshqa binolarga qaraganda ko'proq qo'lbola qilingan. Aniqroq aytadigan bo'lsak, hovli boshqa madrasalarga qaraganda kengroq va mehmondo'st, talabalar uchun esa mehmondo'st bo'lib ko'rinadi - bu binoning maqsadi o'zgarishi natijasidir. Qayta ishga tushirilganda, qurilishga yangi ehtiyojlarni qondirish uchun ikkinchi qavat, burchakli minoralar va talabalar kameralari qo'shildi. Nodir Divon-Begi madrasasining yana bir hayratlanarli jihati bu kiyik quvib kelayotgan chiziq tasviri bilan bezatilgan kirish arkidir, bu islomiy bino uchun noodatiy sanʼat turidir.",

    facttitle: "Qiziqarli Fakt",
    facttext: "“Bu ajoyib madrasa”, deb da'vo qildi Qulixon binoga kirish eshigini ko'rgach. Nodir devon-begi hukmdorni xafa qilishdan qo‘rqib, bir kechada binoning maqsadini o‘zgartirib, duolar qo‘shib, tartibini biroz o‘zgartirdi.",
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