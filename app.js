const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });
gsap.registerPlugin(ScrollTrigger);


tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to('.intro-video', { y: "-100%", duration: 1 }, "-=1");

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.social-header', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.4");
tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1.4");
tl.fromTo('.me', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.4");

tl.fromTo('.p-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.4");

gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });

gsap.from(".square-anim", {
    stagger: .4,
    scale: 0.1,
    duration: 5,
    ease: Back.easeOut.config(1.7)
})

gsap.from(".transition2", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center",
        end: "top 100px",
    }
})


gsap.from(".transition3", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".transition4", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        end: "top 100px",
    }
})

gsap.from(".transition5", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -100,
    scrollTrigger: {
        trigger: ".transition5",
        start: "top center",
        end: "top 100px",
    }
})

//gsap.to(".boxes", 1, {
//  scale: 0.1,
//y: 500,
//yoyo: true,
//repeat: 1,
//ease: "power1.inOut",
//delay: 1,
//stagger: {
//  amount: 0,
//grid: "auto",
//from: "center"
// }
//});