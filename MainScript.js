// with this Game you control a blob character where the objective is
// to eat the small blobs on the screen, trying to achieve the highest
// score you can. while doing so you are also going to be dodging black pellets
// that are shot from 4 different sides of the screen. making it difficult.
// controls for the game are the WASD keys
// The live server extension is required to run this program if using VS Code


import showuspics from "./showuspics.js";


const ctx = canvas.getContext("2d");
const leftbutton  = document.getElementById("back");
const rightbutton  = document.getElementById("next");
const picclass = new showuspics();

function frame(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        
        picclass.draw(ctx);


        console.log(picclass.numberofpic)
    
        requestAnimationFrame(frame)

}
    

leftbutton.addEventListener("touchstart", (event) => {
        event.preventDefault(); // Prevent scrolling
    
        picclass.back();
    });
    
rightbutton.addEventListener("touchstart", (event) => {
event.preventDefault(); // Prevent scrolling

picclass.next();
});


leftbutton.addEventListener("mousedown", (event) => {
event.preventDefault(); // Prevent scrolling
picclass.back();

});


rightbutton.addEventListener("mousedown", (event) => {
event.preventDefault(); // Prevent scrolling
picclass.next();

});
    

requestAnimationFrame(frame)