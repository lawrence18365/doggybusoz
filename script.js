document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Add dropdown functionality for mobile
    const dropdownItems = document.querySelectorAll('.nav-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const dropdown = this.querySelector('.dropdown');
                if (dropdown) {
                    dropdown.classList.toggle('active');
                }
            }
        });
    });

    // Animate reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});
