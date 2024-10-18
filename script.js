document.addEventListener('DOMContentLoaded', () => {
    // Animate the bus driving in from right to left
    gsap.to('.bus-svg', {
        right: '-20%',
        duration: 2,
        ease: "power2.out"
    });

    // Animate hero content
    gsap.from('.hero-content', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    // Animate CTA buttons
    gsap.from('.cta-button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 1
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const bus = document.querySelector('.bus-svg');
    
    if (bus) {
        bus.style.transform = `translateY(-50%) translateX(${scrollPosition * 0.05}px)`;
    }
});
