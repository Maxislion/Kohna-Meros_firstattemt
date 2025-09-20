function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('show');
}

const translations = {
    uz: {
        bukharaArch: "Buxoroning qadimiy arxitekturasi",
        learnMore: "Batafsil",
        navHome: "Bosh sahifa",
        navMissions: "Maqsadlarimiz",
        navArchitecture: "Arxitektura",
        navContact: "Aloqa",
        footerQuote: "“Meros — bu o‘tmishdan qolgan, bugun biz bilan yashayotgan, va kelajak avlodlarga qoldiradigan boyligimizdir. Bizning madaniy va tabiiy merosimiz hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - UNESCO (Butunjahon merosi)"
    },
    en: {
        bukharaArch: "Ancient Architecture of Bukhara",
        learnMore: "Learn More",
        navHome: "Home",
        navMissions: "Missions",
        navArchitecture: "Architecture",
        navContact: "Contact",
        footerQuote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)"
    }
}

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

