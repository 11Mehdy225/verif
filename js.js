//variables globales
let compteur = 0; //compteur qui permet de connaitre l'image affiché
let timer , elements , slides, slidesWidth; 


//charger le dom
window.onload = () => {



//recuperer le diapo
var diapo = document.querySelector(".diapo");

//recupere les elements
elements = document.querySelector(".elements");
console.log(elements);

//on clone la premiere image pour qu'on puisse revenir a elle a la fin 
let firstImage = elements.firstElementChild.cloneNode(true)

//on injecte le clone a la fin du diapo 
elements.appendChild(firstImage);

slides = Array.from(elements.children);
console.log(slides);

//on recupere la largeur d'une slide
slidesWidth = diapo.getBoundingClientRect().width;

//on recupere les fleches pour leur attribuer leurs fonction
let next = document.querySelector("#nav-droite");
let prev = document.querySelector("#nav-gauche");
//on gere le clic 
next.addEventListener("click",slideNext);
prev.addEventListener("click",slidePrev);

//on automatise le defilement 
timer=setInterval(slideNext,3000);

//une fonction qui fait defiler les elements

function slideNext(){ //fait defiler a droite
    //incrementer le compteur
    compteur++;
    //transition des elements
    elements.style.transition="1s linear";

    let decal = -slidesWidth * compteur ;
    elements.style.transform = `translateX(${decal}px)`;


      //on attend la fin pour rembobiner
 setTimeout(function() {
     if (compteur >= slides.length - 1) {
        compteur = 0 ;
        //on enleve la transition et on revient à 0
        elements.style.transition = "unset";
        elements.style.transform = "translateX(0)";
      }
   },2000);
}

function slidePrev () { //fait defiler a gauche
    //on decremente le compteur 
    compteur--;
    elements.style.transition="1s linear";

    if (compteur < 0) {
        compteur = slides.length -1 ;
        let decal = -slidesWidth * compteur ;
        elements.style.transition ="unset" ;
        elements.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev,1);
    }
    
    let decal = -slidesWidth * compteur ;
    elements.style.transform = `translateX(${decal}px)`;

}


// compte a rebours jusqu'a la ceremonie de lancement de la can 
//selectionne le receptacle du compte a rebours 
var  cpte = document.querySelector(".rebours");

function getChrono () {
    //recuperer la date du jour 
    var now = new Date().getTime();
    //la date de debut de la can 
    var countdownDate = new Date('january 13, 2024').getTime();

    var distanceBase =countdownDate - now ;

    var days = Math.floor(distanceBase/(1000*60*60*24));
    var hours = Math.floor((distanceBase % (1000*60*60*24)) / (1000*60*60) );
    var minutes = Math.floor((distanceBase % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distanceBase % (1000*60)) / 1000);

    cpte.innerText = `H- ${days}j ${hours}h ${minutes}m ${seconds}s`;
    console.log(cpte);
}
    getChrono()
        
        var  countDownInterval = setInterval(() => {
        getChrono()

            },1000);

}