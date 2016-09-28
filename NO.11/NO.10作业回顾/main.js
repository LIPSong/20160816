/**
 * Created by liuyujing on 16/9/28.
 */

(function () {

    /*
    *
    * 1.完成数字时钟：周二下午03:01 这种格式
    * 2.完成时钟界面
    * 3.霓虹灯 点击开始按钮 开始闪烁 按钮显示开始 点击结束停止
    *
    * */

    // //如果是个位数 在前面添0
    // function getAddZero(num) {
    //     var result = num<10?"0"+num:num;
    //     return result;
    // }
    //
    // function dateFormat() {
    //     var date = new Date();
    //
    // //    得到周几
    //     var weekList = ["周日","周一","周二","周三","周四","周五","周六"];
    //     var weekString = weekList[date.getDay()];
    // //    上午下午
    //     var hoursNum = date.getHours();
    //     var APM = hoursNum<=12?"上午":"下午";
    //
    // //    得到小时
    // //     01 02 3456
    // //     10 11
    //
    //     // var hourString = hoursNum>12?(hoursNum-12)<10?"0"+(hoursNum-12):hoursNum-12:hoursNum<10?"0"+hoursNum:hoursNum;
    //
    //     var hour = hoursNum>12?hoursNum-12:hoursNum;
    //     // var hourString = hour<10?"0"+hour:hour;
    //     var hourString = getAddZero(hour);
    //
    // //    得到分钟
    //     var minutes = getAddZero(date.getMinutes());
    //
    //     //周二下午03:01
    //     return weekString+APM+hourString+":"+minutes;
    // }


        var time = document.getElementById("time");
        setInterval(function () {
            time.textContent = dateFormat();
        },1000);


        var hourPointer = document.getElementById("hPointer");
        var minutesPointer = document.getElementById("mPointer");
        var secPointer = document.getElementById("sPointer");

        /*
        * 角度
        * 360度
        * 秒针:转弯360度 需要60次 = 每次6度
        * 分针:转弯360度 需要60次 = 每次6度
        * 时针:转弯360度 需要12次 = 每次30度 +（360/12/60）
        * */

        function runTime() {
            var date = new Date();
//        秒数
            var sec = date.getSeconds();
//    分数
            var minutes = date.getMinutes();
//    时
            var hour = date.getHours();

//    秒针的度数
            var secAngle = sec * (360/60)-90;
//    分针的度数
            var minuteAngle = minutes * (360/60)-90 + sec*(360/60/60);
//    时针的读书
            var hourAngle = hour * (360/12) + minutes*(360/12/60)-90;

//    开始旋转
            hourPointer.style.transform = "rotate("+hourAngle+"deg)";
            minutesPointer.style.transform = "rotate("+minuteAngle+"deg)";
            secPointer.style.transform = "rotate("+secAngle+"deg)";
        }

        setInterval(function () {
            runTime();
        },1000);



    function createView() {

        var backgroundView = document.createElement("div");
        backgroundView.id = "colorBackgroundView";
        backgroundView.style.cssText = "width:600px;height:600px";
        document.body.appendChild(backgroundView);

        backgroundView.style.transform = "rotate(180deg)";

        for (var i=0;i<10;i++){

            var div = document.createElement("div");
            div.className = "colorView";
            backgroundView.appendChild(div);

        }

        var button = document.createElement("div");
        button.textContent = "开始";
        //判断 是否开始霓虹灯
        var isStart = false;
        button.onclick = function () {
            if (isStart){
                stop();
                isStart = false;
                button.textContent = "开始";
            }else {
                start();
                isStart = true;
                button.textContent = "结束";
            }

        };
        document.body.appendChild(button);
    }
    createView();

    var timer;
    /*
    function start() {
        var colors = ["#facd76","#84A7FA","#FA5045","#74F8FA","#0898FA","#D865FA","#915FFA"];

        timer = setInterval(function () {

            //随机选择div色块的下标
            var chooseViewIndex = parseInt(Math.random()*10)%10;
            //随机选择颜色的下标
            var chooseColorIndex = parseInt(Math.random()*10)%colors.length;

            var colorViews = document.getElementsByClassName("colorView");
            var colorView = colorViews[chooseViewIndex];
            colorView.style.background = colors[chooseColorIndex];
            colorView.style.height = parseInt(Math.random()*1000)%500+"px";

        },500);
    }
*/

    function start() {
        var colors = ["#facd76","#84A7FA","#FA5045","#74F8FA","#0898FA","#D865FA","#915FFA"];
        var chooseViewIndex = 0;

        var isReturn = false;
        var height = 500;
        setInterval(function () {
            var colorViews = document.getElementsByClassName("colorView");
            var colorView = colorViews[chooseViewIndex];
            //随机选择颜色的下标
            var chooseColorIndex = parseInt(Math.random()*10)%colors.length;
            colorView.style.background = colors[chooseColorIndex];

            if (isReturn){
                chooseViewIndex--;

                height += 30;

                if (chooseViewIndex==0){
                    isReturn = false;
                }
            }else {
                chooseViewIndex++;
                height -= 30;
                if (chooseViewIndex==9){
                    isReturn = true;
                }
            }
            colorView.style.height = height+"px";
        },500);
    }

    function stop() {
        clearInterval(timer);
    }






})();
