document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.show-menu-btn');
    const sidebar = document.querySelector('.sitebar');

    // Toggle sidebar visibility when menu button is clicked
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        menuBtn.classList.toggle('show');
    });
});