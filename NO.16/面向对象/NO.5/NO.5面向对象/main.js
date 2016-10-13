/**
 * Created by liuyujing on 16/9/19.
 */

window.onload = function () {

    var Person = function (a) {
        console.log(typeof this);
    };
    var ming = new Person();
    ming.name = "11";
    var ming1 = new Person();
    ming1.name = "113";
    console.log(ming,ming1);

    var hero = new Hero();
    hero.name = "345";
    console.log(hero);
    hero.power();

    var xiaoMing = {
        name:"xiaoming",
        movve:function () {
            return 50;
        }

    };
// xiaoMing.prototype.run = function () {
//   console.log("run");
// };
    console.log(xiaoMing.movve());
    console.log(xiaoMing.__proto__);

    console.log(typeof xiaoMing);
    console.log(Math.PI);

    var date = new Date();
// console.log(date.getDate());
    console.log(date.valueOf());

    var regexp = new RegExp("w","g");
    var string = "rwhdfgewwgty";

    console.log(string.match(regexp));

    console.log(this);
    function aaa() {
        console.log(this);
    }
    aaa();
    var Class = function () {
        console.log(this);
    };
    var vv = new Class();


    var Person = function (name,age) {
        this.name = name;
        this.age = age;
        console.log(this);
    };
    var xiaoMing = new Person("小明",20);
    var xiaoMing2 = new Person("小li",10);
    console.log(xiaoMing,xiaoMing2);

    var div = document.createElement("div");
    document.body.appendChild(div);
div.style.height = "100px";
    div.style.width = "100px";
    div.style.background = "red";
    // div.className = "mmm";
    console.log(div.className);
    var att = document.createAttribute("class");
    att.value = "bg";
    // div.setAttributeNode(att);

    div.addEventListener("click",function () {
       alert("1");
    });

    var input = document.getElementById("userName");
    // input.focus();

};
