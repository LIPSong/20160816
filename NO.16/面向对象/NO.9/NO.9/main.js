/**
 * Created by liuyujing on 16/9/25.
 */

(function () {


// function Person() {
//     this.move = function () {
//         if (this.__proto__.constructor === Chinese){
//             console.log("Chinese");
//         }
//         if (this.__proto__.constructor === English){
//             console.log("English");
//         }
//     }
// }
//
// function Chinese() {
//     Person.call(this);
// }
//
// function English() {
//     Person.call(this);
// }
//
// function inherit(subType,superType) {
//     var _prototype = Object.create(superType.prototype);
//     _prototype.constructor = subType;
//     subType.prototype = _prototype;
// }
//
// inherit(Chinese,Person);
// inherit(English,Person);
//
// function Animal() {
// }
//
// function returnType(obj,className) {
//     obj.__proto__.constructor = className;
// }

// var xiaoMing = new Chinese();
// xiaoMing.move();
// var xiaoMing = new English();
// returnType(xiaoMing,Chinese);
// xiaoMing.move();

    /*
    var mouseView = document.createElement("div");
    mouseView.style.cssText = "background:red;height:50px;width:50px";
    mouseView.innerText = "123456789";
    document.body.appendChild(mouseView);

    var removeMouseView = document.createElement("div");
    removeMouseView.style.cssText = "background:yellow;height:50px;width:50px";
    document.body.appendChild(removeMouseView);

    var add = function (event) {
        alert("");

    };
    mouseView.addEventListener("mousemove",add);

    removeMouseView.onclick = function () {
        mouseView.removeEventListener("mousemove",add);
    };

    var cloneItem = mouseView.cloneNode(false);
    cloneItem.innerText = "new";
    document.body.appendChild(cloneItem);
    document.body.replaceChild(cloneItem,mouseView);
    */

    var hourPointer, minPointer, secPointer;

    function getPointers() {
        hourPointer = document.getElementById("hour-pointer");
        minPointer = document.getElementById("min-pointer");
        secPointer = document.getElementById("sec-pointer");
    }

    function showTime() {
        var d = new Date();

        var secValue = d.getSeconds() * 6;
        var minValue = d.getMinutes() * 6;
        var hourValue = (d.getHours() % 12) * 30 + minValue / 360 * 30;

        secPointer.style.transform = "rotate(" + secValue + "deg)";
        minPointer.style.transform = "rotate(" + minValue + "deg)";
        hourPointer.style.transform = "rotate(" + hourValue + "deg)";
    }

    function init() {
        getPointers();

        showTime();

        setInterval(showTime, 1000);
    }

    init();

})();
