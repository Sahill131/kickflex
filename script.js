gsap.to(".scroller",{
    x:"-280%",
    scrollTrigger:{
        trigger:".scroller",
        scroller:"body",
        start:"top 30%",
        end:"top -100%",
        scrub:5,
        pin:true
        

    }
})
gsap.to(".uii h1",{
    x:"-200%",
    repeat:-1,
    duration:8,


    ease: "none"

    
})

