/**
 * Created by liuyujing on 16/9/26.
 */

(function () {
/*
function move(type) {

    if(type==="window"){
        console.log("window");
    }else {
        console.log("otheer");
    }
}

window.move("");
*/



function Person() {

    //this.__proto__.constructor :this是使用那个构造器来创建
    console.log(this.__proto__.constructor);

    this.speak = function () {
        if(this.__proto__.constructor === Person){
            console.log("Person");
        }
        if(this.__proto__.constructor === Chinese){
            console.log("Chinese");
        }
        if(this.__proto__.constructor === English){
            console.log("English");
        }
    };

}

function Chinese() {
    Person.call(this);
}

function English() {
    Person.call(this);
    console.log("1111");
}

function inherit(subType,superType) {
    var _prototype = Object.create(superType.prototype);
    _prototype.constructor = subType;
    subType.prototype = _prototype;
}

inherit(Chinese,Person);
inherit(English,Person);


    //转换数据类型的方法（不同的父类 不能转换数据类型）
    /*
    * obj 要转换的对象名
    * className 要转换成为的数据类型（类名）
    * */
    function returnType(obj,className) {
        obj.__proto__.constructor = className;
    }

    var xiaoMing = new Chinese();

    // returnType(xiaoMing,English);

    xiaoMing.speak();

    console.log(xiaoMing);

    var tom = new English();
    tom.speak();
    console.log(xiaoMing);

    var list = [xiaoMing,tom];

    for (var i=0;i<list.length;i++){
        var obj = list[i];
        obj.speak();
    }


//练习：
//     var user = [管理员 普通用户];管理员 普通用户->共同父类User(write)
//    可以让同一个对象  使用同一个方法  有不同的实现
// 1.创建管理员和普通用户两个对象  都有录入的功能 但录入的权限是不同的

// 2.提升普通用户权限为管理员


function User() {
    this.write = function () {
        if (this.__proto__.constructor === Manster){
            console.log("有特殊权限 录入");
        }
        if (this.__proto__.constructor === NorUser){
            console.log("录入");
        }
    }
}

function Manster() {
    User.call(this);
}

function NorUser() {
    User.call(this);
}

inherit(Manster,User);
inherit(NorUser,User);

    var manster = new Manster();
    var norUser = new NorUser();

    var users = [manster,norUser];
    for(var i=0;i<users.length;i++){
        var user = users[i];
        user.write();
    }

    // var user = users[1];
    returnType(norUser,Manster);
    norUser.write();

// name color smell  开花功能 ->(根据花的类型  开不同类型的花)（多态实现）

    function Flower(name,color,smell) {
        this.openFlower = function () {
            if (this.__proto__.constructor===Rose){
                console.log(name+color+smell+"玫瑰开花");
            }
            if (this.__proto__.constructor===Cactus){
                console.log(name+color+smell+"仙人掌开花");
            }
        }
    }

    function Rose(name,color,smell) {
        Flower.apply(this,arguments);
    }

    function Cactus(name,color,smell) {
        Flower.apply(this,arguments);
    }

    inherit(Rose,Flower);
    inherit(Cactus,Flower);

    var rose = new Rose("好看的花","红色","香");
    rose.openFlower();
    console.log(rose);

})();
