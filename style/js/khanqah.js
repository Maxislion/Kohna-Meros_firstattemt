function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    khanqahTitle: "Khanqah",
    overviewTitle: "Short Historical Overview",
    overviewTextKhanqah: "Most of the time overlooked by tourists and locals, Khaqah is a 1920s building that served spiritual retreat and gathering purposes. The building was not built to impress, and therefore it remains in a shadow of other elements of the ensemble.",
    structuralTitle: "Structural Insights",
    structuralTextKhanqah: "The building was intentionally demurely constructed. The only fascinating feature of the construction is a large domed chamber and thick inward-leaning walls. The interior of the building is also modest, relying not on color but the geometry.",
    legendsTitle: "Legends",
    legendsTextKhanqah: "It is believed that everyone who enters Khanqah with a sincere heart and sits in silence will feel a warm sensation of the sacred place."
  },
  uz: {
    khanqahTitle: "Xonqah",
    overviewTitle: "Qisqa Tarixiy Ma’lumot",
    overviewTextKhanqah: "Ko'pincha sayyohlar va mahalliy aholi e'tiboridan chetda qoladigan Xonqah 1920-yillarda qurilgan bo'lib, u ma'naviy chekinish va yig'ilish maqsadlarida xizmat qilgan. Bino taassurot qoldirish uchun qurilmagan va shu sababli ansamblning boshqa elementlari soyasida qolmoqda.",
    structuralTitle: "Tuzilish Tafsilotlari",
    structuralTextKhanqah: "Bino qasddan kamtarona tarzda qurilgan. Qurilishning yagona qiziqarli jihati katta gumbazli xona va ichkariga og‘ilgan qalin devorlardir. Ichki qismi ham sodda bo‘lib, rang emas, balki geometriyaga tayanadi.",
    legendsTitle: "Afsonalar",
    legendsTextKhanqah: "Xonqaga chin yurakdan kirib, sukunatda o‘tirgan har bir kishi muqaddas dargohning iliq tuyg‘usini his qiladi, deb ishoniladi."
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