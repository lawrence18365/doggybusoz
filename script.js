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

    // Animate bus
   // Animate bus
const busAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });
busAnimation
    .fromTo('#bus-image', {
        x: '100vw',
        opacity: 0,
        scale: 0.8
    }, {
        duration: 2,
        x: '0%',
        opacity: 1,
        scale: 1,
        ease: 'power2.out'
    })
    .to('#bus-image', {
        duration: 1,
        y: '-5px',
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
    })
    .to('#bus-image', {
        duration: 2,
        x: '-100vw',
        opacity: 1,
        scale: 0.8,
        ease: 'power2.in',
        delay: 1
    });

// Mobile-specific adjustments
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    busAnimation.clear();
    busAnimation
        .fromTo('#bus-image', {
            x: '100vw',
            opacity: 0,
            scale: 0.6
        }, {
            duration: 2,
            x: '0%',
            opacity: 1,
            scale: 0.8,
            ease: 'power2.out'
        })
        .to('#bus-image', {
            duration: 0.5,
            y: '-3px',
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        })
        .to('#bus-image', {
            duration: 2,
            x: '-100vw',
            opacity: 1,
            scale: 0.6,
            ease: 'power2.in',
            delay: 1
        });

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

    // Mobile-specific adjustments
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Adjust bus animation for mobile
        busAnimation.clear();
        busAnimation
            .fromTo('#bus-image', {
                x: '100vw',
                y: '5vh',
                opacity: 0,
                scale: 0.6,
                rotation: -3
            }, {
                duration: 2,
                x: '0%',
                y: '0vh',
                opacity: 1,
                scale: 0.8,
                rotation: 0,
                ease: 'power2.out'
            })
            .to('#bus-image', {
                duration: 0.3,
                y: '-1vh',
                yoyo: true,
                repeat: 2,
                ease: 'power1.inOut'
            })
            .to('#bus-image', {
                duration: 2,
                x: '-110vw',
                y: '3vh',
                scale: 0.7,
                rotation: 3,
                ease: 'power2.in'
            });

        // Adjust hero content animation for mobile
        gsap.from('.hero-content > *', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const heroBus = document.getElementById('hero-bus');
  const heroContent = document.querySelector('.hero-content');
  
  // Parallax effect for bus
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gsap.to(heroBus, {
      duration: 1,
      x: mouseX * 20,
      y: mouseY * 20,
      ease: 'power2.out'
    });
  });

  // Scroll-triggered animations
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(heroContent, {
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

  gsap.to(heroBus, {
    y: -100,
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
