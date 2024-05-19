// changes by sneha **--- shorthand funstion ----**

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

// Shery.mouseFollower({
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

// changes by sohel **--- toggel-btn ----**

  const button = $(".button-three");

  button.addEventListener("click", () => {
    console.log("button clicked");
      const currentState = button.getAttribute("aria-expanded");
      if (currentState === "true") {
          button.setAttribute("aria-expanded", "false");
          $('#toggle-btn').style.transform = 'rotate(0deg)';
        } else {
        $('#toggle-btn').style.transform = 'rotate(45deg)';
          button.setAttribute("aria-expanded", "true");
      }
  });