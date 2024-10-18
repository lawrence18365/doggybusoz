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
    gsap.fromTo('#bus-image', {
        x: '100vw',
        opacity: 0
    }, {
        duration: 3,
        x: '0%',
        opacity: 1,
        ease: 'power2.out',
        delay: 1
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

    // Custom cursor effect
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => cursor.classList.add('expand'));
    document.addEventListener('mouseup', () => cursor.classList.remove('expand'));
});
