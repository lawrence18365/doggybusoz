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
                x: '0%', // Move to its original position
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
