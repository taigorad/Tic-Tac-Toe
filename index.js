let turn  ="x"
let gameover=false


//function to change the turn
const changeturn=()=>{
    return turn ==="x"? "0" :"x"
}
//change the color of text 
function addcolor(){
    if(turn!="x"){
       let a= document.getElementsByClassName("info")[0]
       a.style.color="red"
    }
    else{let a= document.getElementsByClassName("info")[0]
    a.style.color="blue"

    }
}
//function to  check for a  win 
const checkwin=()=>{
const main=document.getElementsByClassName("boxtext")
const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]

wins.forEach((e)=>{
    
    if(main[e[0]].innerText!==""){
        if((main[e[0]].innerText==main[e[1]].innerText) && (main[e[2]].innerText==main[e[1]].innerText)){
            const info=document.getElementsByClassName("info")[0]
            info.innerHTML=main[e[0]].innerText + "   "+"Won"
            gameover=true
            
        }
    }

    
})
}



//function for the reset
const reset=document.getElementById("reset")
reset.addEventListener("click",()=>{
    const allbox=document.getElementsByClassName("boxtext")
    for(let i=0;i<allbox.length;i++){
        allbox[i].innerHTML=""
          gameover=false
          document.getElementsByClassName("info")[0].innerText="Turn for " + turn
          addcolor()
          turn="x"
          gameover=false
            
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn
           
            
          
    }
})





//Game Logic

let box=document.getElementsByClassName("box")
Array.from(box).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")

    element.addEventListener("click",()=>{
        if(boxtext.innerText ===""){

            boxtext.innerText=turn
        
            turn=changeturn()
            checkwin()
            addcolor()
            if(!gameover){
            
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn
           
            }
        }
    })
})




