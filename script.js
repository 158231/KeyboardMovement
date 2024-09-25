const canvas=document.getElementById("canvas");
const width=canvas.width=window.innerWidth;
const height=canvas.height=window.innerHeight;
const tool=canvas.getContext("2d");

let x=100;
let y=100;
let size=50;


// for(let i=1;i<=10;i++){
//     tool.fillStyle="yellow";
//     tool.fillRect(x,y,size,size);
//     y+=55;

function drawRect(){
    tool.fillStyle="yellow";
    tool.fillRect(x,y,size,size);
}

//! Keyboard Input

function movement(){
    document.addEventListener("keydown",(event)=>{ 
        if(event.key==="ArrowRight"){
            console.log("Right Movement");
            x+=0.010;
        }
        else if(event.key==="ArrowLeft"){
            console.log('Left Movement');
            x-=0.010;
        }
        else if(event.key==="ArrowUp"){
            console.log('Up Movement');
            y-=0.010;
        }
        else if(event.key==="ArrowDown"){
            console.log('Down Movement');
            y+=0.010;
        }
    })
};
function gravity(){
    y+=0.15;
}
function jump(){
    document.addEventListener("keydown",(event)=>{
        if(event.key===" "){
           y-=0.5;
        }
    }
)
   
}

function update(){
    tool.clearRect(0,0,width,height);
    drawRect();
    gravity();
    movement();
    jump();

    requestAnimationFrame(update);
};
update();

// setInterval(() => {
//     update();
// }, 3000);
