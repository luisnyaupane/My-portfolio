const navbarslide = document.querySelector("#p3slide");
const goHome = document.querySelector(".myself");
const topDiv= document.querySelector(".about");
const About = document.querySelector(".aboutnav");
const projects=document.querySelector(".ProJects");
const projectIteam=document.querySelector(".projectpart");
const Resume=document.querySelector(".resume");
const Cv=document.querySelector(".CV");
const goToTop=document.querySelector("#top");

goToTop.addEventListener("click",()=>{
document.documentElement.scrollIntoView({behavior:"smooth",block:"start"});
});
projects.addEventListener("click",()=>{
projectIteam.classList.toggle("active");
projectIteam.scrollIntoView({behavior:"smooth"});
});
About.addEventListener("click", () => {
  goHome.classList.toggle("active");

  goHome.scrollIntoView({ behavior: "smooth" });
});

navbarslide.addEventListener("animationend", () => {
  navbarslide.style.display = "none";
});
Resume.addEventListener("click",()=>{
Cv.classList.toggle("active");
Cv.scrollIntoView({ behavior:"smooth"});
});