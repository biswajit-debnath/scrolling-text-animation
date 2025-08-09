
window.addEventListener('wheel', (e) => {
    console.log("Wheel event detected:", e);
    if(e.deltaY > 0) {
        gsap.to('.label', {
            transform: 'translateX(-200%)',
            duration: 2,
            ease: 'none',
            repeat: -1
        });

        gsap.to('.label img', {
            rotate: '180deg',
        });
    } else {
        gsap.to('.label', {
            transform: 'translateX(0%)',
            duration: 2,
            ease: 'none',
            repeat: -1
        });
        gsap.to('.label img', {
            rotate: '0deg',
        });
    }
});