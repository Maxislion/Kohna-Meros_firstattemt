function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

const translations = {
  en: {
    chor_title: "Chor Minor",
    chor_overview_title: "Short Historical Overview",
    chor_overview_text: "Built in 1807 by Khalif Niyazkul, a wealthy Turkmen merchant, Chor Minor (“Four Minarets”) is one of Bukhara’s most whimsical landmarks. Unlike traditional madrasas, it served as a gatehouse to a now-vanished complex. Its unique design blends Central Asian, Persian, and Indian influences, possibly inspired by Niyazkul’s travels. Though small, it became a symbol of Bukhara’s eclectic architectural spirit. The structure survived Soviet-era neglect and was restored in the 1990s. Today, it stands as a charming oddity, capturing the imagination of visitors with its fairytale-like appearance and mysterious origins.",
    chor_structural_title: "Structural Insights",
    chor_structural_text: "Chor Minor’s four turquoise-domed towers (only two are true minarets) rise from a square base, each decorated with unique tile patterns symbolizing different religions or philosophies. The central dome covers a small prayer room. The towers’ hollow interiors have narrow staircases, but only one leads to a viewpoint. The brickwork is adorned with geometric and floral motifs, while the colored tiles reflect 19th-century Bukharan craftsmanship. Despite its ornamental appearance, the structure is sturdy, with thick walls and balanced proportions. Its unconventional design makes it a fascinating departure from traditional Islamic architecture.",
    chor_funfact_title: "Fun Fact",
    chor_funfact_text: "The legend says that each minaret was dedicated to one of the merchant’s daughters. Thus, the decoration of each tower differs, representing four daughters’ personalities."
  },
  uz: {
    chor_title: "Chor Minor",
    chor_overview_title: "Qisqa Tarixiy Ma’lumot",
    chor_overview_text: "1807-yilda boy turkman savdogari Xalif Niyozqul tomonidan qurilgan Chor Minor (“To‘rt minora”) Buxoroning eng injiq diqqatga sazovor joylaridan biridir. An'anaviy madrasalardan farqli o'laroq, u yo'q bo'lib ketgan majmuaga darvoza bo'lib xizmat qilgan. Uning noyob dizaynida Markaziy Osiyo, Fors va Hind taʼsiri uygʻunlashgan, ehtimol Niyozqulning sayohatlaridan ilhomlangan. Kichkina bo'lsa-da, u Buxoroning eklektik me'moriy ruhining timsoliga aylandi. Ushbu tuzilma sovet davridagi e'tiborsizlikdan omon qoldi va 1990-yillarda qayta tiklandi. Bugungi kunda u o'zining ertakga o'xshash ko'rinishi va sirli kelib chiqishi bilan tashrif buyuruvchilarning hayolini o'ziga tortadigan maftunkor g'alati narsa bo'lib turibdi.",
    chor_structural_title: "Tuzilish Tafsilotlari",
    chor_structural_text: "Chor Minorning to'rtta firuza gumbazli minoralari (faqat ikkitasi haqiqiy minoralar) kvadrat asosdan ko'tarilib, har biri turli dinlar yoki falsafalarni ifodalovchi noyob koshin naqshlari bilan bezatilgan. Markaziy gumbaz kichik namozxonani qoplaydi. Minoralarning ichi bo'sh ichki qismida tor zinapoyalar mavjud, ammo faqat bittasi nuqtai nazarga olib keladi. G‘ishtdan yasalgan buyumlar geometrik va o‘simlik naqshlari bilan bezatilgan bo‘lsa, rangli koshinlar 19-asr Buxoro hunarmandchiligini aks ettiradi. O'zining bezakli ko'rinishiga qaramasdan, struktura mustahkam, qalin devorlar va muvozanatli nisbatlarga ega. Uning noan'anaviy dizayni uni an'anaviy islom arxitekturasidan hayratlanarli tarzda tark etadi.",
    chor_funfact_title: "Qiziqarli Fakt",
    chor_funfact_text: "Afsonaga ko'ra, har bir minora savdogarning qizlaridan biriga bag'ishlangan. Shunday qilib, har bir minoraning bezaklari har xil bo'lib, to'rt nafar qizning shaxsiyatini ifodalaydi."
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