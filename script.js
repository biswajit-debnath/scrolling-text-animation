const highlightedSpan = document.querySelector('.highlights');

const splitText = new SplitType('.text-revel', {
    types: 'chars'
});

if (highlightedSpan) {
    const badge = document.createElement('span');
    badge.className = 'highlighted-one';
    badge.textContent = "1";
    highlightedSpan.appendChild(badge);
}

const scrollTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: 'main',
        scroller: 'body',
        scrub: true,
        pin: true,
    }
});

scrollTimeLine.from('.text-revel .char', {
    yPercent: -20,
    opacity: 0,
    willChange: 'transform',
    stagger: 0.05,
});

scrollTimeLine.to(highlightedSpan, {
    color: '#c75656',
});

scrollTimeLine.to('.highlighted-one', {
    keyframes: {
        yPercent: [0, -50, 0],
        opacity: [0, 1, 1]
    }
});

function smoothScroll() {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

smoothScroll();
