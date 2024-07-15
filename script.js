// changes by sohel **--- shorthand function ----**

const $$ = e => document.createElement(e);
const $ = e => document.querySelector(e);

const splitText = (element) => {
  const text = document.querySelector(element);
  let clutter = "";
  text.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  text.innerHTML = clutter;
};

// changes by saify **--- locomotive ----**


function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
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
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

locoScroll();

// Shery.mouseFollower({
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });



// code by sohel **--- hero text animation ----**


function clut(){
  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    images/1.jpg
    images/2.jpg
    images/3.jpg
    images/4.jpg
    images/5.jpg
    images/6.jpg
    images/7.jpg
    images/8.jpg
    images/9.jpg
    images/10.jpg
    images/11.jpg
    images/12.jpg
    images/13.jpg
    images/14.jpg
    images/15.jpg
    images/16.jpg
    images/17.jpg
    images/18.jpg
    images/19.jpg
    images/20.jpg
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#container-first>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#container-first",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `100% top`,
});
}
clut();



// code by sneha **--- nav bar ----**


function nav(){
  // Setup the timeline
const tl = gsap.timeline({ paused: true });
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

// Set initial states
gsap.set(spanBefore, { background: "#000" });
gsap.set(".menu", { visibility: "hidden" });

// Function to toggle the menu
function revealMenu() {
    revealMenuItems();

    const hamburger = document.getElementById("hamburger");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.onclick = function () {
        hamburger.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
}

// Function to reveal menu items
function revealMenuItems() {
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.to("#hamburger", {
        duration: 1.25,
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
    });

    tl.to("#hamburger span", {
        duration: 1,
        background: "#e2e2dc",
        ease: power2,
    }, "<");

    tl.to(spanBefore, {
        duration: 1,
        background: "#e2e2dc",
        ease: power2,
    }, "<");

    tl.to(".btn-outline", {
        duration: 1.25,
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #e2e2dc",
        ease: power4,
    }, "<");

    tl.to(path, {
        duration: 0.8,
        attr: { d: start },
        ease: power2,
    }).to(path, {
        duration: 0.8,
        attr: { d: end },
        ease: power2,
    }, "-=0.5");

    tl.to(".menu", {
        duration: 1,
        visibility: "visible",
    }, "-=0.5");

    tl.to(".menu-item > a", {
        duration: 1,
        top: 0,
        ease: "power3.out",
        stagger: { amount: 0.5 },
    }, "-=1").reverse();
}

// Initialize the menu reveal functionality
revealMenu();

}
nav();

// code by sohel **--- page1 animation ----**
//page 1 

gsap.to('.page1',{
  width: '100%',
  height: '100%',
  opacity: .1,
  scrollTrigger: {
    trigger: ".page1",
    scroller: "#main",
    start: "-20% top",
    end: "50% 0%",
    // markers: true,
    scrub: 1,
  },
})