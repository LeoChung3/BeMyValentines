// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code


import showuspics from "./showuspics.js";
import myButton from "./Button.js";
import lilme from "./lilme.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const buttonclass = new myButton()
const meclass = new lilme()
const mousePos = {
        x:0,
        y:0
      };

ctx.font = "80px Arial";
ctx.fillStyle = "pink";
const scale = 3000/800

var today = new Date();

var time = 0;
var oldsm = today.getMinutes();
var olds = today.getSeconds();;

let press = false;
function frame(){
        var today = new Date();

        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();

        var news = s;

        if(olds < news)
        {
                time+=1;
                olds = news;
                console.log(olds, news);
                news = 0;

        }
        if(oldsm < m)
        {
                oldsm += 1;
                olds = 0;
        }
        //console.log(time)
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(100, 100, 2800 , 2800);
        ctx.stroke();
        ctx.restore();


        buttonclass.draw(ctx, scale)


        meclass.draw(ctx, time)
        meclass.move(mousePos.x, mousePos.y, press, scale)
        meclass.moveitself()

        
        requestAnimationFrame(frame)
        
}


canvas.addEventListener('mousedown', (e) => {
        press = true;
        mousePos.x =  e.clientX - canvas.offsetLeft
        mousePos.y =  e.clientY - canvas.offsetTop
        buttonclass.check(mousePos.x, mousePos.y, scale);
        
})

canvas.addEventListener('mouseup', (e) => {
        press = false;
})

canvas.addEventListener('mousemove', (e) => {
        mousePos.x =  e.clientX - canvas.offsetLeft
        mousePos.y =  e.clientY - canvas.offsetTop
      
})
//================================================================================================================================================================
//================================================================================================================================================================
//================================================================================================================================================================
canvas.addEventListener('touchstart', (e) => {
        press = true;
        mousePos.x =  e.clientX - canvas.offsetLeft
        mousePos.y =  e.clientY - canvas.offsetTop
        buttonclass.check(mousePos.x, mousePos.y, scale);
        
})

canvas.addEventListener('touchend', (e) => {
        press = false;
})

canvas.addEventListener('touchmove', (e) => {
        mousePos.x =  e.clientX - canvas.offsetLeft
        mousePos.y =  e.clientY - canvas.offsetTop
        console.log(mousePos.x, mousePos.y)        
})
requestAnimationFrame(frame)