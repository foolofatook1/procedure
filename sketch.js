var cabin;
var ThirstyMan;
var DyingMan;
var object;
var myFont;
var stageChange_1;
var stageChange_2;
var song;

function preload() {
    cabin = loadAnimation("CI/background-1.png", "CI/background-2.png");
    ThirstyMan = loadAnimation("CI/ThirstyMan-1.png", "CI/ThirstyMan-2.png");
    DyingMan = loadAnimation("CI/DyingMan_1.png", "CI/DyingMan_2.png");
    object = loadAnimation("CI/object-1.png");
    myFont = loadFont("CI/coders_crux.ttf");
    stageChange_1 = 0;
    stageChange_2 = 0;
    song = loadSound("CI/cricket.mp3");
}

function setup() {
    createCanvas(800, 800);
    song.setVolume(0.25);
    song.play();
}

function draw() {
    if (stageChange_1 == 0) {
        mainScreen();
        openScreen();
    }
    else if (stageChange_1 == 1) {
        mainScreen();
        rulesScreen();
    }
    if (stageChange_1 == 2) {
        mainScreen();
        choiceScreen();
    }
    if (stageChange_2 == 1) {
        background(0);
        fill(255, 0, 0);
        textFont(myFont, 80);
        textAlign(CENTER);
        text("LOSER", 400, 400);
        textSize(40);
        text("PRESS 'R' TO PLAY AGAIN", 400, 485)
    }
}

function mainScreen() {
    background(255, 0, 0);
    animation(cabin, 400, 400);
    animation(ThirstyMan, 250, 500);
    animation(DyingMan, 500, 500);
    animation(object, 140, 580);
    frameRate(10);
}

function openScreen() {
    fill(255, 0, 0);
    textFont(myFont, 60);
    textAlign(CENTER);
    text("*PRESS 'B' TO BEGIN*", 340, 680);
}

function rulesScreen() {
    fill(255, 0, 0);
    textFont(myFont, 30);
    textAlign(LEFT);
    text("WELCOME TO THE CABIN OF THE CATEGORICAL IMPERATIVE.", 10, 20);
    text("YOU ARE TRAPPED HERE FOR THE NEXT 72HRS WITH ONLY A SINGLE GLASS OF", 10, 40);
    text("WATER THAT ONLY YOU KNOW ABOUT.", 10, 60);
    text("ACCOMPANIED BY A MAN DYING OF THIRST YOU ARE LEFT WITH MANY CHOICES.", 10, 80);
    text("TO MAKE A CHOICE CLICK 'C'", 10, 120);
}

function choiceScreen() {
    fill(255, 0, 0);
    textFont(myFont, 36);
    textAlign(LEFT);
    text("<D>KEEP THE WATER HIDDEN. YOU MUST SAVE IT FOR LATER.", 10, 30);
    text("<E>SIP THE WATER CONSERVATIVELY. YOU ARE THIRSTY.", 10, 90);
    text("<F>OFFER THE WATER TO THE DYING MAN.", 10, 150);
}

function keyPressed() {
    if (key === "B") {
        stageChange_1 += 1;
    }
    if (key === "C") {
        stageChange_1 += 1;
    }
    if (key === "D") {
        stageChange_2 += 1;
    }
    if (key === "R") {
        stageChange_1 = 0;
        stageChange_2 = 0;
    }
}
