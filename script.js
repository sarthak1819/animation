
let tl =gsap.timeline()
tl.from("#front-page",{
    y:1000,
    duration:1,
    ease: "power4.out"

    
})
tl.from("#coffee-can",{
    y:900,
    duration:1,
    scale:1,
    //  ease: "back.out(1.7)"
   
})
tl.from("#front-page h1",{
    y:800,
    duration:1,
    // ease: "power2.out"
})


// tl.from("#front h1",{
//     y:900,
//     duration:1,
//     scale:2,
//     opacity: 0
   
// })
tl.from("#coffee-b1",{
    y:100,
   scale:2,
   duration:0.4,
   opacity: 0
    
   
})
tl.from("#coffee-b2",{
    y:100,
   scale:2,
   duration:0.4,
   opacity: 0
   
})
tl.from("#coffee-b3",{
     y:100,
   scale:2,
   duration:0.4,
   opacity: 0
   
})
tl.from("#coffee-b4",{
    y:100,
   scale:2,
   duration:0.4,
   opacity: 0
   
})
tl.from("#coffee-b5",{
     y:100,
   scale:2,
   duration:0.4,
   opacity: 0
})

// moving the coffee can to down side
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
       
        start:"0% 85%",
        end:"50% 50%"
        
    }
})

tl2.to("#coffee-can",{
    left: 30,
    top: 683,
    scale:0.9
},"join")
tl2.to("#coffee-b3",{
left: 222,
top: 1001,
rotate:"360deg"
    
},"join")

tl2.to("#coffee-b4",{
left: -12,
top: 1001,
rotate:"120deg"
    
},"join")
//menu page
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
       
        start:"0% 85%",
        end:"50% 50%"
        
    }
})

tl3.to("#coffee-can",{
    top: 1304,
    left: 516,
    scale:1.1,
    duration:1
    // zIndex: 5
},"join")
tl3.to("#coffee-b3",{
top: 1304,
left: 692,
rotate:"225deg",
ease: "sine.inOut"
 
},"join")
//can 1 accessing 
tl3.from("#can1",{
    x:-100,
    duration:1
},"join")
tl3.from("#bean",{
   rotate:"90deg",
    x:-100,
    duration:1
},"join")




//can 2
tl3.from("#can2",{
    x:100,
    duration:1
},"join")
tl3.from("#lemon",{
    x:-100,
    duration:1,
    rotate:"360deg",
    
},"join")


//contact page
let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
       
        start:"0% 85%",
        end:"50% 50%"
        
    }
})
tl4.to("#coffee-can",{
    top: 2020,
    left: 783,
    scale:1,
    duration:1
},"join")
tl4.to("#bean",{
   rotate:"36deg",
    top: 217,
    left: 767,
    duration:1
},"join")

tl4.to("#can1",{
    top: 645,
    left: 582,
    rotate:"-5deg",
    duration:1,
    scale:1
},"join")
tl4.to("#can2",{
    top: 695,
    left: 57,
    rotate:"6deg",
    duration:1,
    scale:1
},"join")

// floating code
// gsap.to("#coffee-b1, #coffee-b2, #coffee-b3, #coffee-b4, #coffee-b5", {
//   y: "-10",
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
  
// });
