const burger = document.querySelector("nav svg")

burger.addEventListener("click", () => {
    // alert("hello");
   if(burger.classList.contains("active")){
    gsap.to(".links", {x:"100%"});
   }else{
    gsap.to(".links",{x: "0%"});
   }
   burger.classList.toggle("active")
});