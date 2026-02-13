document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded);

      // Prevent scrolling when menu is open
      if (isExpanded) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Floating Call Button Toggle
  const callBtn = document.getElementById("call-btn");
  const clinicList = document.getElementById("clinic-list");

  if (callBtn && clinicList) {
    callBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clinicList.classList.toggle("hidden");

      // Toggle text/icon if needed, e.g., "Close" vs "Call Now"
      if (!clinicList.classList.contains("hidden")) {
        callBtn.textContent = "Close";
      } else {
        callBtn.textContent = "Call Now";
      }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !clinicList.classList.contains("hidden") &&
        !e.target.closest(".floating-call-bar")
      ) {
        clinicList.classList.add("hidden");
        callBtn.textContent = "Call Now";
      }
    });
  }

  // Header fade on scroll
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
    });
  }
});
