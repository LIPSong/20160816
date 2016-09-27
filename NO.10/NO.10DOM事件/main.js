/**
 * Created by liuyujing on 16/9/27.
 */
(function () {

    var input = document.getElementById("password");
    input.onfocus = function (event) {
      console.log("开始输入");
        console.log(event);
    };
    input.onblur = function () {
        console.log("输入完毕"+this.value);
    };
    input.onchange = function () {
      console.log("change"+this.value);
    };
    input.oninput = function () {
        console.log("inputing"+this.value);
    };
    input.onselect = function () {
        console.log("onselect"+this.value);
    };

    var div = document.getElementById("ddd");
    div.oncopy = function () {
        console.log("copy");
    };

    input.onpaste = function () {
        console.log("onpaste");
    };
    input.onkeydown = function (event) {
        console.log(event);
    };

    div.onclick = function (event) {
        console.log(event);
    };

})();
