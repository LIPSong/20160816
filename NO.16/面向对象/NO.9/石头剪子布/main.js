/**
 * Created by liuyujing on 16/9/20.
 */

var blackgroundView = document.createElement("div");
document.body.appendChild(blackgroundView);

var userBlackgroundView = document.createElement("div");
blackgroundView.appendChild(userBlackgroundView);

var computerBlackgroundView = document.createElement("div");
blackgroundView.appendChild(computerBlackgroundView);


var images = ["image/shitou.jpg","image/jiandao.gif","image/bu.gif"];

var lastSelectEle;
var timer;
for (var i=0;i<3;i++){
    var element = document.createElement("p");
    element.id = images[i];
    var image = document.createElement("img");
    image.src = images[i];
    image.style.height = "100%";
    element.appendChild(image);
    userBlackgroundView.appendChild(element);
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.float = "left";
    element.onclick = function (event) {
        var curEle = this;
        if (lastSelectEle){
            lastSelectEle.style.opacity = "1.0";
        }
        curEle.style.opacity = "0.8";
        lastSelectEle = curEle;
        clearInterval(timer);

        var user = images.indexOf(curEle.id);
        console.log("user:"+user);
        var computer = images.indexOf(document.getElementById("computer").src.replace("http://localhost:63342/NO.5-OnClass/",""));
        var result = user-computer;//结果
        console.log(document.getElementById("computer").src);
        console.log("computer:"+computer);
        console.log("result:"+result);
        var message;
        if (result===0){
            console.log(user+":"+computer+"平手");
            message = user+":"+computer+"平手";
        }else if(result === -1||result===2){
            console.log(user+":"+computer+"用户赢");
            message = user+":"+computer+"用户赢";
        }else {
            console.log(user+":"+computer+"用户输");
            message = user+":"+computer+"用户输";
        }
        alert(message);
        start();
    };
}

var element = document.createElement("p");
var image = document.createElement("img");
image.id = "computer";
image.src = images[0];
image.style.height = "100%";
element.appendChild(image);
computerBlackgroundView.appendChild(element);
element.style.height = "100px";
element.style.width = "100px";

function start() {
    var computerSelectIndex = 0;
    timer = setInterval(function () {
        computerSelectIndex++;
        computerSelectIndex = computerSelectIndex>=images.length?0:computerSelectIndex;
        image.src = images[computerSelectIndex];
    },500);
}


start();

