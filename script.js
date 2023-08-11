const burger = document.querySelector("nav svg")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")

//    if(burger.classList.contains("active")){
    // alert("hello");
    // gsap.to(".links", {x:"100%"});
//     links.x = "100%"
//    }else{
//     links.x = "0%"
//    }
if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "0%" });
    // alert("hello");
  } else {
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }
  burger.classList.toggle("active");
});