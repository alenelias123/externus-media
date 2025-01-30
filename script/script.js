window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("home-screen");

  // Show loading screen for 5 seconds, then reveal main content
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 1s ease-in-out";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000); // Allow time for fade-out
  }, 1500); // Keep loading screen visible for 5 seconds
});


  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }s
  
