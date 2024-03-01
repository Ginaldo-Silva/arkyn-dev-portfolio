const checkMenuOpen = document.getElementById('burger');
const navbar = document.getElementById('nav');

checkMenuOpen.addEventListener('change', function() {
        if (checkMenuOpen.checked) {
            navbar.classList.add('nav-open');
            navbar.classList.remove('nav-closed');
        } else {
            navbar.classList.add('nav-closed');
            navbar.classList.remove('nav-open');
        }
});