/**
 * Created by liuyujing on 16/9/21.
 */
// var xiaoHong = {name:"124"};
// xiaoHong.name
//通过函数创建类 和 对象
var Person = function (_name) {
    // window.console.log(this);
    // this 表示Person将要实例化出来的对象
    // this.name 表示 Person实例化出来的对象里面一个叫name的属性
    // this.name = "小明"; 表示 所有通过Person这个类 创建的对象  名字都是小明
    // _name 一个参数 传进来的内容 是什么 就代表 什么
    // this.name = _name; //Person实例化出来的对象 name的值是_name
    this.name = _name;
    console.log(this.name);
};

//通过类 创建对象 类名首字母要大写  对象名首字母小写

// 1. 可以通过new 这个关键字 来创建一个对象
// 2. 通过调用函数的方式 创建对象

//把抽象的事物 具体化  -> 创建对象
var huLuWa = new Person();

var xiaoMing = Person();

//可以通过typeof 来查看对象 属于哪一个类
console.log(typeof huLuWa);
console.log(typeof xiaoMing);

//this 这个
// this === window
window.console.log(this);//当前窗口对象
function mmm(v) {
    window.console.log(this);//当前窗口对象
}
window.mmm("vvvv");

// this 这是 这个
//指当前的对象   我(对象)是谁
window.console.log();
window.document.write();
//实例化 ：通过一个类 创建对象
//前提是 写在类的外面
//当在类的外面去打印 this 的时候  当前对象 是窗口对象 this就表示窗口对象
// Window -> 咱们是在 通过Window这个类  创建的window对象中  在写this 与this最接近的(使用哪个对象去调用)是Window实例化出来的对象
//函数内 this的值  也是Window对象 是因为 函数里面 this最接近的对象 (使用哪个对象去调用) 依然是Window对象

//类里面 this 就表示 将要实例化出来的对象
// 是 这个类 将要实例化出来的对象 可以理解成是《自己》

var xiaoLi = new Person("小李");
console.log(xiaoLi.name);
console.log(xiaoLi);

var xiaoMeng = new Person("小梦");
console.log(xiaoMeng.name);
console.log(xiaoMeng);

// var hero = {};
// var Hero = function () {
//     name = "XXX";
//     blood =1000;
// };
// var Hero2 = function () {
//     name = "XXX";
//     blood =1000;
// };

var Hero = function (_qqq,www) {
    //this:通过Hero创建的对象是谁  就代表谁
    this.name = _qqq;//aoTeMan的name 是传过来的_name("奥特曼")
    this.blood = www;//aoTeMan的blood 是传过来的_blood（1000）
//    如果再创建一个对象  this就代表另外一个对象
};

var aoTeMan = new Hero("奥特曼",1000);
// aoTeMan.name = "奥特曼";
console.log(aoTeMan);

var heiMao = new Hero("黑猫警长",2000);
console.log(heiMao);


//创建 3种车
//1.自行车 轱辘的数量 驾驶的方式
//2.火车  轱辘的数量 驾驶的方式
//3.汽车 轱辘的数量 驾驶的方式

var Car = function (name,num,drive) {
    this.name = name;
    this.num = num;
    this.drive = drive;
};


var car1 = new Car("自行车",2,"脚蹬");
var car2 = new Car("火车",20,"热动力");
var car3 = new Car("汽车",4,"汽油");
console.log(typeof car3);
//内置对象
// window
// document
// body

//HTML上面的每一个元素  也是一个对象 dom
//文档上面的每一个元素  都是一个dom对象
//获得body
// var bodyEle = document.body;
// console.log(bodyEle);

//等页面加载完成的时候  再去加载javaScript文件
// onload()
// window.onload();
//写在文件的最上面

window.onload = function () {
    /*
    var bodyEle = document.body;
    console.log(bodyEle);
//    获得元素
//    1.id
//    2.标签名 是一个数组
//    3.类名 是一个数组
    var gameDiv = document.getElementById("game");
    console.log(gameDiv);

    var divs = document.getElementsByTagName("div");
    console.log(divs);

    var desOfP = document.getElementsByClassName("des");
    console.log(desOfP);
*/
//    通过js代码 写入到html文件中
//     1.通过嵌入html代码 innerHTML
//     2.创建元素对象  添加到另外一个对象的子节点中 appendChild
/*
* 1.有要嵌入的内容
* 2.找到要嵌入的节点（元素）
* 3.嵌入
* */

// var inputMessage = "<div></div>";
//     var node = document.body;
//     node.innerHTML = inputMessage;

// document.body.innerHTML = "<div></div>";
//
//
var divEle = document.createElement("div");
var node = document.getElementById("game");
    // node.innerHTML = inputMessage;
node.appendChild(divEle);

/*
* function 创建类
* this
* 获得HTML元素
* 写入HTML元素
* */
    node.style.height = "100px";
    node.style.width = "100px";
    node.style.background = "red";
};

