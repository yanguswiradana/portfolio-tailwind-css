document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuBtn.innerHTML = '&#9776;'; // Hamburger icon
        } else {
            menuBtn.innerHTML = '&times;'; // Cross icon
        }
    });

    document.addEventListener('click', function (event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            menuBtn.innerHTML = '&#9776;'; // Reset to hamburger icon when clicking outside
        }
    });
});
