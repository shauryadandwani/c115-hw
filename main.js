function preload() {
    
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log("results");
       
    }
}
function modelloaded(){
    console.log('PoseNet is initialized');
}
function draw() {
    image(video, 0, 0, 300,300);
}
function take_snapshot(){
    save('myFilterImage.png')
}