const APPOINTMENT_URL = "LIEN_RDV_EN_LIGNE_A_REMPLACER";

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".js-appointment-link").forEach((link) => {
  if (APPOINTMENT_URL && APPOINTMENT_URL !== "LIEN_RDV_EN_LIGNE_A_REMPLACER") {
    link.setAttribute("href", APPOINTMENT_URL);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  } else {
    link.setAttribute("href", "#contact");
  }
});
