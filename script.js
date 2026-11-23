// Send a GA4 event. Does nothing if gtag hasn't loaded (e.g. blocked by an ad blocker).
function trackEvent(name, params) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

// Clinic names by phone number, so every call event uses the same name
// no matter which link was tapped.
const CLINIC_BY_PHONE = {
  "+6563100900": "Chua Chu Kang",
  "+6562433243": "Bedok",
  "+6565675600": "Jurong",
  "+6563884466": "Sengkang",
};

document.addEventListener("DOMContentLoaded", () => {
  // Analytics: phone link taps (contact section + floating call list)
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", () => {
      const phone = link.getAttribute("href").replace("tel:", "");
      trackEvent("click_to_call", {
        clinic: CLINIC_BY_PHONE[phone] || "unknown",
        phone_number: phone,
        link_location: link.closest("#clinic-list")
          ? "floating_list"
          : "contact_section",
      });
    });
  });

  // Analytics: header menu links and logo
  document.querySelectorAll('header a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      trackEvent("nav_click", {
        section: href === "#" ? "top" : href.slice(1),
        link_text: link.textContent.trim() || "logo",
      });
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      mobileMenuBtn.setAttribute("aria-expanded", isExpanded);
      trackEvent("mobile_menu_toggle", {
        menu_action: isExpanded ? "open" : "close",
      });

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
    const originalIcon = callBtn.innerHTML;
    const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

    callBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clinicList.classList.toggle("hidden");
      const isHidden = clinicList.classList.contains("hidden");
      callBtn.setAttribute("aria-expanded", !isHidden);
      trackEvent("call_button_toggle", {
        menu_action: isHidden ? "close" : "open",
      });

      if (!isHidden) {
          callBtn.innerHTML = closeIcon;
      } else {
          callBtn.innerHTML = originalIcon;
      }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !clinicList.classList.contains("hidden") &&
        !e.target.closest(".floating-call-bar")
      ) {
        clinicList.classList.add("hidden");
        callBtn.setAttribute("aria-expanded", "false");
        callBtn.innerHTML = originalIcon;
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
