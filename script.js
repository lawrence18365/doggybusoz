document.addEventListener('DOMContentLoaded', () => {
    // Animate the bus
    gsap.to('.bus-svg', {
        x: 20,
        y: -10,
        rotation: 2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Animate the dogs
    gsap.to('.dog', {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2
    });

    // Animate hero content
    gsap.from('.hero-content', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
    });

    // Animate CTA buttons
    gsap.from('.cta-button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.5
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const bus = document.querySelector('.bus-svg');
    const dogs = document.querySelectorAll('.dog');
    
    if (bus) {
        bus.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    
    dogs.forEach((dog, index) => {
        dog.style.transform = `translateY(${scrollPosition * (0.05 + index * 0.02)}px)`;
    });
});
