let squars =document.getElementsByClassName('square');
let currentturn='x';
let boarsArr= [ 
      "0","1","2",
      "3","4","5",
      "6","7","8"
]
let gameIsFinished=false;
console.log(squars);
for (const square of squars){
 
  square.addEventListener('click',function(){
    if (gameIsFinished)
    {
        return 
    }
    let value=square.getAttribute("value");
    let index=value-1;
    if (boarsArr[index] == 'x' || boarsArr[index] == 'o'){
      return;
    }
    console.log(value);
    
    let squarecontent=document.querySelector(`.square[value="${value}"]`);
    console.log(squarecontent); //div 
    squarecontent.innerHTML=currentturn;
    boarsArr[index]=currentturn;
   
    evaluate_winner()
    if (currentturn == 'x'){
      currentturn='o';
    }
    else {
      currentturn='x';
    }
    document.getElementById('instruction').textContent=`${currentturn}  Turn`;
  })
  function evaluate_winner(){
    if (
     // rows
     (boarsArr[0] == boarsArr[1] && boarsArr[1] == boarsArr[2]) ||
       (boarsArr[3] == boarsArr[4] && boarsArr[4] == boarsArr[5]) ||
       (boarsArr[6] == boarsArr[7] && boarsArr[7] == boarsArr[8]) ||
     // columns 
     (boarsArr[0] == boarsArr[3] && boarsArr[3] == boarsArr[6]) ||
       (boarsArr[1] == boarsArr[4] && boarsArr[4] == boarsArr[7]) ||
       (boarsArr[2] == boarsArr[5] && boarsArr[5] == boarsArr[8]) ||
    // diagonals 
    (boarsArr[0] == boarsArr[4] && boarsArr[4] == boarsArr[8]) ||
    (boarsArr[2] == boarsArr[4] && boarsArr[4] == boarsArr[6])
    ){
      gameIsFinished=true;
      var winner= currentturn == 'o'? 'o':'x';
      alertify.alert(`${winner} Won !`);    
    }
    var isDraw=true;
    for (squ of boarsArr){
      if (squ != 'x' && squ != 'o'){
        isDraw=false;
      }
    }
    if (isDraw == true){
      gameIsFinished = true;
      alertify.alert("draw");
    }
    return winner;
  }
  
}
document.getElementById('reset-btn').addEventListener('click',function(){
  reset();
})

function reset(){
   // reseting the visual part
  for ( item of squars){
    let value = item.getAttribute("value");
    let squareContent = document.querySelector(`.square[value='${value}']`);
    squareContent.innerHTML="";
    boarsArr= [ 
      "0","1","2",
      "3","4","5",
      "6","7","8"
]
  }
   gameIsFinished=false;
   currentturn='x';
   document.getElementById('instruction').textContent=`${currentturn}  Turn`;
  
}