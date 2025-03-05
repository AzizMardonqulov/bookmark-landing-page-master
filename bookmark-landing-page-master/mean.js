let navbarBars = document.getElementById("navbarBars");
let navbarMedio = document.getElementById("navbarMedio");
let MedioCLose = document.getElementById("MedioCLose");
let navbar = document.getElementById("navbar");
navbarBars.addEventListener('click' , function(){
    navbarMedio.style.top="0";
    navbarBars.classList.add("openMed")
})
MedioCLose.addEventListener('click' , function(){
    navbarMedio.style.top="-100%";
    navbarBars.classList.remove("openMed")
})
window.addEventListener('scroll' , function(){
    if(window.scrollY > 0){
        navbar.classList.add("scrollNavbar")
    }else{
        navbar.classList.remove("scrollNavbar")
    }
})