// changes by sohel **--- shorthand function ----**

const $$ = (e) => document.createElement(e);
const $ = (e) => document.querySelector(e);

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
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

locoScroll();

const loader = (e) => {
  function clutterAnimation(element) {
    const htmlTag = document.querySelector(element);
    let clutter = "";
    htmlTag.textContent.split("").forEach((word) => {
      clutter += `<span class="inline-block">${word}</span>`;
    });
    htmlTag.innerHTML = clutter;
  }
  clutterAnimation(".l-text>h1");

  const tl = gsap.timeline();
  tl.from(
    ".l-text>h1>span",
    {
      y: 150,
      stagger: {
        amount: -1.5,
        from: "center",
      },
    },
    "a"
  );

  tl.from(
    ".loader-img",
    {
      height: "0",
      width: "0",
      delay: 0.5,
    },
    "a"
  );

  tl.to(
    ".loader-img",
    {
      width: "65vh",
      height: "40vh",
    },
    "b"
  );

  tl.to(
    ".l-img2",
    {
      opacity: 1,
    },
    "b"
  );

  tl.to(
    ".loader-img",
    {
      width: "35vh",
      height: "45vh",
      delay: 0.5,
    },
    "c"
  );

  tl.to(
    ".l-img3",
    {
      opacity: 1,
      delay: 0.4,
    },
    "c"
  );

  tl.to(
    ".loader-img",
    {
      height: "55vh",
      width: "45vh",
      delay: 0.5,
    },
    "d"
  );

  tl.to(
    ".loader-overlay",
    {
      opacity: 1,
      delay: 0.4,
    },
    "d"
  );

  tl.to(
    ".loader-overlay,.l-img3,.l-img2,.l-img1",
    {
      opacity: 0,
      delay: -0.2,
      duration: 0.2,
    },
    "e"
  );

  tl.to(
    ".loader-img",
    {
      height: "100vh",
      width: "100%",
    },
    "f"
  );

  tl.to(
    ".l-text>h1>span",
    {
      y: -170,
      stagger: {
        amount: -0.1,
        from: "center",
      },
    },
    "f"
  );
  tl.to(".loader-img", {
    opacity: 0,
  });

  tl.to(
    ".loader",
    {
      opacity: 0,
      delay: 0.4,
    },
    "f"
  );
};
loader();

// Shery.mouseFollower({
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

// code by sohel **--- hero text animation ----**

function clut() {
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

const constFirtst = (e) => {
  splitText(".win");
  gsap.to(".win>span", {
    opacity: 1,
    stagger: {
      amount: 1,
    },
    scrollTrigger: {
      trigger: "#container-first",
      scroller: "#main",
      start: "-.2% 0%",
      end: "100% 0%",
      scrub: 1,
      // pin:true,
      markers: true,
    },
  });
};
constFirtst();

// code by sneha **--- page1 animation ----**

const page1 = (e) => {
  function sheryEffect() {
    Shery.imageEffect("#img-container", {
      style: 2, //Select Style,
      gooey: true,
      // debug: true,
      config: {
        resolutionXY: { value: 100 },
        distortion: { value: true },
        mode: { value: -10 },
        mousemove: { value: 0 },
        modeA: { value: 1 },
        modeN: { value: 0 },
        speed: { value: 1, range: [-500, 500], rangep: [-10, 10] },
        frequency: { value: 50, range: [-800, 800], rangep: [-50, 50] },
        angle: { value: 0.5, range: [0, 3.141592653589793] },
        waveFactor: { value: 1.4, range: [-3, 3] },
        color: { value: 10212607 },
        pixelStrength: { value: 3, range: [-20, 100], rangep: [-20, 20] },
        quality: { value: 5, range: [0, 10] },
        contrast: { value: 1, range: [-25, 25] },
        brightness: { value: 1, range: [-1, 25] },
        colorExposer: { value: 0.18, range: [-5, 5] },
        strength: { value: 0.2, range: [-40, 40], rangep: [-5, 5] },
        exposer: { value: 8, range: [-100, 100] },
        zindex: { value: 999 },
        aspect: { value: 1.5472401939960634 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.37, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 0 },
        noise_speed: { value: 0.84, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 8 } },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
      },
    });
  }
  sheryEffect();

  document.addEventListener("DOMContentLoaded", function () {
    var elem1 = document.querySelectorAll(".elem");
    var imgs = document.querySelectorAll("#img-container img");

    elem1.forEach(function (elem) {
      var h2s = elem.querySelectorAll("h2");
      imgs.forEach(function (img) {
        var index = 0;
        img.addEventListener("click", function () {
          gsap.to(h2s[index], {
            top: "-=100%",
            ease: "power3.out",
            duration: 1,
            onComplete: function () {
              gsap.set(this._targets[0], { top: "100%" });
            },
          });
          index === h2s.length - 1 ? (index = 0) : index++;

          gsap.to(h2s[index], {
            top: "-=100%",
            ease: "power3.out",
            duration: 1,
          });
        });
      });
    });
  });
};
page1();

// code by sneha **--- nav bar ----**

const navbar = (e) => {
  const button = $(".button-three");

  const tim = gsap.timeline();

  let flage = true;
  button.addEventListener("click", (e) => {
    if (flage) {
      tim.to("nav", {
        width: "100%",
        height: "100%",
        top: "0%",
        left: "0%",
        borderRadius: "0%",
        ease: "power2.inOut",
      });
      tim.to(".upp-box>h1", {
        opacity: 1,
        y: "0%",
        esae: "power4.inOut",
      });
      flage = false;
    } else {
      tim.to(".upp-box>h1", {
        y: "-100%",
        opacity: 0,
        esae: "power4.inOut",
      });
      tim.to("nav", {
        width: "0%",
        height: "0%",
        top: "130%",
        left: "-30%",
        borderRadius: "100%",
        ease: "power2.inOut",
      });
      flage = true;
    }
  });

  button.addEventListener("click", () => {
    const currentState = button.getAttribute("aria-expanded");
    if (currentState === "true") {
      button.setAttribute("aria-expanded", "false");
      $("#toggle-btn").style.transform = "rotate(0deg)";
    } else {
      $("#toggle-btn").style.transform = "rotate(45deg)";
      button.setAttribute("aria-expanded", "true");
    }
  });

  function skill() {
    var txt = document.querySelectorAll(".nav-hed");
    txt.forEach(function (h2) {
      var clutter2 = "";
      h2.textContent.split("").forEach(function (letter) {
        clutter2 += `<span>${letter}</span>`;
      });
      h2.innerHTML = clutter2;

      h2.addEventListener("mousemove", function () {
        gsap.to("nav", {
          backgroundColor: "rgb(18, 18, 18)",
          duration: 0.3,
        });
      });
      h2.addEventListener("mouseleave", function () {
        gsap.to("nav", {
          backgroundColor: "aliceblue",
          duration: 0.3,
        });
      });
    });
  }
  skill();
};

navbar();

// code by sohel **--- page1 animation ----**
//page 1

// gsap.to("#leftpart", {
//    display: "block",
//   scrollTrigger: {
//     trigger: ".page1",
//     scroller: "#main",
//     start: "40% top",
//     end: "100% 0%",
//     markers: true,
//     scrub: 1,
//   },
// });

// code by sohel **--- page2 video animation ----**
//page 2

gsap.to(".video-box", {
  width: "100%",
  scrollTrigger: {
    // trigger: "#container-second",
    scroller: "#main",
    start: "200% 70%",
    end: "200% 0%",
    // markers: true,
    scrub: 1,
  },
});

// code by sohel **--- page3 partical-line animation ----**
//page 3

const makeParticals = (e) => {
  const canvas = document.querySelector("#make-partical");
  const ctx = canvas.getContext("2d");
  const responsive = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  responsive();
  const particleArray = [];
  let hue = 40;
  window.addEventListener("resize", () => {
    responsive();
    // drawCircles();
  });
  const mouse = {
    x: undefined,
    y: undefined,
  };
  canvas.addEventListener("click", (c) => {
    mouse.x = c.clientX;
    mouse.y = c.clientY;
    // drawCircles();
  });
  canvas.addEventListener("mousemove", (c) => {
    mouse.x = c.clientX;
    mouse.y = c.clientY;
    // drawCircles();
    for (let i = 0; i < 1; i++) {
      particleArray.push(new particle());
    }
  });
  // const drawCircles = () => {
  //     ctx.fillStyle = 'greenyellow';
  // ctx.beginPath();
  // ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
  // ctx.fill();
  // };

  class particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 10 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `hsl( ${hue}, 100%, 50% )`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.2;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // const init = () => {
  //     for (let i = 0; i < 100; i++) {
  //         particleArray.push(new particle());
  //     }
  // };
  // init();

  const handleParticles = () => {
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
      particleArray[i].draw();
      for (let j = 0; j < particleArray.length; j++) {
        const dx = particleArray[i].x - particleArray[j].x;
        const dy = particleArray[i].y - particleArray[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particleArray[i].color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particleArray[i].x, particleArray[i].y);
          ctx.lineTo(particleArray[j].x, particleArray[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      if (particleArray[i] <= 0.3) {
        particleArray.splice(i, 1);
        console.log(particleArray.length);
        i--;
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue += 0.5;
    requestAnimationFrame(animate);
  };
  animate();
};
// makeParticals();

// code by harsh **--- swipper animation ----**


function swipper() {
  var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
swipper();

