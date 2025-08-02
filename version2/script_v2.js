gsap.to("#scrolling-text-block h1", {
    transform: "translate(-100%)",
    duration: 3,
    willChange: "transform",
    scrollTrigger: {
        trigger: "#scrolling-text-block",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom -120%",
        scrub: true,
        pin: true,
    }
})