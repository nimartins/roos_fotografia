
/* ==================================
   CONFIGURAÇÕES DE CONTATO
================================== */

// DDI + DDD + número, somente números.
const WHATSAPP_NUMBER = "5511999999999";

// Link do Instagram.
const INSTAGRAM_URL = "https://www.instagram.com/";


/* ==================================
   WHATSAPP
================================== */

const whatsappMessage = encodeURIComponent(
    "Olá, Nicole! Conheci seu trabalho pela Roos Fotografia e gostaria de conversar sobre um orçamento."
);

const whatsappLink = document.querySelector("#whatsapp-link");

if (whatsappLink) {
    whatsappLink.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
}


/* ==================================
   INSTAGRAM
================================== */

const instagramLink = document.querySelector("#instagram-link");

if (instagramLink) {
    instagramLink.href = INSTAGRAM_URL;
}


/* ==================================
   ANO AUTOMÁTICO NO RODAPÉ
================================== */

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ==================================
   MENU MOBILE
================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
