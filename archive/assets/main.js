document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  // Set initial mode from localStorage or system
  function setInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      html.classList.add("dark");
      iconSun?.classList.add("hidden");
      iconMoon?.classList.remove("hidden");
    } else {
      html.classList.remove("dark");
      iconSun?.classList.remove("hidden");
      iconMoon?.classList.add("hidden");
    }
  }
  setInitialTheme();

  // Toggle handler
  themeToggle?.addEventListener("click", function () {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    iconSun?.classList.toggle("hidden", isDark);
    iconMoon?.classList.toggle("hidden", !isDark);
  });

  // --- Header ---
  const header = document.querySelector(".site-header");
  document.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (window.scrollY > 10) {
      header.classList.add(
        "bg-white/70",
        "dark:bg-black/70",
        "shadow",
        "dark:border-gray-800"
      );
    } else {
      header.classList.remove(
        "bg-white/70",
        "dark:bg-black/70",
        "shadow",
        "dark:border-gray-800"
      );
    }
  });

  const elements = document.querySelectorAll("[data-fade]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-5");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});
