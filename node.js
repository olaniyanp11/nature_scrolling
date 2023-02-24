var box = document.querySelector(".me")
const t3 = gsap.timeline({
    scrollTrigger: {
        yPercent: -100,
        trigger: ".page1",
        start: 'top top',
        scrub: true,
       
        toggleActions: "restart pause resume pause",
        pin: true
    }
});



// t2 for page
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scrub: true,
        start: 'top',
        x: -20,
        toggleActions: "restart pause resume pause",

        pin: true
    }
});
const t = true;
t3.to(".mount", {
    duration: 30,
    x: -2000,
    scaleY: 1.2,
    
})




// 
const t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scrub: true,
        start: 'top',
        x: -20,
        toggleActions: "restart pause resume pause",
        pin: true
    }
});

t3.to(".me", {
    duration: 20,
    x: -500,
    pin: true
})
const t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scrub: true,
        start: 'top',
        x: -20,
        toggleActions: "restart pause resume pause",
        pin: true
    }
});

t5.to(".page1", {
    duration: 10,
    scale: 1.0
})
// button
var shown = document.getElementById("shown")
var navs = document.querySelector(".nav2")
var navs2 = document.querySelector(".nav2::after")
function show() {
    shown.classList.toggle("display");
    navs.classList.toggle("play");
    navs2.classList.toggle("play");
    console.log("hello");
}
// 
t2.to(".main", {
    duration: 20,
    scale: 1.1,
    y: 500,
    opacity: 0,
    pin: true,
    zindex: 2,

})