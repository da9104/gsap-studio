let textWrapper = document.querySelector('.title')
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    '<span class="letter">$&</span>'
)

gsap.timeline().from('.title .letter', 2, {
    y: 100,
    opacity: 0,
    ease: "slow(0.1,0.9,false)",
    delay: 4.9,
    duration: 10,
})

gsap.to('.box', 2.4, {
    y: '-100%',
    ease: Expo.easeInOut,
    delay: 1,
})

gsap.from('img', 4, {
    scale: '2',
    ease: Expo.easeInOut,
    delay: 0,
})

gsap.to('.wrapper-img', 2.4, {
    width: '400',
    height: '500',
    ease: Expo.easeInOut,
    delay: 3.6,
})

gsap.from('.img', 0.4, {
    ease: Expo.easeInOut,
    opacity: 0,
    delay: 3.4,
})

gsap.to('.left', 2, {
    x: '-400',
    rotation: -10,
    ease: Expo.easeInOut,
    delay: 3.9,
})

gsap.to('.right', 2, {
    x: '400',
    rotation: 20,
    ease: Expo.easeInOut,
    delay: 3.9,
})

TweenMax.staggerFrom('.menu > div, .hero-container > aside, .img-nav', 2, {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.3,
})

let media = gsap.matchMedia();
media.add("(max-width: 900px)", () => {

    gsap.from('.img', 0.7, {
        ease: Expo.easeInOut,
        opacity: 0,
        delay: 3,
    })

    gsap.to('.left', 2, {
        y: '-100',
        x: '-100',
        rotation: -10,
        ease: Expo.easeInOut,
        delay: 4.2,
    })

    gsap.to('.right', 2, {
        y: '-100',
        x: '100',
        rotation: 10,
        ease: Expo.easeInOut,
        delay: 4.2,
    })

});