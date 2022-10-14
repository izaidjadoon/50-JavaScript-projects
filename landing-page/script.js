// this let is for to initialise our gsap to our js file
let tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

//animate the slider section
tl.to('.slider', { y: '-100%', duration: 1.2 });
//animate the intro hero section
tl.to('.intro .hero', { y: '%', duration: 1.9 }, '-=1');
//animate the nav section
tl.fromTo('.nav', { opacity: 0 }, { opacity: 1, duration: 1 });
