
gsap.to(".page .textwrapper",{
    marginLeft: "-200%",
    delay:1,
    ease:2,
    scrollTrigger: {
        trigger: ".page  h1",
        start: "top top",
        end: "+= 500%",
        scrub: true,
        pin: true   
    }
})