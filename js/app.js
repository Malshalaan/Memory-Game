/*
 * Create a list that holds all of your cards
 */
 let element = document.querySelector(".deck");
 let frag = document.createDocumentFragment();
 let cards = ['fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-anchor','fa fa-leaf','fa fa-bicycle','fa fa-diamond','fa fa-bomb','fa fa-leaf','fa fa-bomb','fa fa-bolt','fa fa-bicycle','fa fa-paper-plane-o','fa fa-cube'];
 var second = 0, minute = 0;
 const timer = document.querySelector(".timer");
 var interval;
var StarsNumber = 0;
var openIcons = 0;

 for (let i= 0; i < 16; i++){
   let li = document.createElement('li');
   li.setAttribute( 'class','card' );
   frag.appendChild(li);
   let ielement = document.createElement('i');
   ielement.setAttribute( 'class',cards[i] );
   li.appendChild(ielement);}
   element.appendChild(frag);
//restart modal
document.querySelector(".restart").addEventListener('click', function(){
  startGame();
});
  //* Display the cards on the page
 const deck = document.querySelector(".deck");

 function startGame(){
    let shuffledCards = shuffle(AllCards);
    for (var i= 0; i < shuffledCards.length; i++){
       [].forEach.call(shuffledCards, function(item){
        item.classList.remove("open", "show","match");
          deck.appendChild(item);
       });
    }
    moves = 0;

    movcounter.innerText= moves;
    StarsRating();
        second = 0;
        minute = 0;
        hour = 0;
    clearInterval(interval);
    setTimer();

 }

 let AllCard = document.getElementsByClassName("card");
 let AllCards = [...AllCard];
 let moves = 0 ;
 var opencards = [] ;
 let movcounter = document.querySelector(".moves");


window.onload = startGame();

AllCards.forEach(function(card){

  card.addEventListener('click', function(){
  if(!card.classList.contains("open") && !card.classList.contains("show") && !card.classList.contains("match") && opencards.length < 2){
  opencards.push(card);
  card.classList.add("open", "show");

   if (opencards.length == 2){
//match
     if(opencards[0].getElementsByTagName('i')[0].className == opencards[1].getElementsByTagName('i')[0].className ){
        opencards[0].classList.add("match");
        opencards[0].classList.add("open");
        opencards[0].classList.add("show");

        opencards[1].classList.add("match");
        opencards[1].classList.add("open");
        opencards[1].classList.add("show");
        opencards = [];
        openIcons = openIcons + 2 ;
        Congratulations();
     }

    else {
     //not match
     setTimeout(function(){
      opencards.forEach(function(card){
        card.classList.remove("open", "show");
      }) ;
      opencards = [];
    },700);}
    moves++;
    movcounter.innerText = moves ;
    StarsRating();
   }
 }

});
});



function StarsRating(){
  let stars = document.querySelector(".stars");
  let fragment = document.createDocumentFragment();
if(moves < 10 ){
  if(StarsNumber != 5){
    var looplength ;
    if(StarsNumber == 0){
      looplength = 5;
    }
    if(StarsNumber == 3){
      looplength = 2;
    }
    if(StarsNumber == 1){
      looplength = 4;
    }
  StarsNumber = 5;
console.log(looplength);
  for(let i=0; i < looplength ;i++){
    let li = document.createElement("li");
    fragment.appendChild(li);
    let ielement = document.createElement("i");
    ielement.setAttribute( "class","fa fa-star");
    li.appendChild(ielement);}}
}
else if (moves >= 10 && moves < 17){
  if(StarsNumber != 3){
  StarsNumber = 3;
  for(let i=0; i<2 ;i++){
stars.getElementsByTagName('li')[0].remove();
    }
}}
else {
  if(StarsNumber != 1){
  StarsNumber = 1;
  for(let i=0; i<2 ;i++){
stars.getElementsByTagName('li')[0].remove();
    }

}}
      stars.appendChild(fragment);

}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function setTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}
const WinModal = document.querySelector("#WinModal");
const closeWin = document.querySelector(".close");

function Congratulations() {
 if (openIcons == cards.length) {
    clearInterval(interval);
    WinModal.classList.add("show");
    document.querySelector("#moves").innerHTML = moves;
    document.querySelector("#time").innerHTML = minute+" mins " +second+" secs";
    document.querySelector("#stars").innerHTML = document.querySelector(".stars").innerHTML;
    closeModal();
}
}

function closeModal() {
  closeWin.addEventListener("click", function() {
  WinModal.classList.remove("show");
    startGame();
  });
}

function playagain() {
 WinModal.classList.remove("show");
  startGame();
}
