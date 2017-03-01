var cabin;
var ThirstyMan;
var DyingMan;
var object;
var myFont

function preload() {
    cabin = loadAnimation("CI/background_1.png", "CI/background_2.png");
    ThirstyMan = loadAnimation("CI/ThirstyMan-1.png", "CI/ThirstyMan-2.png");
    DyingMan = loadAnimation("CI/DyingMan_1.png", "CI/DyingMan_2.png");
    object = loadAnimation("CI/object-1.png");
    myFont = loadFont("CI/coders_crux.ttf");
}

function setup() {
    createCanvas(800, 800);

}

function draw() {
    background(255, 0, 0);
    animation(cabin, 400, 400);
    animation(ThirstyMan, 250, 500);
    animation(DyingMan, 500, 500);
    animation(object, 140, 580);
    frameRate(10);
}
