// Hamburger Menu
const checkbox = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelectorAll("#mobile-menu a");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
    void mobileMenu.offsetWidth;
    mobileMenu.classList.remove("opacity-0", "-translate-y-2");
    mobileMenu.classList.add("opacity-100", "translate-y-0");
  } else {
    closeMenu();
  }
});

function closeMenu() {
  document.body.classList.remove("overflow-hidden");
  mobileMenu.classList.remove("opacity-100", "translate-y-0");
  mobileMenu.classList.add("opacity-0", "-translate-y-2");

  setTimeout(() => {
    mobileMenu.classList.add("hidden");
    checkbox.checked = false;
  }, 300);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function copyEmail() {
  const email = document.getElementById("email").innerText;
  const button = document.getElementById("copyBtn");
  navigator.clipboard.writeText(email).then(() => {
    const originalText = button.innerText;
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = originalText;
    }, 1500);
  });
}
