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

    // Animate hero content
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.cta-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });

    // Animate bus
    const busTimeline = gsap.timeline();
    busTimeline.to('.bus-container', {
        duration: 2,
        x: '-100vw', // Move the bus from right to left
        ease: 'power1.inOut'
    }).to('.bus-container', {
        duration: 0.5,
        y: -10, // Small bounce effect when the bus stops
        ease: 'power1.inOut'
    }).to('.bus-container', {
        duration: 0.5,
        y: 0,
        ease: 'bounce.out'
    });

    // Animate paw prints
    const pawPrints = document.querySelectorAll('.paw-print');
    pawPrints.forEach((paw, index) => {
        gsap.set(paw, { left: `${index * 25}%`, bottom: `${Math.random() * 50}px` });
        gsap.to(paw, {
            duration: 1,
            opacity: 1,
            y: -30,
            ease: 'power1.out',
            delay: index * 0.2,
            repeat: -1,
            yoyo: true
        });
    });

    // Scroll indicator animation
    gsap.to('.scroll-indicator', {
        y: 10,
        opacity: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, { duration: 1, scrollTo: target, ease: 'power2.inOut' });
            }
        });
    });

    // Custom cursor effect
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('expand'));
    document.addEventListener('mouseup', () => cursor.classList.remove('expand'));
});
