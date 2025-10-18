var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
var navLinks = document.querySelectorAll("#nav h4");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let section = null;
    const text = link.textContent.toLowerCase();

    
    if (text.includes("home")) section = "page1";
    else if (text.includes("about")) section = "about-us";
    else if (text.includes("offerings")) section = "cards-container";
    else if (text.includes("clients")) section = "clients";
    else if (text.includes("contact")) section = "contact";

    if (section) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  });
});
gsap.to(".clients-track", {
  x: "-50%",
  ease: "none",
  duration: 60,
  repeat: -1
});

