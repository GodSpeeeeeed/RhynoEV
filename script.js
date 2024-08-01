function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}


init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})
var ad = document.querySelectorAll("#nav-part3 h4")
var purple1 = document.querySelector("#purple1")
ad.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple1.style.display = "block"   
        purple1.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple1.style.display = "none"   
        purple1.style.opacity = "0"
    })
})

var add = document.querySelectorAll("#nav-part4 h4")
var purple2 = document.querySelector("#purple2")
add.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple2.style.display = "block"   
        purple2.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple2.style.display = "none"   
        purple2.style.opacity = "0"
    })
})
var addd = document.querySelectorAll("#nav-part5 h4")
var purple3 = document.querySelector("#purple3")
addd.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple3.style.display = "block"   
        purple3.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple3.style.display = "none"   
        purple3.style.opacity = "0"
    })
})
var adddd = document.querySelectorAll("#nav-part6 h4")
var purple4 = document.querySelector("#purple4")
adddd.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple4.style.display = "block"   
        purple4.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple4.style.display = "none"   
        purple4.style.opacity = "0"
    })
})

var addddd = document.querySelectorAll("#nav-part7 h4")
var purple5 = document.querySelector("#purple5")
addddd.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple5.style.display = "block"   
        purple5.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple5.style.display = "none"   
        purple5.style.opacity = "0"
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');

    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cell-visible');
            } else {
                entry.target.classList.remove('cell-visible');
            }
        });
    }, observerOptions);

    cells.forEach(cell => {
        observer.observe(cell);
    });
});

