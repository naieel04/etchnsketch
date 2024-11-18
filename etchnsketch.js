
// etch a sketch
let side = 16;
const container = document.querySelector("#container");
let resetBtn = document.getElementById("reset");
resetBtn.onclick=()=>resetCanvas();
let resizeBtn = document.getElementById("resize");
resizeBtn.onclick=()=>resizeCanvas();

//listen for mouse drag over canvas
let mouseDown = false;
document.body.onmousedown=()=>{mouseDown=true};
document.body.onmouseup=()=>{mouseDown=false};


//setup canvas
function setupCanvas(side) {
    for (let index = 0; index < side*side; index++) {
        let item = document.createElement("div");
        item.className = "item";
        item.addEventListener('mouseover', changeColor);
        item_size = String(100/side)+"%";
        item.style.flexBasis=item_size;
        container.appendChild(item);
    }
    console.log("setup success")
}
//reset canvas
function resetCanvas() {
    console.log("reset canvas has been clicked") 
    container.innerHTML='';
    setupCanvas(side);
}

//resize canvas
function resizeCanvas() {
    tmp = prompt("Enter the length of the side of the canvas: ")
    if (!isNaN(Math.floor(tmp))&&tmp>0&&tmp<1000) {
        side =tmp;
        resetCanvas()    
    }else{
        console.log(`INVALID input given,${tmp}`)
    }
    
    console.log(`resize the canvas to ${tmp}`)

}


//color the canvas
function changeColor(item,color="blue"){
    console.log(`mouseover box,mouseDown=${mouseDown}`);
    if (mouseDown===true) {
      item.target.style.backgroundColor=color;  
      item.target.style.border=0;
    };

}

setupCanvas(side);
