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
 const elementSize = canvasSize /10.5;
 game.font= elementSize +'px Verdana';
 game.position='end';

 for(let i =0; i<=9; i++){

    for(let j=0; j<=10; j++){
    game.fillText('💣',elementSize * i  ,elementSize * j);
    canvasSize = canvasSize - elementSize;
    console.log('elementSize ' + elementSize);
    console.log(canvasSize);
 }
}
game.fillText('💣',elementSize,elementSize);

}


