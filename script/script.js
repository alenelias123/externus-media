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
  }
  
  document.addEventListener("mousemove", function (event) {
    let gradient = document.querySelector(".blur-gradient");

    let x = event.clientX - gradient.offsetWidth / 2; // Offset by half width
    let y = event.clientY - gradient.offsetHeight / 2; // Offset by half height

    gradient.style.transform = `translate(${x}px, ${y}px)`;
});




// Scale up on hover
document.addEventListener("mouseover", function () {
    let gradient = document.querySelector(".blur-gradient");
    gradient.style.width = "400px";
    gradient.style.height = "400px";
});

// Scale down when mouse leaves
document.addEventListener("mouseout", function () {
    let gradient = document.querySelector(".blur-gradient");
    gradient.style.width = "300px";
    gradient.style.height = "300px";
});
