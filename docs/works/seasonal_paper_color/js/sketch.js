function setup(){
    let canvas = createCanvas(innerWidth, innerHeight);
    canvas.position(0,0);

    colorMode(HSB, 360, 100, 100, 1.0);
    let BASE_H = random(0, 360);

    noStroke();
    fill(BASE_H, 25, 65, 1.0);
    rect(0, 0, width/2, height/2);

    fill(BASE_H, 35, 75, 1.0);
    rect(width/2, 0, width, height/2);

    fill(BASE_H, 30, 40, 1.0);
    rect(0, height/2, width/2, height);

    fill(BASE_H, 15, 80, 1.0);
    rect(width/2, height/2, width, height);

}

function mouseClicked(){
    window.location.reload();
}