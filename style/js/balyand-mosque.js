function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    "balyand-title": "Balyand Mosque",
    "balyand-overview-title": "Short Historical Overview",
    "balyand-overview-text": "Dating back to the 16th century, the Balyand Mosque is a hidden treasure in Bukhara’s residential quarters. Its name (“High Mosque”) refers to its elevated foundation, possibly built over an older structure. Unlike grand congregational mosques, it served a local community, offering a serene space for prayer. The mosque reflects the Shaybanid era’s architectural style, blending functionality with aesthetic grace. It avoided major destruction during Bukhara’s turbulent history and remains well-preserved. Though not a tourist hotspot, its authenticity provides a glimpse into everyday spiritual life in historic Bukhara, away from the grand monuments.",

    "balyand-structure-title": "Structural Insights",
    "balyand-structure-text": "The mosque’s elevated platform enhances its presence and protects it from flooding. Its wooden aivan (veranda) with carved columns is a standout feature, offering shade and ventilation. The prayer hall has a mihrab decorated with floral motifs and Quranic inscriptions in delicate stucco. The ceiling showcases painted wood beams, a hallmark of Bukharan craftsmanship. The mosque’s compact size and lack of minaret emphasize its neighborhood function. The brickwork includes subtle geometric patterns, while the wooden elements display intricate joinery. Its design prioritizes harmony with the surrounding residential fabric."
  },

  uz: {
    "balyand-title": "Baland Masjidi",
    "balyand-overview-title": "Qisqa Tarixiy Ma’lumot",
    "balyand-overview-text": "16-asrga oid Balyand masjidi Buxoroning turar-joylaridagi yashirin xazina hisoblanadi. Uning nomi (\"Oliy masjid\") uning ko'tarilgan poydevoriga ishora qiladi, ehtimol eski bino ustiga qurilgan. Katta jamoat masjidlaridan farqli o'laroq, u mahalliy jamoatga xizmat qilib, ibodat qilish uchun sokin joy taklif qildi. Masjid Shayboniylar davrining arxitektura uslubini aks ettirib, funksionallikni estetik inoyat bilan uyg‘unlashtirgan. U Buxoroning notinch tarixida katta vayronagarchilikdan qochgan va yaxshi saqlanib qolgan. Garchi sayyohlik nuqtasi bo'lmasa-da, uning haqiqiyligi ulug'vor obidalardan uzoqda joylashgan tarixiy Buxorodagi kundalik ma'naviy hayotga bir ko'rinish beradi.",

    "balyand-structure-title": "Tuzilish Tafsilotlari",
    "balyand-structure-text": "Masjidning baland platformasi uning mavjudligini oshiradi va uni suv toshqinidan himoya qiladi. Uning o'yilgan ustunlari bo'lgan yog'och ayvoni (veranda) soya va shamollatish imkonini beradi. Namoz zalida gul naqshlari va nafis shlyapali Qur'on yozuvlari bilan bezatilgan mehrob mavjud. Shiftda Buxoro hunarmandchiligini o'ziga xos belgisi bo'lgan bo'yalgan yog'och to'sinlar namoyish etilgan. Masjidning ixcham o'lchami va minorasi yo'qligi uning mahalla funktsiyasini ta'kidlaydi. Balyand masjidining g‘isht ishlarida nozik geometrik naqshlar, yog‘och elementlarda esa murakkab duradgorlik aks ettirilgan. Uning dizayni atrofdagi turar-joy matolari bilan uyg'unlikni birinchi o'ringa qo'yadi."
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