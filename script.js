const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const siteHeader = document.querySelector(".site-header");

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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();

    if (hash === "#accueil") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", hash);
      return;
    }

    const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
    const contentTarget = target.firstElementChild || target;
    const top = contentTarget.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

    window.scrollTo({ top, behavior: "smooth" });
    history.pushState(null, "", hash);
  });
});

const copyToast = document.querySelector(".copy-toast");

function showCopyToast(message) {
  if (!copyToast) return;

  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  window.clearTimeout(showCopyToast.timeoutId);
  showCopyToast.timeoutId = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 2200);
}

async function copyToClipboard(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}

document.querySelectorAll(".js-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    const label = button.getAttribute("data-copy-label") || "Copié";

    if (!value) return;

    try {
      await copyToClipboard(value);
      showCopyToast(label);
    } catch {
      showCopyToast("Copie impossible");
    }
  });
});
