function preload(){
    song1 = loadSound("BTS (방탄소년단) 'Dynamite' Official MV.mp3");
    song2 = loadSound("Ed Sheeran - Shape of You (Official Music Video)")
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,400,400);
}