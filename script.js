document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');

            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });

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
        });
