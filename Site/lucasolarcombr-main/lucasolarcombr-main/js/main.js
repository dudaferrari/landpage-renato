document.documentElement.lang = "pt-BR";

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuOpenIcon = document.querySelector("[data-menu-icon='open']");
const menuCloseIcon = document.querySelector("[data-menu-icon='close']");
const faqButtons = document.querySelectorAll("[data-faq-button]");
const copyEmailButton = document.querySelector("[data-copy-email]");
const copyEmailLabel = document.querySelector("[data-copy-email-label]");
const toast = document.querySelector("[data-copy-toast]");
const yearTarget = document.querySelector("[data-current-year]");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

function setMenuState(isOpen) {
  if (!menuToggle || !mobileMenu || !menuOpenIcon || !menuCloseIcon) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.classList.toggle("hidden", !isOpen);
  menuOpenIcon.classList.toggle("hidden", isOpen);
  menuCloseIcon.classList.toggle("hidden", !isOpen);
}

if (menuToggle && mobileMenu) {
  setMenuState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

faqButtons.forEach((button, index) => {
  const panel = document.querySelector(`[data-faq-panel="${index}"]`);
  const icon = button.querySelector("[data-faq-icon]");
  const isOpen = index === 0;

  if (panel) {
    panel.hidden = !isOpen;
  }

  button.setAttribute("aria-expanded", String(isOpen));
  if (icon) {
    icon.classList.toggle("rotate-180", isOpen);
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((otherButton, otherIndex) => {
      const otherPanel = document.querySelector(`[data-faq-panel="${otherIndex}"]`);
      const otherIcon = otherButton.querySelector("[data-faq-icon]");
      const shouldOpen = otherButton === button ? !expanded : false;

      otherButton.setAttribute("aria-expanded", String(shouldOpen));

      if (otherPanel) {
        otherPanel.hidden = !shouldOpen;
      }

      if (otherIcon) {
        otherIcon.classList.toggle("rotate-180", shouldOpen);
      }
    });
  });
});

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  const success = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!success) {
    throw new Error("Copy failed");
  }
}

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}

showToast.timeoutId = 0;

if (copyEmailButton && copyEmailLabel) {
  copyEmailButton.addEventListener("click", async () => {
    const emailAddress = copyEmailButton.getAttribute("data-email") || "";

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        copyTextFallback(emailAddress);
      }

      copyEmailLabel.textContent = "Email copiado!";
      showToast("Email copiado para a area de transferencia!");

      window.setTimeout(() => {
        copyEmailLabel.textContent = "Clique para copiar";
      }, 2000);
    } catch (error) {
      console.error(error);
      alert(`Nao foi possivel copiar o email automaticamente. Copie manualmente: ${emailAddress}`);
    }
  });
}