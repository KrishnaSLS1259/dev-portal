window.onload = function() {
  // Swagger UI setup
  const ui = SwaggerUIBundle({
    url: "employee.json",
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout"
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
      const sectionTop = section.offsetTop - 100;
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

  // Highlight target section when clicked in sidebar
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function() {
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        document.querySelectorAll("section").forEach(sec => sec.classList.remove("highlight"));
        targetSection.classList.add("highlight");
        setTimeout(() => targetSection.classList.remove("highlight"), 2000);
      }
    });
  });

  // Playground collapsible toggle
  const playgroundSection = document.getElementById("playground");
  if (playgroundSection) {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Playground";
    toggleBtn.className = "playground-toggle";
    playgroundSection.insertBefore(toggleBtn, playgroundSection.firstChild);

    toggleBtn.addEventListener("click", () => {
      const swaggerUI = document.getElementById("swagger-ui");
      if (swaggerUI.style.display === "none") {
        swaggerUI.style.display = "block";
      } else {
        swaggerUI.style.display = "none";
      }
    });
  }
};
