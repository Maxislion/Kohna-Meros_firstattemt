function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}   

const translations = {
  en: {
    minarettitle: "Miri-Arab Madrassa",

    overviewtitle: "Short Historical Overview",
    overviewtext: "Miri-Arab (the property of Arabs) was built in the 16th century, with the date of its construction still being debated topic among archeologists. From the year of its foundation until the 1920 civil war invasion, the building was considered the largest educational and spiritual centre in Central Asia, serving as Islamic school. Sheikh Abdullah Yamani, the constructor of the building, wished to be buried in the madrassa.",

    structuralinsightstitle: "Structural Insights (Visual representations)",
    structuralinsightstext: "The madrassa is mainly made of baked bricks and some timber elements in the doors and ceiling. Masonry walls are 1.5 metre thick, providing solid lateral bearing capacity. When viewed from above, two big glazed sky-blue domes can be noticed from both sides of the entrance. Gaining popularity in times of Timurids, Oriental glazed mosaic was used to decorate both courtyard and iwan (grand rectangular entrance with an arch opening) facades.",

    legendstitle: "Legends",
    legendstext: "The final construction of the madrasa was founded by Ubaydulla khan for the money that he received after trading 3000 Iranian prisoners."
  },

  uz: {
    minarettitle: "Mir-Arab Madrasasi",

    overviewtitle: "Qisqa Tarixiy Ma’lumot",
    overviewtext: "Miri-Arab (arablarning mulki) 16-asrda qurilgan bo'lib, uning aniq qurilgan sanasi arxeologlar o'rtasida haligacha muhokama qilinmoqda. Bu bino tashkil etilgan yildan to 1920-yilgi bolsheviklar istilosigacha Oʻrta Osiyodagi eng yirik maʼrifiy va maʼnaviy markaz hisoblanib, islom maktabi vazifasini oʻtagan. Binoni quruvchi Shayx Abdulloh Yamaniy madrasaga dafn etilishini orzu qilgan.",

    structuralinsightstitle: "Tuzilish Tafsilotlari (Ko‘rgazmali tasvirlar)",
    structuralinsightstext: "Madrasa asosan pishiq gʻishtdan, eshik va shiftdagi ayrim yogʻoch elementlardan qurilgan. Tosh devorlari qalinligi 1,5 metr bo'lib, qattiq lateral yuk ko'tarish qobiliyatini ta'minlaydi. Yuqoridan qaralganda, kiraverishning ikki tomonidan ikkita katta sirlangan osmon-moviy gumbazlar ko'rinadi. Temuriylar davrida mashhurlikka erishgan sharqona sirlangan mozaika ham hovlini, ham ayvonni (arkli katta toʻrtburchak kirish joyi) bezashda foydalanilgan.",

    legendstitle: "Afsonalar",
    legendstext: "Madrasaning yakuniy qurilishiga Ubaydullaxon 3000 nafar eronlik asirni oldi-sotdi qilgandan keyin olgan puliga asos solgan."
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