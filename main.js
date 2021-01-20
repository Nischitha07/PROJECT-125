noseX = 0;
noseY = 0;
difference = 0;
leftWrist = 0;
rightWrist = 0;

function preload()
{

}

function setup()
{
video = createCapture(VIDEO);
video.size(500 , 300);
video.position(100 , 200);
canvas = createCanvas(400 , 350 , );
canvas.position(800 , 150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPose);
}
function draw()
{  background('#f75959');
    textSize(difference);
fill('#00ffe1');

text('Nischitha', noseX,noseY,difference);

}
function modelLoaded()
{
    console.log("PoseNet initialized");

}

function gotPose(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =  " + noseX + "noseY = " + noseY);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        difference = floor(leftWrist - rightWrist);
        console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "difference = " + difference);
        document.getElementById("output_spn").innerHTML = difference + "px";
    }
    
}