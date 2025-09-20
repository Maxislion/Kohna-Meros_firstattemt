function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
    uz: {
        missionsTitle: "Bizning Vazifalarimiz",
        preservationTitle: "Saqlash",
        preservationText: "Biz madaniy merosimizni asrab-avaylashga, uning go‘zalligini kelajak avlodlarga yetkazishga intilamiz.",
        digitizationTitle: "Raqamlashtirish",
        digitizationText: "Biz yodgorliklarni kompyuter olamiga olib chiqamiz, me’morchilikni uch o‘lchamda modellashtiramiz va tarixni raqamli tarzda hammaga ochiq qilamiz.",
        appreciationTitle: "Qadr-Qimmat",
        appreciationText: "Biz O‘zbekiston va Osiyo xalqlarining madaniy merosiga nisbatan dunyo bo‘ylab ong va chuqur qadriyat hissini uyg‘otishni maqsad qilamiz.",
        navHome: "Bosh sahifa",
        navMissions: "Maqsadlarimiz",
        navArchitecture: "Arxitektura",
        navContact: "Aloqa",
        footerQuote: "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
    },
    en: {
        missionsTitle: "Our Missions",
        preservationTitle: "Preservation",
        preservationText: "We strive to protect and safeguard our cultural heritage, ensuring translation of cultural beauty for future generations.",
        digitizationTitle: "Digitization",
        digitizationText: "We bring monuments to the computer world, modeling architecture in three-dimensions, and making history digitally accessible.",
        appreciationTitle: "Appreciation",
        appreciationText: "We intend to raise global awareness and deep cultural appreciation in people for the cultural heritage of Uzbek nation and Asia.",
        navHome: "Home",
        navMissions: "Missions",
        navArchitecture: "Architecture",
        navContact: "Contact",
        footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
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