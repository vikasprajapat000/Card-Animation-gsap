// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".page1 .textwrapper", {
//     x: "-100%",
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".page1",
//         start: "top top",
//         end: "+=500",
//         scrub: true,
//         pin: true,
//         markers: false
//     }
// });
// gsap.to(".page2 .textwrapper", {
//     x: "-100%",
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".page2",
//         start: "top top",
//         end: "+=500",
//         scrub: true,
//         pin: true,
//         markers: false
//     }
// });
// gsap.to(".page3 .textwrapper", {
//     x: "-100%",
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".page3",
//         start: "top top",
//         end: "+=500",
//         scrub: true,
//         pin: true,
//         markers: false
//     }
// });

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "+=500",
        scrub: 2,
        //markers: true,
        pin: true
    }
})
tl.to(".card1", {
    bottom: "10%"
},)
tl.to(".card2", {
    bottom: "10%"
},)
tl.to(".card3", {
    bottom: "10%"
},)
tl.to(".card4", {
    bottom: "10%"
},)


let h1 = document.querySelector(".VIKASPRAJAPAT")
let cluster = ""
h1.textContent.split("").forEach(char => {
    clutter+= `<span>${char}</span>`
});
h1.innerHTML = clutter
