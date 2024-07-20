// changes by sohel **--- shorthand function ----**

const $$ = (e) => document.createElement(e);
const $ = (e) => document.querySelector(e);

// const splitText = (element) => {
//   const text = document.querySelector(element);
//   let clutter = "";
//   text.textContent.split("").forEach((word) => {
//     clutter += `<span>${word}</span>`;
//   });
//   text.innerHTML = clutter;
// };

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


const loader = e => {

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
  
  
  
}
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
          duration: .3,
        });
      });
      h2.addEventListener("mouseleave", function () {
        gsap.to("nav", {
          backgroundColor: "aliceblue",
          duration: .3,
        });
      });
    });
  }
  skill();
};

navbar();

// code by sohel **--- page1 animation ----**
//page 1

gsap.to(".page1", {
  width: "100%",
  height: "100%",
  opacity: 0.1,
  scrollTrigger: {
    trigger: ".page1",
    scroller: "#main",
    start: "-20% top",
    end: "50% 0%",
    markers: true,
    // scrub: 1,
  },
});


// code by sohel **--- page2 video animation ----**
//page 2


gsap.to(".video-box", {
  width: "100%",
  scrollTrigger: {
    trigger: "#conatainer-second",
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
makeParticals();

const forth = e => {
  var tl = gsap.timeline({scrollTrigger : {
    trigger : "#main",
    start : "38% 50%",
    end : "100% 50%",
    pin : true, 
    scrub : 2
}})

tl
.to("#text", {
    top : "-7%"
}, "a")

.to("#cardone", {
    top : "35%"
}, "a")

.to("#cardsec", {
    top : "100%"
}, "a")




.to("#cardsec", {
    top : "42%"
}, "b")

.to("#cardone", {
    width : "65%",
    height : "65vh"
}, "b")

.to("#cardthird", {
    top : "100%"
}, "b")




.to("#cardsec", {
    width : "70%",
    height : "70vh"
}, "c")

.to("#cardthird", {
    top : "50%"
}, "c")

}
// forth()

const containerThird = e => {
  const t1 = gsap.timeline();
  t1.to(
    ".page2-elem1",
    1,
    {
      y: 190,
      scrollTrigger: {
        scroller: "#main",
        trigger: ".page2-elem1",
        start: "top 40%", // Adjust this value based on your layout
        end: "top 10%",
        //   pin: true,
        scrub: 1,
          markers: true,
      },
    },
    0
  );
  
  t1.to(
    ".page2-elem2",
    1,
    {
      x: 190,
      scrollTrigger: {
        scroller: "#main",
        trigger: ".page2-elem1",
        start: "top 50%", // Adjust this value based on your layout
        end: "top 10%",
        //   pin: true,
        scrub: 1,
          markers: true,
      },
    },
    0
  );
  
  t1.to(
    ".page2-elem4",
    1,
    {
      x: -190,
      scrollTrigger: {
        scroller: "#main",
        trigger: ".page2-elem1",
        start: "top 50%", // Adjust this value based on your layout
        end: "top 10%",
        //   pin: true,
        scrub: 1,
          markers: true,
      },
    },
    0
  );
  
  t1.to(
    ".page2-elem5,.page2-elem6",
    1,
    {
      y: -190,
      scrollTrigger: {
        scroller: "#main",
        trigger: ".page2-elem1",
        start: "top 50%", // Adjust this value based on your layout
        end: "top 10%",
        //   pin: true,
        scrub: 1,
          markers: true,
      },
    },
    0
  );
  
  t1.form(
    ".page2-elem3",
  
    {
      height: "100vh",
      width: "100vw",
      scrollTrigger: {
        scroller: "#main",
        trigger: ".page2",
        start: "top 0%", // Adjust this value based on your layout
        end: "top -100%",
        pin: true,
        scrub: 1,
        markers: true,
      },
    }
  );
}
// containerThird();

const containerFore = e => {
  var tl = gsap.timeline({scrollTrigger : {
    trigger : "#container-fore",
    start : "38% 50%",
    end : "100% 50%",
    pin : true, 
    scrub : 2
}})

tl
.to("#text", {
    top : "-7%"
}, "a")

.to("#cardone", {
    top : "35%"
}, "a")

.to("#cardsec", {
    top : "100%"
}, "a")




.to("#cardsec", {
    top : "42%"
}, "b")

.to("#cardone", {
    width : "65%",
    height : "65vh"
}, "b")

.to("#cardthird", {
    top : "100%"
}, "b")




.to("#cardsec", {
    width : "70%",
    height : "70vh"
}, "c")

.to("#cardthird", {
    top : "50%"
}, "c")
}
containerFore();