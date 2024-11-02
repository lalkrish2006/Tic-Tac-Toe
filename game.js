let btns=document.querySelectorAll(".btns");
let rbtn=document.querySelector(".but");
let newbtn=document.querySelector(".new-btn");
let msg_cont=document.querySelector(".msg-cont");
let h2=document.querySelector("h2");
let para=document.querySelector("#msg");
let btn_cont=document.querySelector(".btn-cont");
h2.classList.remove("hide1");
let user=[];
let game=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

let turn=true;
document.addEventListener("keypress",function(){
    btns.forEach((btn)=>{
        h2.classList.add("hide1");
        btn.addEventListener("click",()=>{
            console.log(btn);
            btn.style.fontSize="50px";
            btn.style.color="red";
            if(turn){
                btn.innerText="X";
                turn=false;
            }
            else{
                btn.innerText="O";
                turn=true;
            }
            btn.disabled=true;
            checkWinner();
        })
    })
})

function disable(){
    for(let btn of btns){
        btn.disabled=true;
    }
}

function enable(){
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}

function show(pos1){
    msg_cont.classList.remove("hide");
    para.innerText=`Congratulation, Winner is ${pos1}`;
}

const checkWinner=()=>{ //8 times
    let ch=0;
    for(pattern of game){
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("Congratulations, Winner is ",pos1);
                show(pos1);
                disable();
                btn_cont.classList.add("hide-cont");
        rbtn.classList.add("hide-cont");
            }
            else{
                ch++;
            }
        }
    }
    if(ch==8){
        msg_cont.classList.remove("hide");
        para.innerText=`Draw!`;
        btn_cont.classList.add("hide-cont");
        rbtn.classList.add("hide-cont");
    }
}

const reset = function reset(){
    turn=true;
    enable();
    msg_cont.classList.add("hide");
    btn_cont.classList.remove("hide-cont");
    rbtn.classList.remove("hide-cont");
}

newbtn.addEventListener("click",reset);
rbtn.addEventListener("click",reset);