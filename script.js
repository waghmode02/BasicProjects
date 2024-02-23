let boxes=document.querySelectorAll(".box");
let winmsg=document.querySelector("#wmsg");
let restBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg");
let newGame=document.querySelector("#newgame");
const winnigPattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
 let turnX=true;
 let counter=0;
 const resetgame=()=>{
   turnX=true;
   counter=0;
   enableBoxes();
 }
 const newgame=()=>{
   turnX=true;
   counter=0;
   enableBoxes();
   msgContainer.classList.add("hide");

 }

 boxes.forEach((boxs)=>{
    boxs.addEventListener("click",()=>{
       if(turnX){
        boxs.innerText="X"
        boxs.style.color='blue'
        turnX=false

       }
       else{
        boxs.innerText="O"
        turnX=true;
       }
       counter++;
       boxs.disabled=true;
       let iswinner=isWinnerCheck();
       if(counter===9 && !iswinner){
        gameDraw();
       }

    })
 });
 const gameDraw=()=>{
   winmsg.innerText=" OOPS!Game was a Draw..😮";
   disabledBoxes();
   msgContainer.classList.remove("hide");
   
}
const disabledBoxes=()=>{
   for(box of boxes){
      box.disabled=true;
   }
};
const enableBoxes=()=>{
   for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.style.color=''
    }
};

const showWinner=(winner)=>{
   winmsg.textContent=`Congratulations, Winner is ${winner}..🎉`;
   disabledBoxes();
   msgContainer.classList.remove("hide");
   
}
 const isWinnerCheck=()=>{
    for(let pat of winnigPattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!=""){
         if(pos1==pos2 && pos2==pos3){
            showWinner(pos1);
             return true;
         }
        }
    }
 };
newGame.addEventListener('click',newgame);
restBtn.addEventListener('click',resetgame);
