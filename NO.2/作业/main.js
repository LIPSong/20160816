/**
 * Created by liuyujing on 16/9/13.
 */


//计算"35"+59+80+"87.6"的和

var firstNum = parseFloat("35");
var sum = firstNum+59+80+parseFloat("87.6");
console.log(sum);

// 做一个计算器 实现两个整数的加、减、乘、除、取余
var num1 = parseFloat(prompt());
var num2 = parseFloat(prompt());
var markString = prompt();
var result;
*/
/*
* 1.书写格式
* */
/*
if (1) {
    if (1){
        if (1){
            if (1){

            }
        }
    }
}



//1.判断标记 是不是  + - * / %

if (markString==="+"||markString==="-"||markString==="*"||markString==="/"||markString==="%"){

    //2.如果用户输入的是+号,就进行加法运算
    if (markString==="+"){
        result = num1 + num2;
    }
    // 3.如果用户输入的是-号,就进行减法运算
    else if (markString==="-"){
        result = num1 - num2;
    }
    //4. 如果用户输入的是*号,就进行乘法运算
    else if (markString==="*"){
        result = num1 * num2;
    }
    // 如果用户输入的是/号,就进行除法运算
    else if (markString==="/"){
        result = num1 / num2;
    }else {
        result = num1 % num2;
    }

}

// else {
//     console.log("您输入的符号有误!");
// }
// if (result){
//     console.log(result);
// }

// result = result ? result:"您输入的符号有误!";
// console.log(result);

// console.log(result);


* result 如果是undefined -> 进入else (条件是假)
* result 如果是有值的 -> 进入if后面的花括号 (条件是真)

// if (result){
//     console.log("111");
// }else {
//     console.log("222");
// }


// 使用三目运算和if语句 分别实现 当用户输入"你好"回应"很高兴见到你"，如果用户输入任何其他的 全部回应"我汉语还不是很好"

var user = prompt();
if (user === "你好"){
    console.log("很高兴见到你");
}else {
    console.log("我汉语还不是很好");
}

user === "你好"?console.log("很高兴见到你"):console.log("我汉语还不是很好");
*/

//某餐馆 每天顾客是10人，根据顾客点的菜品（红烧鸡块（25）、小炒肉（20））、土豆丝（15）），计算总共的流水
/*
var chooseCook = prompt();

var price = 0;

if (chooseCook === "红烧鸡块"){
    price += 25;

}else if(chooseCook === "小炒肉"){
    price += 20;

}else if(chooseCook === "土豆丝"){
    price += 15;
}


if (chooseCook === "红烧鸡块"){
    price += 25;

}else if(chooseCook === "小炒肉"){
    price += 20;

}else if(chooseCook === "土豆丝"){
    price += 15;
}
if (chooseCook === "红烧鸡块"){
    price += 25;

}else if(chooseCook === "小炒肉"){
    price += 20;

}else if(chooseCook === "土豆丝"){
    price += 15;
}

//.....7

console.log("今天的流水是"+price+"元");
*/
//计算上道题的 毛利  红烧鸡块（成本10）、小炒肉（8）、土豆丝（4）

/*
var chooseCook = prompt();

var price = 0;

if (chooseCook === "红烧鸡块"){
    price += (25-10);

}else if(chooseCook === "小炒肉"){
    price += (20-8);

}else if(chooseCook === "土豆丝"){
    price += (15-4);
}

console.log("今天的毛利是"+price+"元");
*/
//-------新课---------
var markString = "+";

/*
*switch (markString): ☹ 询问markString他的值 是哪一种情况呢?
*{}:进入询问的判断领域（脑袋中设想出的 某些情况）
* ☺ case:每一个case都是提前设想的一种情况 如果满足这种情况  就会执行这个设想 里面的代码
* : 如果设想成立 就会进入冒号后面  执行里面的代码
* break; 如果满足 这种设想 执行完成了 里面的代码  并且 不希望 让他继续往下去 执行  就是用 break;来隔开
* ♯♯♯如果 case 里面 没有写 break; 不管后面的条件 是不是成立的   都会继续往下执行  知道遇到break; 或者执行到最后一行 才算结束
* */
// switch (markString){
//     case "+":
//         console.log("正在进行加法运算");
//         break;
//     case "-":
//         console.log("正在进行减法运算");
//         break;
//     default:
//         console.log("输入错误");
// }
/*
* 张老师:你吃饭了吗?
* 学生:吃饭啦 -> 张老师:送你瓶水
* 学生:还饿着呢 -> 张老师:送你一个煎饼
* 学生:没吃饱 -> 张老师:送你半个咬过的煎饼
* */
/*
var question = "你吃饭了吗?";

//学生回答
var answer = prompt();

var result;
//switch (设想条件的变量)
switch (answer){
    case "吃饭啦":
    //    张老师 执行设想的计划
    result = "送你瓶水";
        // break;
    case "还饿着呢":
        //    张老师 执行设想的计划
        var last = result?result:"";
        result = "送你一个煎饼"+last;
        break;
    case "没吃饱":
        //    张老师 执行设想的计划
        result = "送你半个咬过的煎饼";
        break;
    default:
        //任何条件 都不满足的时候 执行
        result = "你吃饭了吗?";
}
console.log(result);
*/
/*
* 当不添加break的时候
* 进入满足的条件之后   会继续往下执行
* ✭✭✭✭✭后面的值 会把前面的值覆盖掉
* ✭✭✭✭✭ 当咱们得到的值 与 期望的值 不同的时候 -> 去检查是不是丢失了break
* */

/*
switch (?){

}

? 号的位置   都可以写什么?
随你便~
字符串
数字
数组
对象

 switch 会帮咱们 严格区分 变量的内容  不会出现 "1" 和1 相同的情况

 ✭✭✭✭✭default可以写在 最上面 但是 必须添加break
*/
/*
var num = "4";
switch (num){
    default:
        console.log("都不对");
        break;
    case "1":
        console.log("\"1\"");
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
}
*/
// ---------循环语句----------------
// for (var i=0;i<10;i++){
//     console.log(i);
// }

/*
* for循环的执行流程
* 1.var i=0 先执行  初始化变量的代码
* 2.i<10 开始判断 是不是 满足 这个条件
* 3.如果满足判断条件 就去执行循环的代码 / 如果不满足 就跳出循环
* 4.变量 自己给自己加了1
* 5.跳入第二步
* */

/*
* 午睡前 小练习
*
* 曹老师 每说三句话 说完之后都会加一个"呃"
* 说了100句话 一共加了多少个"呃"
* 并且 输出 曹老师 说过内容
* */
/*
var n = 0;
for (var i=1;i<=100;i++){

    if (i%3 === 0){
        n++;
        console.log("第"+i+"句话"+"呃");
    }else {
        console.log("第"+i+"句话");
    }
}
console.log("一共说了"+n+"带呃的话");

*/

//--------while----------
// var num = 10000;
// while (num>0){
//     num-=5;
//     console.log("1111111");
// }

//如果电脑 是好的  一直输出 正在工作
//如果电脑 坏了 就输出 停止工作

// var status = "好的";
// while (status === "好的"){
//     status = prompt();
//     console.log("正在工作");
// }
// console.log("停止工作");

//当 num = 0的时候  就停止循环
// var num = 100;
//
// while (num > 0){
//     num--;
// }
/*
var num = 1;

//while如果num 大于1000才回去执行循环语句
//do while 不管条件是不是满足  都会先去 执行一次 但是 他不会影响总共的 执行次数
do {
    num+=1;
    console.log("执行了!");
}while (num<10);

//计算 一个月给咱们 打扫了多少次
//支付了 阿姨多少工资（天/100元）

var days = 0;//天数
var workDays = 0;//工作的天数
do{
    console.log("正在打扫~");
    days++;
    if (days%7 === 0){
        //每七天是一周 减去不工作的两天
        workDays += 5;
    }
}while (days<=30);
console.log("阿姨的工资是:"+((workDays+(31%7))*100));
*/

// for (var i=0;i<1000;i++){
//     if (i===500){
//         break;
//     }
//     console.log(i);
// }

for (var i=0;i<10;i++){

    if (i===3){
        continue;
    }
    console.log(i);
}

for (var i=0;i<6;i++){
    var score = parseFloat(prompt());
    if (score<=40){
        // break;
        continue;
    }
}


//如果是周末就去跑步100圈
//否则 上班

var freeDay = true;
if (freeDay){
    for (var i=0;i<100;i++){
        console.log("已经跑了"+i+"圈");
    }
}else {
    console.log("上班");
}

/*
* 1.输入一个季节 输出这个季节的特征
* 2.找出1-10000中所有的偶数
* 3.当1-10000的偶数相加的时候 大于10000 跳出循环 显示"找到最完美的数字"
* 4.计算1-100的和（除了33,44,55）
* 5.计算1-10000的和、积
* 6.打印一个直角三角形
* 7.查询1-100中的22、55、70这几个数字 并输出
* 8.使用循环语句 打印一个三角形乘法口诀
* 9.某餐馆 每天顾客是10人，每个顾客最多可点5个菜，根据顾客点的菜品（红烧鸡块（25）、小炒肉（20））、土豆丝（15）），计算总共的流水
* 10.一年的房租是80000块  红烧鸡块（成本10）、小炒肉（成本8）、土豆丝（成本4） 计算一个月的 毛利是多少
* 11.写一个小游戏的逻辑
 1）选择不同的英雄（每一个英雄的血量 攻击力 不同）
 2）选择不同的怪物（每一个怪物的血量 攻击力 不同）
 3）输入技能  互相伤害
 4）谁的血量为0 宣布游戏结束
* */
