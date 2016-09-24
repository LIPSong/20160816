/**
 * Created by liuyujing on 16/9/14.
 */

//-----------字符串-----------

//    1）可使用""/''
var string1 = "字符串";
var string2 = '字符串';

// 2）如果字符串中包含字符串 那就使用"我是'字符串'"
var string3 = "存在'单引号'";

//3）转义符 \ 如果想在字符中 添加"" '\"引用的内容\"' 在需要转换字符的前面 添加\
var string4 = "\"\"";

//4）换行符 \n
console.log("12345678\n23456789");

//5）空一个tab \t
console.log("12345678\t23456789");

//6）多行字符串 、内容、 有些代码编辑器和浏览器不支持 尽量不这么去写
// var string5 = `123
// 223
// 323`;
// console.log(string5);

//）+号 连接字符串 "11"+"22" -> "1122"
var string6 = "111"+"222";
console.log(string6);

//-------字符串基本使用 小练习-------------
//1.换一个tab
for (var i=0;i<100;i+=5){
    document.write(i,"\t");
}
console.log("ertyuioiu\ntytrukjhgfds\nertyuitrew");

//----------字符串的操作---------
//1）length：获得字符串的长度length
var string7 = "我是爱学习爱思考的技术研究者";
console.log(string7.length);

//2）charAt():可通过下标获得对应字符 也可以直接 字符串变量[下标]
//下标 是从0开始
console.log(string7.charAt(0));
console.log(string7[0]);

// 3）charCodeAt()可获得字符对应的ascii对应的十进制数字
var string8 = "fewrtyuiuytre";
console.log(string8.charCodeAt(1));


//4)String.fromCharCode(70,66)把多个十进制数字 转成字符串
console.log(String.fromCharCode(70,66));

//5）toUpperCase()：全部大写
var string9 = "wertyuiuytrew";
console.log(string9.toUpperCase());

//6）toLowerCase()：全部小写
var string10 = "WERTHJGFDSAWERTY";
console.log(string10.toLowerCase());

//7）toLocaleLowerCase():全部小写
console.log(string10.toLocaleLowerCase());

// 8）toLocaleUpperCase()全部大写
console.log(string9.toLocaleUpperCase());


//9）indexOf():搜索指定字符出现的位置 注意 查找到就不会继续查找
var string11 = "我是卖报的小行家是小行家";
/*
console.log(string11.indexOf("小行家"));

console.log(string11.indexOf("小行家",8));

//10）lastIndexOf()返回最后一次被搜索字符的位置 注意 查找到就不会继续查找
console.log(string11.lastIndexOf("小行家"));
//指定一个从后往前查的位置
console.log(string11.lastIndexOf("小行家",8));
//如果出现负数 就证明 没有查找到
console.log(string11.lastIndexOf("小家",8));

*/
// 11）substring(1,3) 获取某个区间的字符串 不是从指定位置开始 而是从第一个位置开始
//我是卖报的小行家是小行家
/*
* 《1》
* (x1,x2)
* x1 是起始位置 从哪一个位置开始
* x2 长度
* substring 里面的x2 表示的是 从头开始的长度 并不是从起始位置开始的长度
* */
/*
* 《2》
* (x1,x2)
* x1 是长度
* x2 是起始位置
*
* */
/*
* 如果 数字小的在前面 总结->《1》
* 如果数字大的在前面 总结->《2》
* */
/*
* function(start,end) {}
* */
// console.log(string11.substring(5,2));


//12)string2.substr(-2,3); 获取某个区间的字符串 负数为最后一个字符向后的位数 是从指定位置开始
//"我是卖报的小行 家是小 行家"
//长度是从起始位置开始计算
// console.log(string11.substr(1,3));
//当数字是负数的时候  是从后向前截取
//最后一个字符是-1
/*
* 负数的时候  从倒数某个字符开始 截取指定长度的字符
* substr 第二个参数 不存在负数情况 第二个参数是长度
* */
// console.log(string11.substr(-4,1));

/*
* substring 截取 开始 到 结束 的位置
* substr 截取 开始 到 指定的长度 （长度没有负数）
* */


//13)string2.slice(1,-1) 获取某个区间的字符串 可以使用-1代替字符串的最后一个字符位置
//"我是卖报的小行家是小行家"
/*
*  slice(开始,结束)
*  只能从开始位置 向结束位置  去数
 */
console.log(string11.slice(2,3));

//"我是爱发红包的张老师"
var message = "我是爱发红包的张老师";
// 1.
console.log(message.slice(3,6));
//2.
console.log(message.substr(3,3));
//3.
console.log(message.substring(3,6));
//4.
console.log(message.substring(6,3));
//5.
// indexOf
//index 获得到的发红包的位置
var index = message.indexOf("发红包");
//result需要拼接的结果
var result = "";
for(var i=0;i<3;i++){
    // result = result+message[index+i];
    //oneString 得到的每一个字符
    var oneString = message.charAt(index+i);
    result = result+oneString;
}
console.log(result);

//14）search()搜索字符串位置 里面可写正则表达式
var string12 = "我是好学生学生";
console.log(string12.search("学生"));

//15）match()查找字符串 并提供一个包含查询字符、索引位置、查询原内容的数组 也可使用正则表达式
console.log(string12.match("学生")[0]);

//16）replace()替换字符  可使用正则string2.replace("WF","#")
/*
* （x1,x2）
* x1 查找的值
* x2 替换的值
* */
console.log(string12.replace("学生","程序员"));

//17）split()分割字符串string2.split(",")
//可以把字符串分割成数组
var string13 = "张英才 刘玉静";
var list = string13.split(" ");
console.log(list);

//18）anchor()	创建 HTML 锚
var name = "home";
console.log(name.anchor("home"));

//数组:一个可以盛放 连续内容的 容器
//存放的内容 是有顺序的
//可以通过  索引（下标） 来查找到 对应的内容
//下标是从0开始
//数组的公式: var list = ["内容1","内容2"];
//取数组中 某个值 list[下标];  list[0];
//给数组赋值/更改数组中的某一个元素/添加元素 list[下标] = "新的内容";

var list2 = ["11","222","333"];
list2[1] = "5555";
console.log(list2[1]);

//遍历数组:挨个读取数组中每一个元素
for (var index in list2){
    console.log(list2[index]);
}

for (var i=0;i<list2.length;i++){
    console.log(list2[i]);
}
