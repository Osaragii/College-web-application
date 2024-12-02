const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");

menuIcon.addEventListener("click", function() {
    sideMenu.classList.toggle("active"); // Toggle active class on menu
});

document.getElementById("logout").addEventListener("click", function() {
    alert("You have logged out.");
    window.location.href = "index.html";
});

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', { weekday: 'long' });
    const date = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });

    document.getElementById('current-day').textContent = day;
    document.getElementById('current-date').textContent = date;
    document.getElementById('current-month').textContent = month;
});