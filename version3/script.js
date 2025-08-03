const h2 = document.querySelector('.text-container h2');
const h2TextContent = h2.textContent;

const h2Letters = h2TextContent.split('');
let replacedH2Html = '';


h2Letters.forEach((letter, index) => {
    if(index < Math.floor(h2Letters.length/2)) {
        replacedH2Html += `<span class="highlight-first-half">${letter}</span>`;
    } else {
        replacedH2Html += `<span class="highlight-second-half">${letter}</span>`;
    }
});

h2.innerHTML = replacedH2Html;

gsap.from('.highlight-first-half', {
    y: 80,
    duration: 0.4,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.text-container',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 0%',
        markers: true
    }
});

gsap.from('.highlight-second-half', {
    y: 80,
    duration: 0.4,
    opacity: 0,
    stagger: -0.15,
    scrollTrigger: {
        trigger: '.text-container',
        scroller: 'body',
        start: 'top 50%',
        end: 'bottom 0%',
        markers: true
    }
});