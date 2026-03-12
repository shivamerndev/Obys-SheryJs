let nows = document.querySelector(".line3 span")
let counter = document.querySelector(".spandiv span")
let crsr = document.querySelector("#crsr")
let playvideo = document.querySelector("#play_video")
let vidsec = document.querySelector(".video_section")
let circle = document.querySelector(".big_arr_circle")
let play = document.querySelector(".button__play-icon")
let pause = document.querySelector(".button__pause-icon")
let video = document.querySelector(".video_section video")
let tl = gsap.timeline()

function loader() {

    function nowspan() {
        let swich = 1;
        setInterval(function () {
            if (swich == 1) {
                nows.style.display = "block"
                nows.style.color = "white"
                nows.style.fontFamily = "Plain Regular";
                swich = 0;
            } else {
                nows.style.color = "transparent"
                nows.style.fontFamily = "Silk Serif"
                nows.style.display = "block"

                swich = 1;
            }
        }, 600);
    }

    tl.from("#loader h1", {
        transform: "translatey(100%)",
        stagger: 0.3,
        onStart: function () {
            nowspan();
            timer = 0;
            let time = setInterval(function () {
                if (timer < 100) {
                    timer++
                } else {
                    clearInterval()
                }
                counter.textContent = timer;
            }, 35);
        },
    })
    tl.to("#loader", {
        opacity: 0,
        display: "none",
        duration: 2,
        delay: 1.5
    });
    tl.from(".page1", {
        y: 1000,
        duration: 0.5,
        ease: Power4,
    })
    tl.from(".texts h1", {
        y: 120,
        // duration: 0.5,
        stagger: 0.1,
        ease: Power4
    })
    gsap.from(".heading3 h1", {
        y: 200,
        duration: 1,
        opacity: 0
    })
    tl.from("nav", {
        opacity: 0,
    })


}

function crsrmagnet() {
    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px"
        crsr.style.top = dets.y + "px"
    });

    Shery.makeMagnet("nav h1,i");
}

function playbtn() {
    vidsec.addEventListener("mousemove", function (dets) {
        crsr.style.display = "none"
        gsap.to("#play_video", {
            left: dets.x - 500,
            top: dets.y - 200
        })
    })
    vidsec.addEventListener("mouseleave", function () {
        crsr.style.display = "block"
        gsap.to("#play_video", {
            left: "67%",
            top: "-15%"
        })
    });

    let swich = 1;
    vidsec.addEventListener("click", function () {
        if(swich == 1){
            play.style.display="none"
            pause.style.display="inline"
            video.play();
            swich=0;
        }else{
            play.style.display="inline"
            pause.style.display="none"
            video.pause();
            swich=1;
        }
    });


}

function locomotive() {
    let main = document.querySelector("#main");
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: main,
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: main.style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function Sheryanimation() {
    Shery.imageEffect(".image", {
        style: 6,
        config: { "noiseDetail": { "value": 7.44, "range": [0, 100] }, "distortionAmount": { "value": 2.98, "range": [0, 10] }, "scale": { "value": 36.36, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": "9", "range": [-9999999, 9999999] }, "aspect": { "value": 0.8576423993614387 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 0.1, "range": [0.1, 5] }, "durationIn": { "value": 0.1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.18, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.84, "range": [0, 10] }, "metaball": { "value": 0.4, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    });
}

function circleanimation() {
    circle.addEventListener("mouseenter", function () {
        tl.to(".white_circle", {
            scale: 1,
            display: "block",
            duration: .3
        })
        tl.to(".white_circle p", {
            opacity: 1,
            scale: 1,
            duration: .2
        })
    })
    circle.addEventListener("mouseleave", function () {
        tl.to(".white_circle", {
            scale: 0,
            display: "none",
            duration: .3
        })
        tl.to(".white_circle p", {
            opacity: 0,
            scale: 0,
            duration: .1
        })
    });
}

function line3animation(){
    let line3 = document.querySelector(".h1line3")
    let line3img = document.querySelector("#horizontal_hover_rect")
    
    line3.addEventListener("mouseenter",function(){
        line3.addEventListener("mousemove",function(dets){
            line3img.style.display='block'
            gsap.to("#horizontal_hover_rect",{
                left:dets.x - 100,
                top:dets.y - 50
            })
        })
    })
    line3.addEventListener("mouseleave",function(){
            line3img.style.display='none'
            line3img.style.top='50%'
            line3img.style.left='20%'
        })
}


line3animation()



loader()

// crsrmagnet()

playbtn()

locomotive()

Sheryanimation()

circleanimation()
