/**
 * Created by liuyujing on 16/9/25.
 */

onload = function () {

    ColorView();

    var timer;
    var score = 0;
    var time = 60;

    function finish() {
        setInterval(timer);

        var scoreView = document.getElementById("score");
        scoreView.innerText = score+"分";
        alert("得分"+score);
        score = 0;
        time = 60;
    }

    function returnColorText(color) {
        var colorText;
        switch (color){
            case "red":
                colorText = "红色";
                break;
            case "black":
                colorText = "黑色";
                break;
            case "blue":
                colorText = "蓝色";
                break;
            default:
        }
        return colorText;
    }

    function startGame() {

        var itemInfos = [[{color:"red",title:"蓝色"},{color:"black",title:"红色"},{color:"blue",title:"黑色"}],[{color:"red",title:"蓝色"},{color:"black",title:"红色"},{color:"blue",title:"黑色"}],[{color:"red",title:"蓝色"},{color:"black",title:"红色"},{color:"blue",title:"黑色"}]];

        var showMessageView = document.getElementById("showMessageView");

        timer = setInterval(function () {
            var index = parseInt(Math.random()*10)%itemInfos.length;
            var infoIndex = parseInt(Math.random()*10)%itemInfos.length;
            var info = itemInfos[index][infoIndex];
            showMessageView.innerText = info.title;
            showMessageView.style.color = info.color;
            time--;

            if (time<=0){
                finish();
            }

            var timeView = document.getElementById("time");
            timeView.innerText = time+"秒";

        },500);
    }

    for (var i=1;i<4;i++){
        var item = document.getElementById("other"+i);
        item.onclick = function (event) {
            if (this.innerText === returnColorText(showMessageView.style.color)){
                score++;
                var scoreView = document.getElementById("score");
                scoreView.innerText = score+"分";
            }else {
                finish();
                score = 0;
            }
        }
    }

    startGame();
};