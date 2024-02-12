if (window.innerWidth < 1200) {
    gsap.to('.show-group', {
        x: 100,
        opacity: 1,
        duration: 2,
        stagger: 1
    })
    
    gsap.to('.right-text', {
        x: -100,
        opacity: 1,
        duration: 2,
        delay: 1
    })
} else {
    gsap.to('.show-group', {
        x: 300,
        opacity: 1,
        duration: 2,
        stagger: 1
    })
    
    gsap.to('.right-text', {
        x: -300,
        opacity: 1,
        duration: 2,
        delay: 1
    })
}