/**
 * Created by liuyujing on 16/9/28.
 */

(function(){

    // function aa() {
    //
    // }
    //
    // aa();

    /*
    写web
     html:模板
     css:样式
     js:交互
    */
/*
    // var div = document.getElementById("start");

    var timer;
    function start() {

        var i = 0;
        timer = setInterval(function () {

            document.getElementById("start").textContent = i;
            i++;

        },1000);

    }
    // div.onclick = start();
//    <div id="start" onclick="start()">开启</div>


    // var stopDiv = document.getElementById("stop");
    // stopDiv.onclick = function () {
    //     clearInterval(timer);
    //     document.getElementById("start").textContent = "开启";
    // };


    function stop() {
        clearInterval(timer);
        document.getElementById("start").textContent = "开启";
    }
*/

    var startDiv = document.getElementById("start");

    var timer;
    startDiv.onclick = function () {
        var i=0;
        timer = setInterval(function () {
          startDiv.textContent = i;
          i++;
      },1000);
        // timer = 新值；
    //    timer = setInterval;
    //    timer = setInterval;
    //    timer = 3;
    };

    var stopDiv = document.getElementById("stop");
    stopDiv.onclick = function () {
        //timer？3
        clearInterval(timer);
        startDiv.textContent = "开启";
    };


    //print() 打印页面
    var printDiv = document.getElementById("print");
    printDiv.onclick = function () {
        // print();
        if (confirm("是否需要打印")){
            print();
        }
    };

    var openDiv = document.getElementById("openNewWindow");

    var newWindow;
    openDiv.onclick = function () {
        newWindow = open("other.html","_blank","width=300,height=300",true);
    };

    var closeDiv = document.getElementById("closeWindow");
    closeDiv.onclick = function () {
      console.log(newWindow.closed);
        if (newWindow.closed===false){
            newWindow.close();
        }
    };


    var moveDiv = document.getElementById("moveWindow");
    moveDiv.onclick = function () {
      newWindow.moveBy(300,200);
    //    http:不加密 超文本传输协议
    //    https:加密
    //     newWindow.moveTo(300,200);
    };
    // moveDiv.onmousemove = function (event) {
    //     newWindow.moveTo(event.x,event.y);
    // };

    var resize = document.getElementById("resize");
    resize.onclick = function () {
        newWindow.resizeTo(100,100);
    };

    var scroll = document.getElementById("scroll");
    scroll.onclick = function () {
        console.log("111");
        // scrollBy(0,400);
        scrollTo(0,0);
    };


   console.log(window.navigator.appCodeName);
   console.log(window.navigator.appName);
   console.log(window.navigator.appVersion);
   console.log(window.navigator.cookieEnabled);
   console.log(window.navigator.platform);
   console.log(window.navigator.userAgent);


   console.log(window.screen.availHeight);
   console.log(window.screen.availWidth);
   console.log(window.screen.height);
   console.log(window.screen.width);
   console.log(window.screen.colorDepth);
   console.log(window.screen.pixelDepth);


    var nextView = document.getElementById("next");
    nextView.onclick = function () {
        // window.history.forward();
        window.history.go(1);
    };


    var loadView = document.getElementById("load");
    loadView.onclick = function () {
        // location.reload(true);
        location.assign("other.html");
        // location.replace("other.html");
    };

    var getLocation = document.getElementById("getLocation");
    getLocation.onclick = function () {
        // console.log(location.hash);
        console.log(location.search);
    };

})();
