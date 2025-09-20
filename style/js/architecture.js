function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    bukhara: "Bukhara",
    monuments: "Monuments",
    abdullaziz: "Abdullaziz-Khan Madrassa",
    alam: "A’lam Madrasa",
    ark: "Ark Fortress",
    balyand: "Balyand Mosque",
    bolo: "Bolo-Hauz Mosque",
    chor: "Chor Minor",
    domulla: "Domulla Hasan Madrasa",
    govkushon: "Govkushon Madrasa & Mosque",
    kalyan: "Kalyan Mosque",
    khanqah: "Khanqah",
    kukeldash: "Kukeldash Madrasah",
    "labi-pond": "Lab-i Hauz Pond",
    lyabi: "Lyabi-Hauz",
    "magoki-attari": "Magok-i-Attari Mosque",
    "magoki-kurpa": "Magok-i-Kurpa Mosque",
    "minaret-kalyan": "Minaret Kalyan",
    "miri-arab": "Miri-Arab Madrassa",
    nadir: "Nadir Divan Begi Madrasah",
    shaybani: "Shaybani-period Trade Domes",
    ulughbek: "Ulughbek Madrassa"
  },
  uz: {
    bukhara: "Buxoro",
    monuments: "Yodgorliklar",
    abdullaziz: "Abdullazizxon madrasasi",
    alam: "A’lam madrasasi",
    ark: "Ark qal’asi",
    balyand: "Baland masjidi",
    bolo: "Bolo-Hovuz masjidi",
    chor: "Chor Minor",
    domulla: "Domulla Hasan madrasasi",
    govkushon: "Govkushon madrasasi va masjidi",
    kalyan: "Kalon masjidi",
    khanqah: "Xonqoh",
    kukeldash: "Ko‘kaldosh madrasasi",
    "labi-pond": "Lab-i Hovuz hovuzi",
    lyabi: "Lyabi-Hovuz",
    "magoki-attari": "Mag‘oki Attor masjidi",
    "magoki-kurpa": "Mag‘oki Kurpa masjidi",
    "minaret-kalyan": "Kalon minorasi",
    "miri-arab": "Mir Arab madrasasi",
    nadir: "Nodir Devonbegi madrasasi",
    shaybani: "Shayboniy davri savdo gumbazlari",
    ulughbek: "Ulug‘bek madrasasi"
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
