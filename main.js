function preload(){   
}

function setup(){
    canvas = createCanvas(680, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
   save('student_name.png');
}