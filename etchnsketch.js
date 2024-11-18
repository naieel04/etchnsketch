
// etch a sketch
let side = 16;
let brushMode = 'default';
const container = document.querySelector("#container");

//listen for buttons pressed
let resetBtn = document.getElementById("reset");
resetBtn.onclick=()=>resetCanvas();
let resizeBtn = document.getElementById("resize");
resizeBtn.onclick=()=>resizeCanvas();
let rainbowBtn = document.getElementById('rainbow');
rainbowBtn.onclick=()=>{brushMode='rainbow'};
let eraserBtn = document.getElementById('eraser');
eraserBtn.onclick=()=>{brushMode='eraser'};


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
        item.addEventListener('click',()=>{
            console.log("mousclick")
            mouseDown=true;
            changeColor(item);
            mouseDown=false;
        });
        item_size = String(100/side)+"%";
        item.style.flexBasis=item_size;
        container.appendChild(item);
    }
    console.log("setup success")
}
//reset canvas
function resetCanvas() {
    console.log("reset canvas has been clicked") 
    brushMode='default'
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
function changeColor(item){
    console.log(`mouseover box,mouseDown=${mouseDown}`);
    if (mouseDown===true&&brushMode==='default') {
        console.log("painting default brush");
        item.target.style.backgroundColor='blue';    
        item.target.style.border=0;
    }else if(mouseDown===true&&brushMode==='rainbow'){
        console.log("painting rainbow brush");
        item.target.style.backgroundColor=rainbowBrush();  
        item.target.style.border=0;
    }else if(mouseDown===true&&brushMode==='eraser'){
        console.log("painting eraser brush");
        item.target.style.backgroundColor="whitesmoke";  
        item.target.style.border="1px solid rgba(152, 148, 148, 0.243)";
    }

}

//rainbow brush
function rainbowBrush(){
    let ran =Math.round( Math.random()*(255)).toString();
    let ran2 =Math.round( Math.random()*(255)).toString();
    let ran3 =Math.round( Math.random()*(255)).toString();
    let rgbString = `rgb(${ran},${ran2},${ran3})`;
    return rgbString
}




setupCanvas(side);
