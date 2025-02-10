'use strict';

// Debugging - Ensure Script is Running
console.log("Script Loaded!");

// Function to Load Map
const loadMap = () => {
  console.log("Initializing Map...");

  // Ensure Leaflet is loaded
  if (typeof L === "undefined") {
    console.error("Leaflet.js is not loaded!");
    return;
  }

  // Initialize Map Centered on New York
  const map = L.map('map').setView([40.7128, -74.0060], 10);

  // Load OpenStreetMap Tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Sample Property Listings
  const properties = [
    { name: "Luxury Apartment", lat: 40.73061, lng: -73.935242, price: "$3,000/mo" },
    { name: "Cozy House", lat: 40.650002, lng: -73.949997, price: "$2,500/mo" },
    { name: "Modern Condo", lat: 40.785091, lng: -73.968285, price: "$4,500/mo" }
  ];

  // Add Property Markers
  properties.forEach(property => {
    L.marker([property.lat, property.lng])
      .addTo(map)
      .bindPopup(`<b>${property.name}</b><br>${property.price}`);
  });

  console.log("Map Loaded Successfully!");
};

// Run Map Load Function After Page Loads
window.addEventListener("load", loadMap);

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");

  // Redirect to index.html if user is logged in and on login.html
  if (sessionStorage.getItem("loggedIn") === "true" && window.location.pathname.includes("login.html")) {
    window.location.href = "index.html";
  }

  // Prevent unauthorized access to index.html
  if (!sessionStorage.getItem("loggedIn") && window.location.pathname.includes("index.html")) {
    window.location.href = "login.html";
  }

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Validate credentials
      if (username === "login" && password === "123") {
        sessionStorage.setItem("loggedIn", "true"); // Set login state
        window.location.href = "index.html"; // Redirect to home page
      } else {
        alert("Invalid username or password"); // Show error message
      }
    });
  }

  // Show/Hide login and logout buttons based on login state
  if (sessionStorage.getItem("loggedIn") === "true") {
    if (loginBtn) loginBtn.classList.add("hidden"); // Hide login button
    if (logoutBtn) logoutBtn.classList.remove("hidden"); // Show logout button
  } else {
    if (loginBtn) loginBtn.classList.remove("hidden"); // Show login button
    if (logoutBtn) logoutBtn.classList.add("hidden"); // Hide logout button
  }

  // Handle logout button click
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      sessionStorage.removeItem("loggedIn"); // Clear login state
      alert("Logged out successfully!"); // Show logout message
      window.location.href = "login.html"; // Redirect to login page
    });
  }
});
