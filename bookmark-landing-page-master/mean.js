let navbarBars = document.getElementById("navbarBars");
let navbarMedio = document.getElementById("navbarMedio");
let MedioCLose = document.getElementById("MedioCLose");
navbarBars.addEventListener('click' , function(){
    navbarMedio.style.top="0";
    navbarBars.classList.add("openMed")
})
MedioCLose.addEventListener('click' , function(){
    navbarMedio.style.top="-100%";
    navbarBars.classList.remove("openMed")
})