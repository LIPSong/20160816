/**
 * Created by liuyujing on 16/9/22.
 */


// console.log(name);
//
// att();

// var wa = new Monster("青蛙");
// wa.att();
// console.log(wa);
//
// function xiaoming() {
//
// }
//
// window.xiaoming();
//
// function move() {
//     console.log("1111");
// }
//
// function move() {
//
// }
//最后一个函数 直接覆盖上一个函数


// window.move();
// window.move();




function Person() {

        this.move = function () {
            console.log("Person");
        };

}

function Chinese() {

    Person.call(this);

    //如果在某一个位置 改变this.__proto__(Chinese)
    // this.__proto__ = Person;

    /*
    * this.__proto__？
    * Chinese 调用自己的move
    * Person 调用父类的move
    * */
    if (this instanceof Person){
        this.move = function () {
            console.log("Chinese");
        };
    }

}



function inherit(subType,supuerType) {
    var _ptototype = Object.create(supuerType.prototype);
    _ptototype.constructor = subType;
    subType.prototype = _ptototype;
}

function polymorphic(obj,className) {
    obj.prototype = className.prototype;
    console.log("123",obj.prototype)
}

inherit(Chinese,Person);

var xiaoHong = new Chinese();
xiaoHong.move();

//改变xiaoHong的类型->Person
polymorphic(Chinese,Chinese);

xiaoHong.move();
// console.log(xiaoHong);


console.log(xiaoHong);





























/*
var Animal = function (_name,_type) {
    this.name = _name;
    this.type = _type;

    // var age = 10;//私有变量
    //私有方法
    // function move() {
    //     console.log("走走走~");
    // }
    this.move = function () {
        console.log("走走走~");
    }
};
Animal.prototype.att = function () {
    console.log("咬你");
};

var Monster = function (_name,_type,_blood) {
    //apply(this,[参数数组]);
    //call(this,参数列表);
    //arguments参数列表

    // Animal.apply(this,[_name,_type]);
    // Animal.apply(this,arguments);
    Animal.call(this,_name,_type);

    this.blood = _blood;
};

function inherit(supuer,sub) {
    var _prototype = Object.create(supuer.prototype);
    _prototype.constructor = sub;
    sub.prototype = _prototype;
}

// inherit(Animal,Monster);

var wa = new Monster("青蛙","两牺",100);
wa.move();
// wa.att();
console.log(wa);

//wa->Monster->Object
//?Monster->Object
//call->Animal.this
//Animal->Object
//Animal 添加的 原型方法 -> Monster 不能用
console.log(Monster.prototype.att);
console.log(Animal.prototype.att);
console.log(wa.__proto__);

*/









/*
function Person(_name,_age) {
    this.name = _name;
    this.age = _age;
    if (this instanceof Person){
        this.speak = function () {
            console.log("speak");
        }
    }
}

function Chinese(_name,_age) {
    Person.apply(this,[_name,_age]);
    if (this instanceof Chinese){
        this.speak = function () {
            console.log("Chinese");
        }
    }
}

// Chinese.prototype.speak = function () {
//     console.log("Chinese");
// };

function English(_name,_age) {
    console.log(arguments);
    Person.apply(this,arguments);
    if (this instanceof English){
        this.speak = function () {
            console.log("English");
        }
    }
}
// English.prototype.speak = function () {
//     console.log("English");
// };

function inherit(superType,subType) {
    var _prototype = Object.create(subType.prototype);
    _prototype.constructor = subType;
    subType.prototype = _prototype;
}

function returnType(obj,Class) {
    obj.__proto__ = Class.prototype;
}

inherit(Person,Chinese);
inherit(Person,English);

var chinese = new Chinese("小明",20);

var english = new English("tom",18);
returnType(english,Chinese);
english.speak();
returnType(english,English);
english.speak();

console.log(english instanceof English);

/*
onload = function () {
  var input = document.createElement("input");
    document.body.appendChild(input);
    var button = document.createElement("button");
    button.textContent = "确定";
    button.onclick = function () {
      alert(input.value);
    };
    document.body.appendChild(button);

    input.onkeydown = function (i) {
      console.log(i);
    };
    var firstDiv = document.createElement("div");
    firstDiv.innerText = "test";
    document.body.appendChild(firstDiv);

    var text = document.createTextNode("nihaoa");
    firstDiv.appendChild(text);
    console.log(document.getElementsByName("user"));
};
*/