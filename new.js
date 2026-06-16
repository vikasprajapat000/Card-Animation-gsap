let kuchbhi = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "+=500",
        scrub: 2,
        pin: true,
        markers: true,
    }
})
kuchbhi.to(".card1", {
    bottom: "10%"
})

kuchbhi.to(".card2", {
    bottom: "10%"
})

kuchbhi.to(".card3", {
    bottom: "10%"
})

kuchbhi.to(".card4", {
    bottom: "10%"
})