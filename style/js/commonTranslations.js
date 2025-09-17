// document.addEventListener("DOMContentLoaded", function () {
//   const commonTranslations = {
//     en: {
//       header: {
//         home: "Home",
//         mission: "Mission",
//         architecture: "Architecture",
//         contact: "Contact",
//         stories: "Stories",
//       },
//       footer: {
//         quote: "“Heritage is our legacy from the past, what we live with today, and what we pass on to future generations. Our cultural and natural heritage are both irreplaceable sources of life and inspiration.” - UNESCO (World Heritage)",
//         copy: "© 2025 Kohna Meros"
//       }
//     },
//     uz: {
//       header: {
//         home: "Bosh sahifa",
//         mission: "Missiya",
//         architecture: "Meʼmorchilik",
//         contact: "Aloqa",
//         stories: "Hikoyalar",
//       },
//       footer: {
//         quote: "“Merosi bizning o‘tmishimizdan qolgan boyligimiz, bugungi hayotimizning bir qismi va kelajak avlodlarga qoldiradigan bebaho xazinadir. Madaniy va tabiiy merosimiz — hayot va ilhomning almashtirib bo‘lmaydigan manbalaridir.” - YuNESKO (Jahon merosi)",
//         copy: "© 2025 Kohna Meros"
//       }
//     }
//   };

//   function updateCommonLanguage(lang) {
//     const t = commonTranslations[lang];

//     // Desktop nav
//     document.querySelector("#mainMenu a[href='index.html']").textContent = t.header.home;
//     document.querySelector("#mainMenu a[href='']").textContent = t.header.mission;
//     document.querySelector("#mainMenu a[href='architecture.html']").textContent = t.header.architecture;
//     document.querySelector("#mainMenu a[href='about.html']").textContent = t.header.contact;
//     document.querySelector("#mainMenu a[href='#']").textContent = t.header.stories;

//     // Mobile nav
//     document.querySelector("#mobileMenu a[href='index.html']").textContent = t.header.home;
//     document.querySelector("#mobileMenu a[href='']").textContent = t.header.mission;
//     document.querySelector("#mobileMenu a[href='architecture.html']").textContent = t.header.architecture;
//     document.querySelector("#mobileMenu a[href='about.html']").textContent = t.header.contact;
//     document.querySelector("#mobileMenu a[href='#']").textContent = t.header.stories;

//     // Footer
//     document.querySelector(".footer-quote").textContent = t.footer.quote;
//     document.querySelector(".footer-copy").textContent = t.footer.copy;
//   }

//   // Оба переключателя языка
//   const langSelectDesktop = document.getElementById("languageSwitcherDesktop");
//   const langSelectMobile = document.getElementById("languageSwitcherMobile");

//   function syncLanguage(lang) {
//     langSelectDesktop.value = lang;
//     langSelectMobile.value = lang;
//     updateCommonLanguage(lang);
//   }

//   // По умолчанию английский
//   syncLanguage("en");

//   // Слушатели
//   langSelectDesktop.addEventListener("change", function () {
//     syncLanguage(this.value);
//   });

//   langSelectMobile.addEventListener("change", function () {
//     syncLanguage(this.value);
//   });
// });
