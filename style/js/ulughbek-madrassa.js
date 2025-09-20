function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "ulugbek-title": "Ulughbek Madrassa",
    "ulugbek-overviewtitle": "Short Historical Overview",
    "ulugbek-overviewtext": "The Ulughbek Madrasah in Bukhara was built in 1417 by Ulughbek, the famous Timurid ruler, astronomer, and scholar. It is one of the oldest madrasahs in Central Asia and part of a trio he commissioned (others are in Samarkand and Gijduvan). Ulughbek aimed to create places where science and religion could exist together. Many believe this very building once echoed with lessons in math, astronomy, and philosophy. While most rulers built to show power, Ulughbek built to share knowledge. His Bukhara madrasah helped make the city not only a religious center, but a hub for learning and critical thinking.",
    "ulugbek-structuraltitle": "Structural Insights",
    "ulugbek-structuraltext": "The madrasah has a symmetrical layout with a large central courtyard, surrounded by student rooms (hujras), a lecture hall, and a mosque. The entrance is marked by a tall archway (iwan), covered with glazed tile mosaics featuring stars, geometric shapes, and Kufic script—a reflection of Ulughbek’s passion for astronomy and order. The structure is made mostly of baked brick, with thick walls that help control temperature inside. The design is clean and balanced, combining strength with elegance. Though simpler than later madrasahs, it carries a special sense of purpose—built not just to impress, but to inspire minds.",
    "ulugbek-facttitle": "Fun Fact",
    "ulugbek-facttext": "Over its long history, the madrasah was restored in 1586 during Abdullakhan II’s reign, again in the Soviet period, and later in the 20th century. Today, it houses the Museum of the History of Bukhara’s Restoration."
  },
  uz: {
    "ulugbek-title": "Ulug‘bek madrasasi",
    "ulugbek-overviewtitle": "Qisqa Tarixiy Ma’lumot",
    "ulugbek-overviewtext": "Buxorodagi Ulug‘bek madrasasi 1417 yilda mashhur temuriylar hukmdori, astronom va olim Ulug‘bek tomonidan qurilgan. Bu Oʻrta Osiyodagi eng qadimiy madrasalardan biri boʻlib, u buyurgan uchlik tarkibiga kiradi (boshqalari Samarqand va Gʻijduvonda). Ulug‘bek ilm va din birga mavjud bo‘ladigan joylarni yaratishni maqsad qilgan. Ko'pchilik bu binoning bir vaqtlar matematika, astronomiya va falsafa darslari bilan aks etganiga ishonishadi. Aksariyat hukmdorlar hokimiyatni ko‘rsatish uchun qurilgan bo‘lsa, Ulug‘bek bilim almashish uchun qurgan. Uning Buxoro madrasasi shaharni nafaqat diniy markaz, balki ilm va tanqidiy fikrlash markaziga aylantirishga yordam berdi.",
    "ulugbek-structuraltitle": "Tuzilish Tafsilotlari",
    "ulugbek-structuraltext": "Madrasa simmetrik rejaga ega boʻlib, katta markaziy hovlisi boʻlib, uning atrofida ikki qavatli talabalar xonalari, maʼruza zali va madrasaning ikki tomonida masjid joylashgan. Kirish eshigi yulduzlar, geometrik shakllar va kufiy yozuvi aks ettirilgan sirlangan koshinli mozaikalar bilan qoplangan baland archa (eyvon) bilan belgilangan. Tuzilishi asosan pishirilgan g'ishtdan yasalgan bo'lib, qalin devorlari ichidagi haroratni nazorat qilishga yordam beradi. Dizayn toza va muvozanatli bo'lib, kuchni nafislik bilan uyg‘unlashtiradi.",
    "ulugbek-facttitle": "Fakt",
    "ulugbek-facttext": "U o‘zining uzoq tarixi davomida 1586 yilda Abdullaxon II davrida va yana sovet davrida va keyinroq XX asr restavratsiyasida qayta tiklangan; hozirda Buxoro yodgorliklarini tiklash tarixi muzeyi joylashgan."
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