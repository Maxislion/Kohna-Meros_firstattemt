function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    mosqueTitle: "Magok-i-Attari Mosque",
    overviewtitle: "Short Historical Overview",
    overviewtext: "One of Bukhara’s oldest surviving mosques, the Magok-i-Attari Mosque dates back to the 9th–10th centuries, built atop a former Zoroastrian temple. It served as a place of worship for fire-worshippers before Islam’s arrival. The mosque was repeatedly reconstructed, with its current form reflecting 12th-century Karakhanid and 16th-century Timurid renovations. Buried over time, it was excavated in the 1930s, revealing its ancient foundations. Historically, it stood in a bustling bazaar area, where spices and medicines (attar) were traded, giving it its name. Today, it houses a carpet museum, preserving both Islamic and pre-Islamic heritage.",
    structuraltitle: "Structural Insights",
    structuraltext: "The mosque showcases a blend of architectural styles, with a deeply recessed portal and intricate brickwork. Its southern façade features 12th-century carved terracotta patterns, while the northern side has 16th-century blue-tiled mosaics. The mosque’s sunken floor indicates its ancient origins, as centuries of urban buildup raised ground levels. The interior has a simple prayer hall with arched niches (mihrabs) and sturdy columns. The brick dome, though partially restored, demonstrates early Islamic engineering. The mosque’s asymmetrical layout reflects its multiple reconstructions, making it a unique archaeological palimpsest of Bukhara’s evolving architectural traditions.",
    funfacttitle: "Fun Fact",
    funfacttext: "Magok-i-Attari Mosque is one of a few places where both Bukharian Jews and Muslims prayed after the arrival of Islam."
  },
  uz: {
    mosqueTitle: "Mag‘ok-i-Attoriy Masjidi",
    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "Buxoroning saqlanib qolgan eng qadimiy masjidlaridan biri bo‘lgan Mag‘uk-i-Attoriy masjidi 9—10-asrlarga oid bo‘lib, sobiq zardushtiylar ibodatxonasi tepasida qurilgan. U Islom kelishidan oldin otashparastlar uchun sajdagoh bo'lib xizmat qilgan. Masjid bir necha bor rekonstruksiya qilingan bo‘lib, hozirgi ko‘rinishi 12-asr qoraxoniylar va 16-asrlarda temuriylar ta’mirlanishini aks ettiradi. Vaqt o'tishi bilan ko'milgan, 1930-yillarda qazilgan va uning qadimiy poydevori ochib berilgan. Tarixiy jihatdan u ziravorlar va dori-darmonlar (attor) sotiladigan gavjum bozor hududida joylashgan bo'lib, unga o'z nomini bergan. Bugungi kunda bu yerda islom va islomgacha bo‘lgan merosni saqlaydigan gilam muzeyi joylashgan.",
    structuraltitle: "Tuzilish Tafsilotlari",
    structuraltext: "Masjid arxitektura uslublarining uyg‘unligini, chuqur chuqurlashtirilgan portali va murakkab g‘isht ishlarini namoyish etadi. Uning janubiy jabhasida 12-asrga oid oʻyilgan terakota naqshlari, shimoliy tomonida esa 16-asrga oid koʻk koshinli mozaikalar mavjud. Masjidning cho'kib ketgan qavati uning qadimiy kelib chiqishini ko'rsatadi, chunki asrlar davomida shahar qurilishi zamin darajasini ko'targan. Ichkarida kamar tokchalari (mehroblari) va mustahkam ustunlari boʻlgan oddiy namozxona bor. G'ishtli gumbaz qisman tiklangan bo'lsa-da, dastlabki islom muhandisligini namoyish etadi. Masjidning assimetrik joylashuvi uning ko‘plab rekonstruksiyalarini aks ettirib, uni Buxoroning rivojlanayotgan me’morchilik an’analarining noyob arxeologik palimpsestiga aylantiradi.",
    funfacttitle: "Qiziqarli Fakt",
    funfacttext: "Magʻok-i-Attari masjidi islom kelgandan keyin ham buxoriyalik yahudiylar, ham musulmonlar namoz oʻqigan kam sonli joylardan biridir."
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