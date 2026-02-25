// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the hamburger menu button and the navigation links
  const hamburger = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // If both elements exist, add a click event to toggle the nav links
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show'); // Toggle 'show' class to open/close menu
    });
  }
});

// Theme toggle button elements
const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');
const text = document.getElementById('theme-text');

// Check the saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme'); // Apply dark theme if saved
    updateButton(true); // Update button text/icon accordingly
}

// Add click event to toggle theme
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme'); // Toggle dark theme class
    
    let isDark = document.body.classList.contains('dark-theme'); // Check current theme
    
    // Save the current theme in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button icon and text
    updateButton(isDark);
});

// Function to update theme button icon and text
function updateButton(isDark) {
    icon.textContent = isDark ? '🌙' : '☀️'; // Moon for dark, sun for light
    text.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// Hero slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById("heroSlider");

  // Array of hero images
  const images = [
    "image/hero1.webp",
    "image/hero.jpg"
  ];

  let currentIndex = 0;

  // Function to update the hero background image
  function updateBackground() {
    hero.style.backgroundImage =
      `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${images[currentIndex]}')`;
  }

  // Initialize background
  updateBackground();

  // Automatically change image every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateBackground();
  }, 5000);

  // Right arrow click event
  document.querySelector(".hero-arrow.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  });

  // Left arrow click event
  document.querySelector(".hero-arrow.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back if negative
    updateBackground();
  });
});

// Initialize GLightbox for image galleries
const lightbox = GLightbox({
  selector: ".glightbox",      // Target elements with class .glightbox
  touchNavigation: true,       // Enable touch navigation for mobile
  loop: true,                  // Loop images
  zoomable: true,              // Allow zooming
  autoplayVideos: false,       // Disable autoplay for videos
});
