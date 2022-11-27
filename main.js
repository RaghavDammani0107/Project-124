nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    posenet = ml5.poseNet(video, modeloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    background("#326ba8"); 
    document.getElementById("square").innerHTML = "Width and Height of Square will be " + difference + "px";
    fill('#34c3eb');
    stroke('#34c3eb');
    square(nose_x, nose_y, difference);
}

function modeloaded() {
    console.log('Posenet is initialised');
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
      nose_x =   results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log('nose_x = '+ nose_x);
        console.log('nose_y = '+ nose_y);
        left_wrist_x  =results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
    }
} 