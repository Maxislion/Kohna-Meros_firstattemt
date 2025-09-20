function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "who-title": "Who we are?",
    "who-text1":
      "We are team of three students from Uzbekistan. Inspired by the beauty of architecture, we designed this website to share sense of appreciation to culture.",
    "who-text2":
      "Our project Kohna Meros presents historical buildings of Bukhara in 3D. We intent to make a great impact on globalization and digitization of Uzbek culture."
  },
  uz: {
    "who-title": "Biz kimmiz?",
    "who-text1":
      "Biz Oʻzbekistondan uch nafar talabamiz. Meʼmorchilik goʻzalligidan ilhomlanib, ushbu saytni madaniyatga boʻlgan eʼtirofimizni ulashish uchun yaratdik.",
    "who-text2":
      "Kohna Meros loyihamiz Buxoro tarixiy binolarini 3D shaklida taqdim etadi. Biz Oʻzbek madaniyatining globallashuv va raqamlashtirish jarayoniga katta hissa qoʻshishni maqsad qilganmiz."
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