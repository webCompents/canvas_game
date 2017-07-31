//创建画布
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//背景图片
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
}
bgImage.src = "iamges/background.png";


//游戏对象
var hero = {
    speed: 256,//每秒移动像素数
    x: 0,
    y: 0
};
var monster = {
    x: 0,
    y: 0
}
var monstersCaught = 0;//怪兽被抓住次数

//处理按键
var keysDown = {};
addEventListener('keyDown', function (e) {
    keysDown[e.keyCode] = true;
},false);

addEventListener('keyup',function (e) {
    delete keysDown[e.keyCode];
},false);


//抓住monster后开始新一轮游戏

var reset = function () {
    hero.x = canvas.width/2;
    hero.y = canvas.height/2;

    //怪物随机出现
    monster.x = 32 + (Math.random()*(canvas.width-64));
    monster.y = 32 + (Math.random()*(canvas.height-64));
}

