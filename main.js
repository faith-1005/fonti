nosex=0
nosey=0
difference=0
rightwristx=0
leftwristx=0

function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log('poseNet is initialized');

}

function draw() {

    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of the text will be = "+difference+"px"
    textSize(difference);
    text('Vidhisha', nosex, nosey);
    fill(0, 102, 153);

}

function gotPoses(results){

    if(results.length > 0){
        
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex = "+ nosex +" nosey = " + nosey);
        
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        
        console.log("leftwristx = "+ leftwristx +" rightwristx = "+ rightwristx +" difference = "+ difference);
        
    }
}