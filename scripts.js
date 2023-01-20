document.getElementById('div').onscroll = function () { scrollFun() }
function scrollFun() {
    if (document.getElementById('div').scrollTop > 2) {
        document.getElementById('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
        document.getElementById('nav').style.transition = '1s'
        document.getElementById('input').style.backgroundColor = "white"
        document.getElementById('input') = "black"
    } else if (document.getElementById('div').scrollTop < 2) {
        document.getElementById('nav').style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        document.getElementById('nav').style.transition = '1s'
    }
}
anime({
    targets: ['.bub'],
    translateX: [
        { value: -500, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
    ],
    // translateY: [
    //     { value: 40, duration: 500 },
    //     { value: 40, duration: 500, delay: 1000 },
    //     { value: 0, duration: 500, delay: 1000 }
    // ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
});
anime({
    targets: ['.bla'],
    translateX: [
        { value: 500, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
    ],
    // translateY: [
    //     { value: 40, duration: 500 },
    //     { value: 40, duration: 500, delay: 1000 },
    //     { value: 0, duration: 500, delay: 1000 }
    // ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
});



let timeDisplay = document.getElementById('time-display')
function showtime() {
    let time = new Date;
    let show = time.toLocaleTimeString()
    if (show >= "00:00:00 AM") {
        timeDisplay.innerText = "Good Morning"
    }
    if (show >= "12:00:00 PM") {
        timeDisplay.innerText = "Good Afternoon"
    }
    if (show >= "6:00:00 PM") {
        timeDisplay.innerText = "Good Evening"
    }

    console.log(show);
}
setInterval(showtime, 0);
let sideNav = document.getElementById('side-nav')
function come() {
    sideNav.style.transition = "0.5s"
    sideNav.style.transform = "translateX(-12.8px)"
    document.getElementById('twologo').hidden = false
    document.getElementById('onelogo').hidden = true
}
function out() {
    sideNav.style.transition = "0.5s"
    sideNav.style.transform = "translateX(-300px)"

    document.getElementById('twologo').hidden = true
    document.getElementById('onelogo').hidden = false
}