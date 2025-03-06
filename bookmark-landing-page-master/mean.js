let navbarBars = document.getElementById("navbarBars");
let navbarMedio = document.getElementById("navbarMedio");
let MedioCLose = document.getElementById("MedioCLose");
let navbar = document.getElementById("navbar");
let page1 = document.getElementById("page1");
let page2  = document.getElementById("page2")
let page3 = document.getElementById("page3")
let featuresBlog1 =document.getElementById("featuresBlog1")
let featuresBlog2 = document.getElementById("featuresBlog2")
let featuresBlog3 = document.getElementById("featuresBlog3")
let quasion1 =  document.getElementById("quasion1");
let openAscet1 = document.getElementById("openAscet1");
let quasion2 =  document.getElementById("quasion2");
let openAscet2 = document.getElementById("openAscet2");
let quasion3 =  document.getElementById("quasion3");
let openAscet3 = document.getElementById("openAscet3");
let quasion4 =  document.getElementById("quasion4");
let openAscet4 = document.getElementById("openAscet4");
let quasion5 =  document.getElementById("quasion5");
let openAscet5 = document.getElementById("openAscet5");
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
page1.addEventListener('click' , function(){
    featuresBlog1.classList.add("openFeat");
    featuresBlog2.classList.add("closeFeat");
    featuresBlog3.classList.add("closeFeat");
    featuresBlog1.classList.remove("closeFeat");
    featuresBlog2.classList.remove("openFeat");
    featuresBlog3.classList.remove("openFeat");
    page1.style.borderBottom="3px solid #D1757A";
    page2.style.borderBottom="1px solid #a8a6a6";
    page3.style.borderBottom="1px solid #a8a6a6";
})
page2.addEventListener('click' , function(){
    featuresBlog2.classList.add("openFeat");
    featuresBlog3.classList.add("closeFeat");
    featuresBlog1.classList.add("closeFeat");
    featuresBlog1.classList.remove("openFeat");
    featuresBlog2.classList.remove("closeFeat");
    featuresBlog3.classList.remove("openFeat");
    page2.style.borderBottom="3px solid #D1757A";
    page1.style.borderBottom="1px solid #a8a6a6";
    page3.style.borderBottom="1px solid #a8a6a6";
})
page3.addEventListener('click' , function(){
    featuresBlog3.classList.add("openFeat");
    featuresBlog1.classList.add("closeFeat");
    featuresBlog2.classList.add("closeFeat");
    featuresBlog3.classList.remove("closeFeat");
    featuresBlog1.classList.remove("openFeat");
    featuresBlog2.classList.remove("openFeat");
    page3.style.borderBottom="3px solid #D1757A";
    page2.style.borderBottom="1px solid #a8a6a6";
    page1.style.borderBottom="1px solid #a8a6a6";
})
quasion1.addEventListener("click" , function(){
    quasion1.classList.toggle("quasion-and-ascet");
    openAscet1.classList.toggle("ascet-icon-rotate");
})
quasion2.addEventListener("click" , function(){
    quasion2.classList.toggle("quasion-and-ascet");
    openAscet2.classList.toggle("ascet-icon-rotate");
})
quasion3.addEventListener("click" , function(){
    quasion3.classList.toggle("quasion-and-ascet");
    openAscet3.classList.toggle("ascet-icon-rotate");
})
quasion4.addEventListener("click" , function(){
    quasion4.classList.toggle("quasion-and-ascet");
    openAscet4.classList.toggle("ascet-icon-rotate");
})
quasion5.addEventListener("click" , function(){
    quasion5.classList.toggle("quasion-and-ascet");
    openAscet5.classList.toggle("ascet-icon-rotate");
})