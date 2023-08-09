let navul = document.querySelector(".shownav")
let menuButton = document.querySelector(".material-symbols-outlined")
const skillLevels = document.querySelectorAll(".skill-level");

menuButton.addEventListener("click", ()=>{
    navul.classList.toggle("show")
})

skillLevels.forEach((skillLevel) => {
  const width = skillLevel.style.width;
  skillLevel.style.width = "0";
  setTimeout(() => {
    skillLevel.style.width = width;
  }, 500); 
});