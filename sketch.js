var cabin;
var ThirstyMan;
var DyingMan;
var object;
var object1;
var object2;
var object3;
var object4;
var object5;
var object6;
var object7;
var object8;
var object9;
var myFont;
var stageChange_1;
var stageChange_2;
var song;
var rect_x;
var rect_x_outline;
var rect2_x_outline;
var rect_y;
var rect_y_outline;
var rect2_y_outline;
var rect_h;
var outline_rect_h;
var rect_l;
var rect2_l;
var outline_rect_l;
var object_x;
var object_y;
var rect_l_change;
var clickCounter;

function preload() {
    //background
    cabin = loadAnimation("CI/background-1.png", "CI/background-2.png");
    //sprite with hair
    ThirstyMan = loadAnimation("CI/ThirstyMan-1.png", "CI/ThirstyMan-2.png");
    //dying sprite
    DyingMan = loadAnimation("CI/DyingMan_1.png", "CI/DyingMan_2.png");
    //full water bottle
    object = loadAnimation("CI/object-1.png");
    //full-1
    object1 = loadAnimation("CI/object1-1.png");
    //full-2
    object2 = loadAnimation("CI/object2-1.png");
    //full-3
    object3 = loadAnimation("CI/object3-1.png");
    //full-4
    object4 = loadAnimation("CI/object4-1.png");
    //full-5
    object5 = loadAnimation("CI/object5-1.png");
    //full-6
    object6 = loadAnimation("CI/object6-1.png");
    //full-7
    object7 = loadAnimation("CI/object7-1.png");
    //full-8
    object8 = loadAnimation("CI/object8-1.png");
    //full-9
    object9 = loadAnimation("CI/object9-1.png");
    //font
    myFont = loadFont("CI/coders_crux.ttf");
    //ambiance
    song = loadSound("CI/cricket.mp3");
}

function setup() {
    createCanvas(800, 800);
    stageChange_1 = 0;
    stageChange_2 = 0;
    rect_x_outline = 180;
    rect_y_outline = 320;
    rect2_x_outline = 400;
    rect2_y_outline = 360;
    rect_x = 184;
    rect_y = 323;
    rect2_x = 404;
    rect2_y = 363;
    rect_l = 172;
    rect2_l = 172;
    outline_rect_l = 180;
    rect_h = 45;
    outline_rect_h = 52;
    object_x = 140;
    object_y = 580;
    clickCounter = 0;
    song.setVolume(0.25);
    song.play();
}
//the game and its change conditions
function draw() {
    if (stageChange_1 == 0) {
        mainScreen();
        openScreen();
        fill(0);
    }
    else if (stageChange_1 == 1) {
        mainScreen();
        rulesScreen();
    }
    if (stageChange_2 == 1) {
        mainScreen();
        choiceScreen_1();
        thirstMeter_outline_1();
        thirstMeter_1();
        thirstMeter_outline_2();
        thirstMeter_2();
        object_x = mouseX;
        object_y = mouseY;
        waterLevel()
       // spillWater();
    }
}
//THE BARE IMAGE
function mainScreen() {
    background(255, 0, 0);
    animation(cabin, 400, 400);
    animation(ThirstyMan, 250, 500);
    animation(DyingMan, 500, 500);
    animation(object, object_x, object_y);
    frameRate(10);
}
//THE OPENING SCREEN
function openScreen() {
    fill(255, 0, 0);
    textFont(myFont, 60);
    textAlign(CENTER);
    text("*PRESS 'B' TO BEGIN*", 340, 680);
}
//THE SCREEN THAT TELLS YOU THE RULES
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
//THE SCREEN IN WHICH YOU PLAY THE GAME
function choiceScreen_1() {
    if (mouseX >= 140 && mouseX <= 250 && mouseY >= 400 && mouseY <= 580) {
        fill(255, 0, 0);
        textFont(myFont, 30);
        textAlign(LEFT);
        text("DRINK?", mouseX, mouseY);
    }
    if (mouseX >= 400 && mouseX <= 580 && mouseY >= 460 && mouseY <= 500) {
        fill(255, 0, 0);
        textFont(myFont, 30);
        textAlign(LEFT);
        text("HELP?", mouseX, mouseY);
    }
}
//THE PAGE THAT TELLS YOU YOU LOSE AND WHY
function gameOver() {
    background(0);
    fill(255, 0, 0);
    textFont(myFont, 80);
    textAlign(CENTER);
    text("LOSER", 400, 400);
    textSize(40);
    text("REFRESH THE PAGE TO PLAY AGAIN", 400, 485);
}
//THE PAGE THAT TELLS YOU YOU WIN AND WHY
function winner() {
    background(0);
    fill(66, 244, 69);
    textFont(myFont, 80);
    textAlign(CENTER);
    text("WINNER", 400, 400);
    textSize(40);
    text("REFRESH THE PAGE TO PLAY AGAIN", 400, 485);
}
//THE OUTLINE OF THE THIRST METER FOR THE THIRSTY MAN
function thirstMeter_outline_1() {
    stroke(0);
    strokeWeight(8);
    fill(0, 255, 0);
    rect(rect_x_outline, rect_y_outline, outline_rect_l, outline_rect_h);
}
//THE THIRST METER ITSELF && CLICKING ON THIRSTY MAN
function thirstMeter_1() {
    fill(255, 0, 0);
    noStroke();
    rect(rect_x, rect_y, rect_l, rect_h);
    fill(0, 255, 0);
    textFont(myFont, 60);
    textAlign(LEFT);
    text("THIRST", rect_x + 20, rect_y + rect_h - 13);
    if (mouseIsPressed && mouseX >= 140 && mouseX <= 250 && mouseY >= 400 && mouseY <= 580) {
        rect_l -= 20;
        clickCounter += 1;
    }
}

function thirstMeter_outline_2() {
    stroke(0);
    strokeWeight(8);
    fill(0, 255, 0);
    rect(rect2_x_outline, rect2_y_outline, outline_rect_l, outline_rect_h);
}

function thirstMeter_2() {
    fill(255, 0, 0);
    noStroke();
    rect(rect2_x, rect2_y, rect2_l, rect_h);
    fill(0, 255, 0);
    textAlign(LEFT);
    text("THIRST", rect2_x + 20, rect2_y + rect_h - 13);
    if (mouseIsPressed && mouseX >= 400 && mouseX <= 580 && mouseY >= 460 && mouseY <= 500) {
        rect2_l -= 20;
        clickCounter += 1;
    }
    //THIRST LEVEL RESPONSE
    if (rect_l <= 0) {
        gameOver();
    }
    if (rect2_l <= 0) {
        winner();
    }
}
//WATER LEVEL CHANGE
function waterLevel() {
    //THIRST MAN waterLevel
    if (clickCounter == 1) {
        object = object1;
    }
    if (clickCounter == 2) {
        object = object2;
    }
    if (clickCounter == 3) {
        object = object3;
    }
    if (clickCounter == 4) {
        object = object4;
    }
    if (clickCounter == 5) {
        object = object5;
    }
    if (clickCounter == 6) {
        object = object6;
    }
    if (clickCounter == 7) {
        object = object7;
    }
    if (clickCounter == 8) {
        object = object8;
    }
    if (clickCounter >= 9) {
        object = object9;
        gameOver();
    }
    if (rect2_l <= 0) {
        winner();
    }
}
//SPILLING THE WATER
//function spillWater() {
//  if (mouseIsPressed && mouseX >= 100 && mouseX <= width - 100 && mouseY >= height && mouseY <= height - 200) {
//      object = object9;
//    }
//}
//PRESSING KEYS IS IMPORTANT
function keyPressed() {
    if (key === "B") {
        stageChange_1 += 1;
    }
    if (key === "C") {
        stageChange_2 += 1;
    }
}
