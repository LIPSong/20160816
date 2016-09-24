/**
 * Created by liuyujing on 16/9/12.
 */

"use strict";
//"use strict"; 可以杜绝 不小心 忘记加var的情况 会有红色警告提示


// var name;
// var des;

// var name,des;
//"" '' 表示 里面的是一段文字

//    HOST 固定的   不需要改变 -> 这时候 可以认为HOST是一个常量
// var HOST = "192.168.16.111";
// HOST = "12345678";

/*
 name:变量名 标识  表示后面内容的
 "张英才":值 内容
* */
// var name = "张英才";
// name = "张三丰";
//两个name是同一个变量  但是 里面的值 不相同

// 上面的name有var,这先声明了下面再用的var,后面的是不是变成了全局变量？还是仅仅只是改变了值？
/*
不一定
有条件
1.如果这个变量  是在  最外层   他就是一个全局变量
2.如果他在某一个花括号内   他就是一个 局部变量
* */

//不使用var 声明的 是一个全局变量
// 全局变量 :从声明的位置开始 往下  全部都可以 使用 这个变量
// age = 11;

/*
if(1){
    var aa = "111";
}

var a111 = "222";
var NAME = "111";
// var age =

var liuYuJing = "第一个单词的《首字母》 《小写》 其他单词的 《首字母》 《大写》";
*/
//单行注释
/*
多行注释
多行注释
多行注释
多行注释
多行注释
多行注释

*/

// window.console.log("输出的内容");

//在浏览器的控制台中显示
// console.log("输出的内容");

//write 会在HTML文档中显示出来
// document.write("输出的内容");

//输入调试的内容 prompt
/*
var message = prompt();
console.log(message);

console.error("1111");
console.info("111111111");
console.warn("111111");
console.dir("111111");

console.group();
console.group("group1");
console.group("group2");
*/
/*
var name = "字符串";
var ageString = "20";

var age = 20;
var score = 60.5;

//true
var isSuccess = false;

var sum = 1+1;
console.log(sum);

var xiaoMingAge = 17;
xiaoMingAge=18;
var xiaoHongAge = 18;
// () 也是提高运算的优先级
//求小明和小红 年龄的 平均年龄

//(17 + 18)/2
var avg = (xiaoMingAge + xiaoHongAge)/2;
console.log(avg);

//汉语描述
//小红的年龄加上1 赋值给了 小红的年龄
//这时候 小红的年龄 对应的值  就更新了
xiaoHongAge = xiaoHongAge + 1;
console.log(xiaoHongAge);

// +=
//汉语描述
//小红的年龄 加上一个1 再赋值给本身
xiaoHongAge += 1;
console.log(xiaoHongAge);

xiaoMingAge *= 5;
console.log(xiaoMingAge);
*/

//只要有一个变量 是字符串  使用+号 就不再是数学运算
//拼接字符串 -> 把几个字符串 放到一个字符串里面
//✭✭✭✭✭ 如果想让两个是 《数字》的字符串 去进行数学运算需要转换成 数字（Number）类型
/*
var num1String = prompt();
var num2String = prompt();
//parseFloat 把输入的字符串 转换成数字
var num1 = parseFloat(num1String);
var num2 = parseFloat(num2String);
var result = num1+num2;
console.log(result);

var age11 = parseFloat(prompt());
age11 += 1;
console.log(age11);
*/
// ++ 表示自增的符号 自己本身加1
// -- 表示自减的符号 自己本身减1

// var age = 10;
// var newAge = ++age;
// // age++;
// console.log(newAge);


// var age = 10;
// var newAge = age--;
// console.log(newAge);

/*
* ✭✭✭✭✭
* ++（--）在前 先自加 再赋值（运算）
* ++（--）在后 先赋值（运算） 再自加
* 虽然有一个 赋值（运算）的先后顺序
* 但是 最终 还是得自加或自减
* */


// var age1 = 10;
// var age2 = 14;
// var result = (age1++ + ++age2)/2;
// console.log(result);


//✭✭✭✭✭
// var age = 10;
//++age 之后 age:11
//--age 之后 age:10

// var result = ++age - --age -  age;
// console.log(result);

// age++;
// console.log(age);

//-8
//-9
//-10

/*
* １１－９－１０
* 11-10-10
* */


// var age = 10;
// var age = 10;

// var age = 10;
// if (true){
//
// }


// if (true){
//     var age = 10;
// }
// var age = 10;

/*
var score1 = "60";
var score = 60;

// var result = score1 == score;

// var result = score1 === score;

// var result = score1 != score;
var result = score1 !== score;
console.log(result);


var age = parseFloat(prompt());
console.log(age >= 10);
*/

//---------流程控制语句------
/*
* 张老师心里面寻思:
* 1.如果你吃饭了 我就送你一瓶矿泉水
* 2.如果你没吃饭 我就送你一个煎饼
*
* 张老师:你吃饭了吗?
* 你:吃饭了
* 张老师 开始执行他的阴谋
* */
/*
//张老师说的
var question = "张老师:你吃饭了吗?";
console.log(question);

//被问的同学
var message = "没吃饭";
console.log("被问的同学:"+message);

//张老师
if (message === "吃饭了"){
    console.log("张老师:我就送你一瓶矿泉水");
}
if (message !== "吃饭了"){
    console.log("张老师:我就送你一个煎饼");
}
*/

/*
 * 张老师心里面寻思:
 * 1.如果你吃饭了 我就送你一瓶矿泉水
 * 2.否则 我就送你一个煎饼
 *
 * 张老师:你吃饭了吗?
 * 你:吃饭了
 * 张老师 开始执行他的阴谋
 * */

/*
var question = "你吃饭了吗?";
console.log("张老师:"+question);

var message = "吃饭了";
console.log("被问得同学:"+message);

if (message === "吃饭了"){
    console.log("我就送你一瓶矿泉水");

}else {
    console.log("我就送你一个煎饼");
}
*/


/*
 * 张老师心里面寻思:
 * 1.如果你吃饭了 我就送你一瓶矿泉水
 * 2.否则 我就送你一个煎饼
 *
 * 张老师:你吃饭了吗?
 * 你:吃饭了
 * 张老师 开始执行他的阴谋
 * */

var question = "你吃饭了吗?";
console.log("张老师:"+question);

var message = "吃饭了";
console.log("被问得同学:"+message);

/*
* 表达式:message === "吃饭了"
* 结果:冒号的前后 是结果
* "张老师:我就送你一瓶矿泉水"
* "张老师:我就送你一个煎饼"
* ? 是在询问表达式
* 如果成立 就执行第一个结果
* 如果不成立  就执行 第二个结果
*
* */
// var result = message === "吃饭了" ? "张老师:我就送你一瓶矿泉水":"张老师:我就送你一个煎饼";
// console.log(result);
console.log(message === "吃饭了" ? "张老师:我就送你一瓶矿泉水":"张老师:我就送你一个煎饼");
