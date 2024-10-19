// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animate header on scroll
    const header = document.querySelector('.header');
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'header--scrolled', targets: header }
    });

    // Hero section animations
    const heroTl = gsap.timeline();

    // Animate hero background
    heroTl.from('.hero-background', {
        duration: 1.5,
        opacity: 0,
        scale: 1.1,
        ease: 'power3.out'
    });

    // Animate hero content
    heroTl.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'back.out(1.7)'
    }, '-=0.5');

    heroTl.from('.hero-description', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.7');

    heroTl.from('.cta-buttons .cta-button', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.5');

    // Parallax effect for hero background
    gsap.to('.hero-background', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Scroll indicator animation
    gsap.to('.scroll-indicator', {
        y: 20,
        opacity: 0,
        ease: 'power2.in',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '25% top',
            scrub: true
        }
    });

    // Custom cursor effect
    const cursor = document.querySelector('.custom-cursor');
    const cursorCircle = document.querySelector('.cursor-circle');

    gsap.set(cursorCircle, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { duration: 0.1, x: e.clientX, y: e.clientY });
        gsap.to(cursorCircle, { duration: 0.5, x: e.clientX, y: e.clientY });
    });

    document.addEventListener('mousedown', () => {
        gsap.to(cursor, { duration: 0.2, scale: 0.8 });
        gsap.to(cursorCircle, { duration: 0.3, scale: 1.5, opacity: 0.2 });
    });

    document.addEventListener('mouseup', () => {
        gsap.to(cursor, { duration: 0.2, scale: 1 });
        gsap.to(cursorCircle, { duration: 0.3, scale: 1, opacity: 1 });
    });

    // Bus animation
    const busImage = document.getElementById('hero-bus');
    
    if (busImage) {
        gsap.killTweensOf(busImage); // Kill any existing animations
        gsap.set(busImage, { x: '200%' }); // Start far off-screen right
        const busAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        
        busAnimation
            .to(busImage, {
                duration: 5,
                x: '20%', // Move to its original position
                ease: 'power1.inOut',
                onStart: () => console.log("Bus entering")
            })
            .to(busImage, {
                duration: 2,
                onComplete: () => console.log("Bus paused")
            })
            .to(busImage, {
                duration: 2,
                x: '-300%', // Move far off-screen left
                ease: 'power1.inOut',
                onComplete: () => console.log("Bus exiting")
            });
    } else {
        console.error("Bus image element not found");
    }

    // Mobile-specific adjustments
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Adjust hero content animation for mobile
        gsap.from('.hero-content > *', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }

    // Scroll-triggered animations
    gsap.to('.hero-content', {
        y: 100,
        opacity: 0,
        ease: 'power2.in',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Intersection Observer for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.hero'));

    // Enhance buttons with hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
});

 document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            const categoryButtons = document.querySelectorAll('.category-btn');
            const searchInput = document.querySelector('.search-input');
            const faqItems = document.querySelectorAll('.faq-item');

            // Toggle FAQ answers
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const icon = question.querySelector('.faq-icon');

                    question.classList.toggle('active');
                    answer.classList.toggle('active');

                    if (answer.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    } else {
                        answer.style.maxHeight = 0;
                    }
                });
            });

            // Filter FAQ items by category
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    faqItems.forEach(item => {
                        if (category === 'all' || item.getAttribute('data-category') === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Search functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();

                faqItems.forEach(item => {
                    const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

                    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
 
document.addEventListener('DOMContentLoaded', function() {
            const floatingPaws = document.querySelector('.floating-paws');
            const pawEmoji = '🐾';
            const numberOfPaws = 10;

            for (let i = 0; i < numberOfPaws; i++) {
                const paw = document.createElement('div');
                paw.classList.add('paw');
                paw.textContent = pawEmoji;
                paw.style.left = `${Math.random() * 100}%`;
                paw.style.top = `${Math.random() * 100}%`;
                paw.style.animationDelay = `${Math.random() * 5}s`;
                floatingPaws.appendChild(paw);
            }
        });

