document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuToggle || !mobileNav) {
    console.error("menuToggle or mobileNav not found");
    return;
  }

  // toggle menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileNav.classList.toggle("active");
  });

  // close when clicking menu link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileNav.classList.contains("active") &&
      !mobileNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileNav.classList.remove("active");
    }
  });

  // close on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      mobileNav.classList.remove("active");
    }
  });

});




  const form = document.getElementById("contactForm");
  const button = form.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    button.classList.add("loading");

    setTimeout(() => {
      button.classList.remove("loading");
      button.classList.add("success");
      button.textContent = "Message Sent ✔";
      form.reset();
    }, 2000);
  });





function openCert(imgSrc) {
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certImg");
  modal.style.display = "flex";
  modalImg.src = imgSrc;
  document.body.style.overflow = "hidden";
}

function closeCert() {
  const modal = document.getElementById("certModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
}

// Close on 'Esc' key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeCert();
});


