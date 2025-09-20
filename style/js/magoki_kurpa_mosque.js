function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}


const translations = {
  en: {
    kurpatitle: "Magok-i-Kurpa Mosque",
    kurpaoverviewtitle: "Short Historical Overview",
    kurpaoverviewtext: "Built in the 17th century, the Magok-i-Kurpa Mosque is a lesser-known gem in Bukhara, named after the felt (kurpa) sellers who traded nearby. Unlike its older counterpart, Magok-i-Attari, this mosque served as a neighborhood prayer house rather than a grand monument. It reflects the late medieval period’s modest yet elegant architecture, catering to local merchants and artisans. Though small, it played a vital role in daily religious life, embodying Bukhara’s tradition of community-focused mosques tucked into the labyrinthine Old Town.",
    kstructuraltitle: "Structural Insights",
    kstructuraltext: "The mosque features a compact, rectangular layout with a simple yet harmonious design. Its brick façade includes a small portal with minimal decoration, typical of 17th-century Bukharan vernacular architecture. The interior has a single-domed prayer hall with a mihrab adorned with floral motifs. The use of baked brick and wooden beams ensures structural stability. Unlike grand madrasas, its modest scale highlights functional, everyday Islamic architecture. The mosque’s slightly sunken entrance suggests adaptation to Bukhara’s rising street levels over centuries, a common trait in the city’s historic buildings.",
    kfunfacttitle: "Fun Fact",
    kfunfacttext: "The name of the monument, in translation, means “The depression in the bazaar markets.”"
  },
  uz: {
    kurpatitle: "Magʻok-i-Kurpa Masjidi",
    kurpaoverviewtitle: "Qisqa Tarixiy Ma’lumot",
    kurpaoverviewtext: "17-asrda qurilgan Magʻok-i-Kurpa masjidi Buxoroda unchalik mashhur boʻlmagan marvarid boʻlib, u yaqin atrofda savdo qilgan kigiz (kurpa) sotuvchilari sharafiga nomlangan. Bu masjid oʻzining eski masjidi Magʻuk-i-Attoriydan farqli oʻlaroq, ulugʻ yodgorlik emas, balki mahalla ibodatxonasi vazifasini oʻtagan. Bu mahalliy savdogarlar va hunarmandlarga xizmat ko'rsatadigan kech o'rta asrlar davrining kamtarona, ammo nafis arxitekturasini aks ettiradi. Kichkina bo'lsa-da, u kundalik diniy hayotda muhim rol o'ynadi va Buxoroning labirintli Eski shaharga qamalgan jamoatga yo'naltirilgan masjidlar an'anasini o'zida mujassam etdi.",
    kstructuraltitle: "Tuzilish Tafsilotlari",
    kstructuraltext: "Masjid ixcham, to‘rtburchak shaklda, sodda, ammo uyg‘un dizaynga ega. Uning g‘ishtli fasadida 17-asr Buxoro xalq me’morchiligiga xos bo‘lgan minimal bezakli kichik portal mavjud. Ichkarida gul naqshlari bilan bezatilgan mehrobli bir gumbazli namozxon bor. Pishirilgan g'isht va yog'och nurlardan foydalanish strukturaning barqarorligini ta'minlaydi. Katta madrasalardan farqli o'laroq, uning oddiy ko'lami funktsional, kundalik islom me'morchiligini ta'kidlaydi. Masjidning bir oz cho‘kib ketgan kirish eshigi Buxoroning asrlar davomida ko‘tarilgan ko‘chalari darajasiga moslashishdan dalolat beradi, bu shaharning tarixiy binolarida umumiy xususiyatdir.",
    kfunfacttitle: "Qiziqarli Fakt",
    kfunfacttext: "Yodgorlik nomi tarjimada “bozor bozorlaridagi tushkunlik” degan ma'noni anglatadi."
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