const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-solution]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="solution"]');
    if (select) {
      const wanted = link.dataset.solution;
      const option = [...select.options].find((item) => item.text === wanted);
      if (option) select.value = option.value;
    }
  });
});

const form = document.querySelector("#availability-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = "Merci ! Le formulaire est actuellement en mode démonstration : aucune demande n'a été envoyée. Avant publication, connectez-le à une adresse e-mail ou à un service de formulaires.";
    status.classList.add("success");
  });
}
