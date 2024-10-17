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
 const faqQuestions = document.querySelectorAll('.faq-question');
        const searchInput = document.querySelector('.search-input');
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                question.classList.toggle('active');
                const answer = question.nextElementSibling;
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.padding = '20px';
                } else {
                    answer.style.maxHeight = 0;
                    answer.style.padding = '0 20px';
                }
            });
        });

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            faqQuestions.forEach(question => {
                const item = question.closest('.faq-item');
                const text = question.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const category = button.getAttribute('data-category');
                filterFAQs(category);
            });
        });

        function filterFAQs(category) {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
  const floatingPaws = document.querySelector('.floating-paws');
        const pawEmoji = '🐾';
        const numberOfPaws = 20;

        for (let i = 0; i < numberOfPaws; i++) {
            const paw = document.createElement('div');
            paw.classList.add('paw');
            paw.textContent = pawEmoji;
            paw.style.left = `${Math.random() * 100}%`;
            paw.style.top = `${Math.random() * 100}%`;
            paw.style.animationDelay = `${Math.random() * 6}s`;
            floatingPaws.appendChild(paw);
        }

        const ctaButtons = document.querySelectorAll('.cta-button, .secondary-cta');
        ctaButtons.forEach(button => {
            button.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            button.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
