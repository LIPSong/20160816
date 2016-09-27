/**
 * Created by liuyujing on 16/9/27.
 */
(function(){

    var div = document.getElementById("content");
    // var lastTimeStamp = 0;
    div.onclick = function (event) {
        div.textContent = "点击后 松开手才会更改";
        // alert("");
        // console.log(event);
        // console.log(this);
        // var result = event.timeStamp-lastTimeStamp;
        // if (result>3000){
        //     alert("长按");
        // }else {
        //     alert("单击");
        // }
        console.log(event);
        // lastTimeStamp = event.timeStamp;
    };

    // var listener = function (event) {
    //     alert("");
    //     console.log(event);
    // };
    // div.addEventListener("click",listener);

    var doubleDiv = document.getElementById("double");
    doubleDiv.ondblclick = function (event) {
        alert("");
    };

    console.log(document.body.parentNode);


    var downDiv = document.getElementById("down");
    downDiv.onmousedown = function (event) {
        console.log(event);
        downDiv.textContent = "按下就会更改";
    };
    downDiv.onmouseup = function () {
        downDiv.textContent = "鼠标按下";
    };

    var enterDiv = document.getElementById("enter");
    enterDiv.onmouseenter = function (event) {
        enterDiv.style.background = "red";
        console.log("onmouseenter");
    };
    enterDiv.onmouseleave = function () {
        enterDiv.style.background = "#fff";
        console.log("onmouseleave");
    };
    enterDiv.onmousemove = function () {
        console.log("onmousemove");
    };
    enterDiv.onmouseover = function () {
        console.log("onmouseover");
    };
    enterDiv.onmouseout = function () {
        console.log("onmouseout");
    };

    var inputDiv = document.getElementById("userName");
    inputDiv.value = "请输入用户名";
    inputDiv.onkeydown = function (event) {
        console.log("onkeydown");
    };
    inputDiv.onkeypress = function (event) {
        console.log(event);
        console.log(this.value);
    };
    inputDiv.onkeyup = function (event) {
        console.log("onkeyup");
    };

    inputDiv.onfocus = function () {
        console.log("开始输入");
        inputDiv.value = "";
    };
    inputDiv.oninput = function () {
        console.log("正在输入");
    };
    inputDiv.onselect = function () {
        console.log("里面的内容被选择的时候");
    };
    inputDiv.oncopy = function () {
        console.log("用户正在拷贝");
    };
    inputDiv.oncut = function () {
        console.log("用户正在剪切");
    };
    inputDiv.onpaste = function () {
        console.log("用户正在粘贴");
    };
    inputDiv.onblur = function () {
        console.log("用户输入完毕"+this.value);
    };
    inputDiv.onchange = function () {
        console.log("onchange");
    };


})();
