song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0; 
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("MONTERO.mp3");
    song2 = loadSound("INDUSTRY BABY.mp3")

    
}




function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDE0);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }

}


function modelLoaded(){
    console.log("Pose Net is Intialized");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

