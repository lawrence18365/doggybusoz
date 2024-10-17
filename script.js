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
//Service Area
  const checkAreaButton = document.querySelector('.cta-button');
            checkAreaButton.addEventListener('click', function(e) {
                e.preventDefault();
                const userPostcode = prompt("Please enter your postcode to check if we service your area:");
                if (userPostcode) {
                    // Here you would typically make an API call to check the postcode
                    // For this example, we'll just show an alert
                    alert(`Thank you! We'll check if we cover the area with postcode ${userPostcode} and get back to you soon.`);
                }
            });
        });

    // Testimonial carousel
    const carousel = document.querySelector('.testimonial-carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let autoScroll;

    // Check if carousel elements exist before attaching events
    if (carousel && cards.length && prevBtn && nextBtn) {

        function showTestimonial(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % cards.length;
            showTestimonial(currentIndex);
        }

        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            showTestimonial(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextTestimonial();
            resetAutoScroll();
        });

        prevBtn.addEventListener('click', () => {
            prevTestimonial();
            resetAutoScroll();
        });

        // Auto-scroll every 5 seconds
        autoScroll = setInterval(nextTestimonial, 5000);

        // Reset auto-scroll timer on button click
        function resetAutoScroll() {
            clearInterval(autoScroll);
            autoScroll = setInterval(nextTestimonial, 5000);
        }

        // Pause auto-scroll on hover, resume on leave
        carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
        carousel.addEventListener('mouseleave', () => autoScroll = setInterval(nextTestimonial, 5000));
    }
});
