const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const box = document.querySelector(".box");

var isParagraphShown = false;

menuBar.addEventListener("click",()=>{
    menuNav.classList.toggle("menu-active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    const windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
});

function showParagraf(){
    var paragraph = document.getElementById("hidden-paragraph");
    if(isParagraphShown){
        paragraph.style.display = "none";
        isParagraphShown = false;
    } else{
        paragraph.style.display = "block";
        isParagraphShown = true;
    }
}
