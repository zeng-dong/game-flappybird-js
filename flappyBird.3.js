var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
console.log("Pipe dimension is: " +  pipeNorth.height + ", " + pipeNorth.width)
pipeSouth.src = "images/pipeSouth.png";

var gap = 80;
var constant;

bX = 10;
bY = 150;

var gravity = 1;
var score = 0;

function draw(){    
    fake();
    requestAnimationFrame(draw);
}
function fake(){
    ctx.drawImage(bg, 0, 0);

    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth, 100, 0);
    ctx.drawImage(pipeSouth, 100, 0 + constant);

    ctx.drawImage(fg, 0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);
    ctx.drawImage(bird, 100 - bird.width, bY);
    ctx.drawImage(bird, 170 - bird.width, pipeNorth.height);
    ctx.drawImage(bird, 130 - bird.width, pipeNorth.height + gap - bird.height);

    
    ctx.drawImage(bird, bX, cvs.height - fg.height - bird.height);

};

draw();




