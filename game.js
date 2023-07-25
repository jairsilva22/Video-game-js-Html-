const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load',startGame);


function startGame(){
  
let canvasSize;

if(window.innerHeight>window.innerWidth){
    canvasSize= window.innerWidth * .80;
}else{
    canvasSize = window.innerHeight * .80;
}

 canvas.setAttribute('Width',canvasSize);
 
 canvas.setAttribute('Height',canvasSize);

 const elementSize = canvasSize /10;

 game.font= elementSize +'px Verdana';
 game.position='end';
 game.fillText('💣',elementSize,elementSize);



}


