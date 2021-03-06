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
pipeSouth.src = "images/pipeSouth.png";

var gap = 80;
var constant;

bX = 10;
bY = 150;

var gravity = 1;
var score = 0;

var fly = new Audio();
var succeeded = new Audio();
var audioHit = new Audio();
var audioGrouding = new Audio();
fly.src = "sounds/fly.mp3";
succeeded.src = "sounds/score.mp3";
audioHit.src = "sounds/sfx_hit.wav";
audioGrouding.src = "sounds/sfx_die.wav";


document.addEventListener("keydown", moveUp);

function moveUp(){
    bY = bY - 20;
    fly.play();
}

var pipe = [];
pipe[0] = {
    x: cvs.clientWidth,
    y: 0
};

function draw(){    
    real();
    requestAnimationFrame(draw);
}

function real(){
    ctx.drawImage(bg, 0, 0);

    constant = pipeNorth.height + gap;
    for ( var i = 0; i < pipe.length; i++ ){
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
        pipe[i].x--;

        if ( pipe[i].x === 30){
            pipe.push({
                x: cvs.clientWidth,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            })
        }

        if ( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width
            && ( bY <= pipe[i].y + pipeNorth.height || bY + bird.height >= pipe[i].y + constant)  
            || bY + bird.height >= cvs.height - fg.height    ){

            location.reload();
        }

        if ( pipe[i].x === 5 ){
            score++;
            succeeded.play();
        }
    }


    
    ctx.drawImage(fg, 0, cvs.height - fg.height);

    ctx.drawImage(bird, bX, bY);
    bY = bY + gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : " + score, 10, cvs.height - 20);


 //   requestAnimationFrame(draw);
}



draw();




