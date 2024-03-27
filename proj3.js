h2 = document.querySelector("h2");
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highscore = 0;
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },300)
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(userSeq);
    gameFlash(randBtn);
}
// let score = 0;
// let max =0;
// for(let i=0; i<highscore.length; i++)
// if(level > highscore){
//     highscore = level;
// }

function checkBtn(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup(), 1000);
        }
        
    }else{
        if(highscore < level){
            highscore = level;
        }
        h2.innerHTML = `game over!<br> your score was ${level}</br> press any key to restart game <br /> 
        your highest score is ${highscore}`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();


    }
}
function btnpress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkBtn(userSeq.length-1);
    console.log(userColor);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);

}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
