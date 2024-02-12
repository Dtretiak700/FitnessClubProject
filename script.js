gsap.registerPlugin(ScrollTrigger)

// Change Images
const imageBlocks = document.querySelectorAll('.img-box');
const showText = document.querySelectorAll('.number-activity');
showText.forEach(text => {
    text.addEventListener('mouseover',() => {
        removeText();
        text.classList.add('showText');
    })
    function removeText() {
        showText.forEach(text => {
            text.classList.remove('showText');
        })
    }
})

imageBlocks.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected');
    })
    function removeFocus() {
        imageBlocks.forEach(item => {
            item.classList.remove('selected');
        })
    }
})

// Countdown time
function openSoon() {
    const openingDate = new Date('June 1, 2024 00:00');
    const nowDay = new Date();
    const difference = openingDate - nowDay;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;
    
    const displayDay = Math.floor(difference / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((difference%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((difference%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((difference%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (difference <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;

        clearInterval(timerEnd);
    }

}
let timerEnd = setInterval(openSoon, 1000);

// Button Review
const btnSpotOne = document.querySelector('.btn-spotOne');
const btnSpotTwo = document.querySelector('.btn-spotTwo');
const btnSpotThree = document.querySelector('.btn-spotThree');

const borderAroundOne = document.querySelector('.btn-spots-containerOne');
const borderAroundTwo = document.querySelector('.btn-spots-containerTwo');
const borderAroundThree = document.querySelector('.btn-spots-containerThree');

const reviewOne = document.querySelector('.review-groupOne');
const reviewTwo = document.querySelector('.review-groupTwo');
const reviewThree = document.querySelector('.review-groupThree');

// First button is clicked
btnSpotOne.addEventListener('mouseover', selectedButtonOne);
function selectedButtonOne() {
    removeFocusTwo();
    removeFocusThree();
    addFocusOne();
    reviewOne.style.display = 'block';
    reviewTwo.style.display = 'none';
    reviewThree.style.display = 'none';
    gsap.fromTo('.review-groupOne', {
        opacity: 0,
    }, {
        opacity: 1, 
        duration: 2
    })
}

// Second button is clicked
btnSpotTwo.addEventListener('mouseover', selectedButtonTwo);
function selectedButtonTwo() {
    removeFocusOne();
    removeFocusThree();
    addFocusTwo();
    reviewOne.style.display = 'none';
    reviewThree.style.display = 'none';
    reviewTwo.style.display = 'block';
    gsap.fromTo('.review-groupTwo', {
        opacity: 0,
    }, {
        opacity: 1, 
        duration: 2
    })
}

// Third button is clicked
btnSpotThree.addEventListener('mouseover', selectedButtonThree);
function selectedButtonThree() {
    removeFocusOne();
    removeFocusTwo();
    addFocusThree();
    reviewOne.style.display = 'none';
    reviewTwo.style.display = 'none';
    reviewThree.style.display = 'block';
    gsap.fromTo('.review-groupThree', {
        opacity: 0,
    }, {
        opacity: 1, 
        duration: 2
    })
}

// add functions
function addFocusOne() {
    btnSpotOne.classList.add('selectedButton');
    borderAroundOne.classList.add('selectedBorder');
}
function addFocusTwo() {
    btnSpotTwo.classList.add('selectedButton');
    borderAroundTwo.classList.add('selectedBorder');
}
function addFocusThree() {
    btnSpotThree.classList.add('selectedButton');
    borderAroundThree.classList.add('selectedBorder');
}

// remove functions
function removeFocusOne() {
    btnSpotOne.classList.remove('selectedButton');
    borderAroundOne.classList.remove('selectedBorder');
}
function removeFocusTwo() {
    btnSpotTwo.classList.remove('selectedButton');
    borderAroundTwo.classList.remove('selectedBorder');
}
function removeFocusThree() {
    btnSpotThree.classList.remove('selectedButton');
    borderAroundThree.classList.remove('selectedBorder');
}

// Animation
gsap.fromTo('.menu-group', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
})

gsap.fromTo('.head-min', {
    y: 30,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 1
})

gsap.fromTo('.head-max', {
    y: 30,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    delay: 1.7,
    duration: 1
})

gsap.fromTo('.img-second-page', {
    scrollTrigger: {
        trigger: '.why-choose-us-section',
        start: '-=30% top',
    },
    x: -200,
    opacity: 0
}, { 
    scrollTrigger: {
    trigger: '.why-choose-us-section',
    start: '-=30% top',
},
    x: 0,
    opacity: 1,
    duration: 1
})

gsap.to('.num-train', {
    scrollTrigger: {
        trigger: '.why-choose-us-section',
        start: '+=35% top',
    },
    text: '25',
    duration: .1,
    ease: 'power1.in',
})

gsap.to('.num-expert', {
    scrollTrigger: {
        trigger: '.why-choose-us-section',
        start: '+=35% top',
    },
    text: '11',
    duration: .4,
    ease: 'power1.in',
    delay: .1
})

gsap.to('.num-total', {
    scrollTrigger: {
        trigger: '.why-choose-us-section',
        start: '+=35% top',
    },
    text: '53',
    duration: .4,
    ease: 'power1.in',
    delay: .2
})

gsap.to('.num-happy', {
    scrollTrigger: {
        trigger: '.why-choose-us-section',
        start: '+=35% top',
    },
    text: '975',
    duration: .4,
    ease: 'power1.in',
    delay: .3
})

gsap.fromTo('.work-program-container', {
    scrollTrigger: {
        trigger: '.find-your-workout-section',
        start: '-=30% top',
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.find-your-workout-section',
        start: '-=30% top',
    },
    opacity: 1,
    duration: 3
})

gsap.fromTo('.circle-container', {
    scrollTrigger: {
        trigger: '.title-text-exercise',
        start: '-=30% top',
    },
    opacity: 0
}, {
    scrollTrigger: {
        trigger: '.title-text-exercise',
        start: '-=30% top',
    },
    opacity: 1,
    stagger: .4,
    duration: 2
})

gsap.to('.big-text', {
    scale: 1.1,
    repeat: -1,
    duration: 1,
    yoyo: true
})

gsap.to('.price-img', {
    scrollTrigger: {
        trigger: '.pricing-section',
        start: 'top end',
        scrub: true
    }, 
    scale: 2,
    duration: 4
})
