// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code


import showuspics from "./showuspics.js";


const ctx = canvas.getContext("2d");

function frame(){
        console.log(ctx.width);

        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(100, 100, 2800 , 2800);
        ctx.stroke();
        ctx.restore();


        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(1000, 1500, 300, 200);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.rect(1700, 1500, 300, 200);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.moveTo(1500, 1500);
        ctx.lineTo(1500, 0);
        ctx.stroke();
        ctx.restore();
        requestAnimationFrame(frame)

}
requestAnimationFrame(frame)