window.onload = function() {
  // Swagger UI setup
  const ui = SwaggerUIBundle({
    url: "employee.json", // path to your OpenAPI spec file
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout"
  });

  // Branding in Swagger topbar
  const topbar = document.querySelector(".swagger-ui .topbar-wrapper");
  if (topbar) {
    topbar.innerHTML = `
      <img src="logo.png" alt="Company Logo" style="height:40px; width:auto; margin-right:10px;">
      <span style="color:white; font-weight:bold; font-size:18px;">Sodales Employee API Docs</span>
    `;
  }

  // Dark mode toggle
  const toggleButton = document.getElementById("darkModeToggle");
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  }
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleButton.textContent = "🌙";
    }
  });

  // Back to Top button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Copy code buttons
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const code = button.nextElementSibling.innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = "Copy", 2000);
      });
    });
  });

  // Scrollspy effect
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Search bar functionality
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", function(e) {
    const query = e.target.value.toLowerCase();
    sections.forEach(section => {
      const text = section.innerText.toLowerCase();
      if (text.includes(query)) {
        section.style.display = "block";
      } else {
        section.style.display = query ? "none" : "block";
      }
    });
  });
};
