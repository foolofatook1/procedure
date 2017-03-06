var cabin;
var ThirstyMan;
var DyingMan;
var object;
var myFont;
var stageChange_1;
var stageChange_2;
var stageChange_3;
var song;
var rect_x;
var rect_y;
var rect_h;
var rect_l;
var object_x;
var object_y;

function preload() {
    cabin = loadAnimation("CI/background-1.png", "CI/background-2.png");
    ThirstyMan = loadAnimation("CI/ThirstyMan-1.png", "CI/ThirstyMan-2.png");
    DyingMan = loadAnimation("CI/DyingMan_1.png", "CI/DyingMan_2.png");
    object = loadAnimation("CI/object-1.png");
    myFont = loadFont("CI/coders_crux.ttf");
    song = loadSound("CI/cricket.mp3");
}

function setup() {
    createCanvas(800, 800);
    stageChange_1 = 0;
    stageChange_2 = 0;
    stageChange_3 = 0;
    rect_x = 180;
    rect_y = 320;
    outline_rect_l = 180;
    rect_h = 60;
    object_x = 140;
    object_y = 580;
    song.setVolume(0.25);
    song.play();
    //think-- if (stageChange_2 == x){y.play();}
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
        choiceScreen_1();
        thirstMeter_outline_1();
        thirstMeter_1();
        thirstMeter_2();
        object_x = mouseX;
        object_y = mouseY;
    }
    if (stageChange_2 == 1) {
        gameOver();
    }
    if (stageChange_3 == 1) {
        winner();
    }
}

function mainScreen() {
    background(255, 0, 0);
    animation(cabin, 400, 400);
    animation(ThirstyMan, 250, 500);
    animation(DyingMan, 500, 500);
    animation(object, object_x, object_y);
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
    text("WATER, AND THE VOICE OF KANTIAN REASON.", 10, 60);
    text("ACCOMPANIED BY A MAN DYING OF THIRST YOU ARE LEFT WITH MANY CHOICES.", 10, 80);
    text("WHAT WILL YOU DO?", 10, 100);
    text("TO MAKE A CHOICE CLICK 'C'", 10, 140);
}

function choiceScreen_1() {
    fill(255, 0, 0);
    textFont(myFont, 36);
    textAlign(LEFT);
    text("DO YOU WISH TO SIP THE WATER CONSERVATIVELY, AND SAVE THE REST FOR LATER? Y/N")
    if (mouseX >= 140 && mouseX <= 250 && mouseY >= 400 && mouseY <= 580) {
        fill(255, 0, 0);
        textFont(myFont, 30);
        textAlign(LEFT);
        text("DRINK?", mouseX, mouseY);
    }
    if (mouseIsPressed && mouseX >= 140 && mouseX <= 250 && mouseY >= 400 && mouseY <= 580) {
        stageChange_2 += 1;
    }
    if (mouseX >= 400 && mouseX <= 580 && mouseY >= 460 && mouseY <= 500) {
        fill(255, 0, 0);
        textFont(myFont, 30);
        textAlign(LEFT);
        text("DRINK?", mouseX, mouseY);
    }
    if (mouseIsPressed && mouseX >= 400 && mouseX <= 580 && mouseY >= 460 && mouseY <= 500) {
        stageChange_3 += 1;
    }
}

function gameOver() {
    background(0);
    fill(255, 0, 0);
    textFont(myFont, 80);
    textAlign(CENTER);
    text("LOSER", 400, 400);
    textSize(40);
    text("PRESS 'R' TO PLAY AGAIN", 400, 485);
}

function winner() {
    background(0);
    fill(66, 244, 69);
    textFont(myFont, 80);
    textAlign(CENTER);
    text("WINNER", 400, 400);
    textSize(40);
    text("PRESS 'R' TO PLAY AGAIN", 400, 485);
}

function thirstMeter_outline_1() {
    strokeWeight(8);
    rect(rect_x, rect_y, outline_rect_l, rect_h);
}

function thirstMeter_1() {
    fill(0, 255, 0);
    rect(rect_x, rect_y, rect_l, rect_h);
    push();
    //frameRate = 50;
    rect_l = frameCount;
    if (rect_l >= outline_rect_l) {
        fill(255, 0, 0);
        textFont(myFont, 60);
        textAlign(LEFT);
        text("THIRSTY", rect_x + 10, rect_y + rect_h - 10);
        rect_l = outline_rect_l;
        pop();
    }
    else if (rect_l >= outline_rect_l) {
        frameCount == 0;
    }
}

function thirstMeter_2() {
    if (frameCount % 10 == 0) {
        fill(255, 0, 0);
        textFont(myFont, 80);
        text("HELP!", 520, 400);
    }
}

function keyPressed() {
    if (key === "B") {
        stageChange_1 += 1;
    }
    if (key === "C") {
        stageChange_1 += 1;
        frameCount === 0;
    }
    if (key === "D") {
        stageChange_2 += 1;
    }
    if (key === "R") {
        stageChange_1 = 0;
        stageChange_2 = 0;
        stageChange_3 = 0;
        object_x = 140;
        object_y = 580;
    }
}

function reset() {
    frameCount === 0;
}
