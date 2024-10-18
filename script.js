document.addEventListener('DOMContentLoaded', () => {
    // Animate the bus driving up
    gsap.to('.bus-svg', {
        bottom: '0%',
        duration: 2,
        ease: "power2.out"
    });

    // Animate the dogs appearing and jumping
    gsap.to('.dog', {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 1.5
    });

    gsap.to('.dog', {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
        delay: 2
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
    const dogs = document.querySelectorAll('.dog');
    
    if (bus) {
        bus.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    }
    
    dogs.forEach((dog, index) => {
        dog.style.transform = `translateY(${scrollPosition * (0.02 + index * 0.01)}px)`;
    });
});
