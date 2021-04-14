var canvas;
var backgroundImage, track, car1_img, car2_img;
var database;
var chat, welcome, creator, friend, creatorRoom, creatorPassword, friendPassword, friendRoom;
var member, allfighters;
var chatState = null;
var membersCount;
function preload() {
  backGround = loadImage("images/backGround.jpg");
}

function setup() {

  canvas = createCanvas(displayWidth, displayHeight);

  database = firebase.database();

  chat = new Chat();
  welcome = new Welcome();
  creator = new Creator();
  friend = new Friend();
  member = new Member();
  creatorPassword = new CreatePassword();
  creatorRoom = new CreateRoomNo();
  friendRoom = new FriendRoomNo();
  friendPassword = new FriendPassword();

}

function draw() {
  background(backGround);

  if (chatState === null || chatState === 0) {
    chat.start();
  }
  if (membersCount === 2) {
    chat.update(1);
  }

  if (chatState === 1) {
    clear();
    friend.greeting.hide();
    friend.greeting2.hide();
    friend.playButton.hide();

    creator.greeting.hide();
    creator.greeting2.hide();
    creator.playButton.hide();
    creator.secretWord.hide();

    chat.play();
  }
  if (chatState === 2) {
    chat.end();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}