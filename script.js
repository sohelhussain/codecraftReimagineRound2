// changes by sneha **--- shorthand funstion ----**

const $$ = e = document.createElement();
const $ = e = document.querySelector();

const splitText = (element) => {
  const text = document.querySelector(element);
  let clutter = "";
  text.textContent.split("").forEach((word) => {
    clutter += `<span>${word}</span>`;
  });
  text.innerHTML = clutter;
};

// changes by saify **--- shorthand funstion ----**


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

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

<<<<<<< HEAD
=======
// code by sneha
gsap.from("#main #content .text h1", {
  y: 200,
  opacity: 0,
  stagger: {
    amount: 1
  },
})


  const button = document.querySelector(".button-three");

  button.addEventListener("click", () => {
      const currentState = button.getAttribute("aria-expanded");

      if (currentState === "true") {
          button.setAttribute("aria-expanded", "false");
      } else {
          button.setAttribute("aria-expanded", "true");
      }
  });
>>>>>>> 85bf25ac1d57b018021b77685ef4f0df08895790
