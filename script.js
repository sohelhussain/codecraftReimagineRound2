function name() {
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
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  name();
  
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  gsap.from("#box1 img", {
    opacity: 0,
    x: 500,
    duration: 1,
    scrollTrigger: {
      trigger: "#box1",
      scroller: "#main", // Adjusted to use LocomotiveScroll container
      markers: true,
      start: "top 100%",
    }
  });
  
  gsap.from("#box2 img", {
    opacity: 0,
    x: 500,
    duration: 1,
    scrollTrigger: {
      trigger: "#box2",
      scroller: "#main", // Adjusted to use LocomotiveScroll container
      markers: true,
      start: "top 50%",
      end:"top 30%",
      scrub: true 
    }
  });
  