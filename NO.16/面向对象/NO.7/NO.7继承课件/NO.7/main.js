/**
 * Created by liuyujing on 16/9/22.
 */
onload = function () {

    /*
    //this表示当前的对象（自己）
    //当代码执行到 这个位置的时候 内置对象window 对象回去加载JavaScript代码
    //这时候 打印的this就是window
    console.log(this);


    //当执行到创建类的位置 在类里面去打印this就不再是window
    //类里面的this 就代表 将要被实例化的对象 -> 在类里面说自己 -> 就是类中的一个对象->this===类实例化的对象
    //《类》决定了《对象》《初始》的时候 所拥有的《特征》和《行为》 示例
    var Person = function (_name,_age,_sex) {

        this.name = _name;
        this.age = _age;
        this.sex = _sex;

        //行为示例
        this.useTool = function (toolName) {
            console.log("我在使用"+toolName);
        };
        this.eat = function (food) {
            if (food === "狗粮"){
                console.log("疯啦~");
            }else {
                console.log("不错！");
            }
        }
    };
    Person.prototype.move = function () {

    };

    //类方法 示例
    Person.die = function () {
        console.log("火星撞地球~");
    };

    Person.die();

    var boTe = new Person("波特",20,"男");

    console.log(boTe instanceof Number);

    console.log("是不是他自己的属性："+boTe.hasOwnProperty("move"));


    boTe.useTool("坦克");
    boTe.eat("面包");

    var xiaoHong = new Person("小红",20,"女");

    console.log(xiaoHong);
*/



/*
//练习
//    1.定义Car类 类中包含特征（颜色 品牌 车牌号）和行为（驾驶）
    var Car = function (_color,_which,_num) {
        this.color = _color;
        this.which = _which;
        this.num = _num;

        this.drive = function () {
            console.log(this.color+this.which+this.num+"在驾驶");
        }
    };

    //原型 示例
    Car.prototype.driveType = "";//添加特征 尽量在类中去添加
    Car.prototype.push = function () {
        console.log("推~~");
    };

    var aoTuo = new Car("红色","铃木","XXXXXX");
    aoTuo.driveType = "开";
    console.log(aoTuo.color,aoTuo.which,aoTuo.num,aoTuo.driveType);

//    drive 这个行为 是存在的  但是 可以使用 可以不使用
    aoTuo.drive();
    aoTuo.push();

    console.log(Car.prototype);
*/




/*
//call改变this 示例
    var Animal = function (_name) {
        this.name = _name;
        console.log(this);
    };
    var Person = function (_name) {
        Animal.call(this,_name);
      // this.name = _name;
    };

    var dog = new Animal("旺旺");
    var xiaoMing = new Person("小明");
*/
    /*
    * 创建对象的时候  就回去 调用 构造方法 -> 类名对象的方法
    * 创建《xiaoMing》的时候  的 执行过程
    * 1.进入 Person的构造方法
    * 2.进入 Person的构造方法 之后  会执行 Animal.call
    * 3.执行 Animal.call -> 进入Animal的构造方法 同时把 Person里面的this和参数name传入到Animal中
    * 4.这时候Animal中的this 就不再是Animal实例化的对象
    * 5.Animal（this） = Person(this) ->this现在就是Person里面的this
    * */







//    ----------继承---------
    function Person(_name,_age) {

        this.name = _name;
        this.age = _age;

        this.speak = function (messge) {
            console.log(messge);
        };
    }
    console.log(Person.constructor);
    console.log(Person.prototype.constructor);
    
    function Chinese(_name,_age,_like) {

        Person.call(this,_name,_age);
        this.like = _like;

    }

    //实现继承的方法
    //superType 父类
    //subType 子类
    function inherit(superType,subType) {
        //得到父类的原型
        var _prototype = Object.create(superType.prototype);
        //把父类的构造器指定成 子类的构造器
        _prototype.constructor = subType;
        //把子类的原型（真身）指定为父类的原型
        subType.prototype = _prototype;
    }

    //实现继承
    inherit(Person,Chinese);

    var xiaoMing = new Chinese("小明",19,"打球");
    console.log(xiaoMing);
    xiaoMing.speak("你好~");
    console.log(Chinese.prototype);


    var BeiJing = function (_name,_age,_like) {
        Chinese.call(this,_name,_age,_like);
    };

    //实现继承 让北京人类 继承 中国人的类
    inherit(Chinese,BeiJing);

    //创建好的北京人对象  就具备了 中国人的特征和行为 也具备了人类的特征和行为
    var xiaoLi = new BeiJing("小丽",18,"吃零食");
    console.log(xiaoLi);
    xiaoLi.speak("我在北京~");



    /*
    * 1.创建一个动物类
    * 2.创建一个怪物类 继承动物类
    * 3.创建一个英雄类 继承动物类
    *
    * 4.创建一个法术系的英雄类 继承英雄类
    * 5.创建一个物理系的英雄类 继承英雄类
    *
    * 6.创建一个法术系的怪物类 继承怪物类
    * 7.创建一个物理系的怪物类 继承怪物类
    *
    * 创建2个法术系的英雄
    * 创建2个物理系的英雄
    *
    * 创建2个法术系的怪物
    * 创建2个物理系的怪物
    * */



/*
    var Person = function (_name,_age) {
        this.name = _name;
        this.age = _age;

        console.log("111111",this);
        this.speak = function (message) {
            console.log(this.name+this.age+message);
        }
    };
    Person.prototype.move = function () {
        console.log("move");
    };

    var xiaoMing = new Person("小明",22);
    console.log(typeof xiaoMing);
    console.log(xiaoMing instanceof Person);
    xiaoMing.speak("nihao");
    console.log(xiaoMing.__proto__);


    var Chinese = function (_wuShu,name,age) {
        Person.call(this,name,age);
        this.wuShu = _wuShu;
    };

    function inherit(subType,superType) {
        var _prototype = Object.create(superType.prototype);
        _prototype.constructor = subType;
        subType.prototype = _prototype;
    }

    inherit(Chinese,Person);

    var xiaoLi = new Chinese("太极","小明",33);
    xiaoLi.move();
    xiaoLi.speak("niaho");

    var BeiJing = function (message,_wuShu,name,age) {
        Chinese.call(this,_wuShu,name,age);
        this.message = message;
    };

    inherit(BeiJing,Chinese);

    var xiaoHong = new BeiJing("12333","太极","小红",20);
    xiaoHong.move();
    console.log(BeiJing.prototype);
    console.log(xiaoHong.__proto__);
    console.log(xiaoMing.hasOwnProperty("speak"));
*/











};
