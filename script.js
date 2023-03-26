
const flip=document.querySelector(".flip");
const reset=document.querySelector(".reset");
const imgs = document.querySelector(".imgs");
const coin = new Audio("sound.mp4");

const faceS = document.querySelector(".face")
const backS = document.querySelector(".back");
let headS = tailS = 0;
initialisation();


flip.addEventListener("click", ()=>{
    let i= (Math.floor(Math.random()*2)+1);
    imgs.style.animation = "none";
    setTimeout(coin.play(),3000);   // to play sound

if (i==1){
    setTimeout(function(){
        imgs.style.animation = 'spin-head 4s forwards';
    },100);
    headS++;
}else if(i==2) {
    setTimeout (function() {
        imgs.style.animation = 'spin-tail 4s forwards';
    },100);
    tailS++;
}
setTimeout(updateStats,3000);
disableBtn();
})

reset.addEventListener("click",()=>{
    headS = 0;
    tailS = 0;
    initialisation();
})

function initialisation(){
    faceS.innerHTML = "Heads: " + headS;
    backS.innerHTML = "Tails: " + tailS;
}
function updateStats(){
    faceS.innerHTML="Heads: " + headS;
    backS.innerHTML= "Tails:"+tailS;
}

function disableBtn(){
    flip.disabled = true ;
    setTimeout(function() {
        flip.disabled = false;
    },3000);
}