
// Set interval

function loadingAnimation(){
    var tl = gsap.timeline()
    tl.from(".line h1",{
        y:150,
        stagger:0.3,
        duration:0.6,
        delay:0.5, 
    })
    tl.from("#line1-part1, .line h2",{
        opacity:0,
        onStart:function(){
            var h5timer = document.querySelector("#line1-part1 h5")
    var grow = 0
    setInterval(function(){
        if(grow<100){
            
            h5timer.innerHTML= grow++
        }else{
            
            h5timer.innerHTML= grow
        }
    
    },33);
        },
    });
    
    tl.to('.line h2',{
        animationName:"anime",
        opacity:1
    })
    
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:3.9,
        display:"none"
    });
    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.5,
        opacity:0
    
    });
    tl.from("#nav",{
        opacity:0
    });
    
    tl.from(".hero",{
        y:120,
        stagger:0.2
    })
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
          left:dets.x,
          top:dets.y
        })
      })
      
      Shery.makeMagnet("#nav-part2 h4",{});
}
loadingAnimation()
cursorAnimation();

