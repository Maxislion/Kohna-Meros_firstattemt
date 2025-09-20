function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
    uz: {
        domullaTitle: "Domulla Hasan Madrasasi",
        overviewTitle: "Qisqa Tarixiy Ma’lumot",
        domullaOverview: "XVI asr oxirida qurilgan Domulla Hasan madrasasi taniqli islom huquqshunosi bilan bog‘langan. Shayboniylar sulolasi davrida ilohiyot va huquq maktabi boʻlib xizmat qilgan. Ulug' madrasalardan farqli o'laroq, u chuqur ilmiy munozaralarga sabab bo'lgan yaqin o'quv davralariga urg'u bergan. Vaqt o'tishi bilan u mahalliy sudyalar (qazislar) tayyorlash markaziga aylandi. Madrasa siyosiy oʻzgarishlar, jumladan, Buxoroning Rossiyaga qoʻshilishi bilan bardosh berdi, lekin 20-asr boshlarida tanazzulga yuz tutdi. Yaqinda amalga oshirilgan restavratsiyalar uning me'moriy go'zalligini tikladi, garchi u endi maktab vazifasini o'tamasa ham, Buxoroning ilmiy o'tmishidan sokin vasiyat bo'lib turibdi.",
        structureTitle: "Tuzilish Tafsilotlari",
        domullaStructure: "Madrasaning dizayni ixcham bo‘lib, kichik hovli atrofida bir qavatli tartib bilan qurilgan. Uning g'ishtli jabhasida geometrik g'isht naqshlariga e'tibor qaratilib, minimal plitka bilan qoplangan kirish joyi mavjud. Hujralar (hujayralar) tabiiy yorug'lik uchun kemerli eshiklar va kichik derazalar bilan jihozlangan. Hammasi bo'lib 23 ta talaba xonasi mavjud. Madrasaning oddiy miqyosi uning monumental muassasa emas, balki mahalla maktabi rolini aks ettiradi. Qayta tiklash ishlari asl g'isht ishlarini saqlab qoldi va yog'och ship nurlarini mustahkamladi. Uning bejirim nafisligi kech o'rta asrlardagi Buxoroning funksional, ammo go'zal me'morchiligini misol qilib keltiradi.",
        funfactTitle: "Qiziqarli Fakt",
        domullaFunFact: "Sovet davridan keyin madrasaning maqsadi oʻzgartirildi va 2010-yillarda madaniyat va sayyohlik obʼyekti sifatida qayta tiklandi, birinchi qavatdagi xonalari doʻkon sifatida foydalanildi."
    },
    en: {
        domullaTitle: "Domulla Hasan Madrasa",
        overviewTitle: "Short Historical Overview",
        domullaOverview: "Built in the late 16th century, the Domulla Hasan Madrasa is linked to a prominent Islamic jurist. It served as a school for theology and law during the Shaybanid dynasty’s rule. Unlike grander madrasas, it emphasized intimate study circles, fostering deep scholarly debates. Over time, it became a hub for local judges (qazis) training. The madrasa weathered political changes, including Bukhara’s annexation by Russia, but fell into decline in the early 20th century. Recent restorations have revived its architectural beauty, though it no longer functions as a school, standing instead as a quiet testament to Bukhara’s scholarly past.",
        structureTitle: "Structural Insights",
        domullaStructure: "The madrasa’s design is compact, with a single-story layout around a small courtyard. Its brick façade includes a recessed entrance with minimal tilework, focusing on geometric brick patterns. The hujras (cells) feature arched doorways and small windows for natural light. The prayer hall has a simple mihrab with stucco carvings. The madrasa’s modest scale reflects its role as a neighborhood school rather than a monumental institution. Restoration efforts have preserved its original brickwork and reinforced the wooden ceiling beams. Its understated elegance exemplifies the functional yet beautiful architecture of late medieval Bukhara.",
        funfactTitle: "Fun Fact",
        domullaFunFact: "After the Soviet era, the madrasa was repurposed, and in the 2010s was restored as a cultural and tourist facility, with ground-floor rooms used as shops."
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