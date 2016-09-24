/**
 * Created by liuyujing on 16/9/8.
 */
"use strict";

"";
3;
11;

3,4,1;

console.log("我是'字符串'");

console.log('\"引用的\n内容\"');
console.log('\"引用的\t内容\"');

// var s = `123
// 223
// 323
// 423`;
// console.log(s);
var name = "小明";
var HOST = "192.168.1.20";

var name1 = "111",age = 20,num = 30;
console.log(name1,age,num);

var age11 = 10;
var sex11 = "男";
var name11 = "小明";
console.log("%d",age11,sex11,name11);


console.error(1);
console.info(1);
console.warn(1);
var obj = {name:"xiaoming",age:30,scores:[100,40,60]};
console.log(obj);
console.dir(obj);
console.group("group");
console.group("group1");
console.log(name1,age,num);
console.log(name1,age,num);
console.group("group2");
console.log(name1,age,num);
console.log(name1,age,num);

var a = "1";
var b = 2;
console.log(a==b);
console.log(a===b);

var isSuccess = false;
if (isSuccess){
    console.log("进入");
}
if (!isSuccess){
    console.log("进入2");
}

switch (a){

    case 1:
        console.log("数字1");
        break;
    case "1":
        console.log("字符串1");
        break;
    case {name:"1"}:
        console.log("对象1");
        break;
    case [1]:
        console.log("数组1");
        break;
    default:
        console.log("default");
}

var m = 1;
// while (m<=10){
//     m++;
//     console.log(m);
// }

do {
    m++;
    console.log(m);
}while(m>=10);

var sss = "123.5";
var num1 = parseInt(sss);
var num2 = parseFloat(sss);
console.log(num1,num2);

var cc = 1;
var dd = 2;
var rr = cc++ + dd;
console.log(cc);

var message = prompt();
console.log("您输入的是:",message);

