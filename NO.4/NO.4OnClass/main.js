/**
 * Created by liuyujing on 16/9/18.
 */
/*
var list = [1,2,768,45675,"5456"];
//可以通过下标 获得数组中的某个元素
//list 里面的第二个元素 他下标的下标就是1
var item1 = list[1];

//更改数组中的某一个元素
list[3] = 5555;
console.log(list);

//遍历数组
for (var i=0;i<list.length;i++){
    console.log(list[i]);
}
*/
//数组越界：超出数组的界限
/*
* for (var key in list){}
* key 是数组中 元素 的下标（键）
* 可以通过key 来得到 数组中的元素
* */
/*
for (var key in list){
    console.log(key);
    console.log(list[key]);
}

var index = 0;
while (index<list.length){
    console.log(list[index]);
    index++;
}

//特殊的数组
var list1 = [55];
*/
//如果想在数组中 去添加 键值对  只能够通过list1["key"] = "value";这种方式去添加
/*
* 键（key）值（value）对：
* key:关键字  钥匙
* value:内容/值 锁
* 只有 正确的钥匙 才能打开对应的锁
* 一个钥匙 对应一把锁
* 一个关键字 对应一个内容
* 在使用的时候 一定要确定 同一个数组中 一个key只能出现一次
* */
/*
list1["key"] = "value";
list1["name"] = "钢铁侠";
console.log(list1);

//通过下标来取值
var list2 = [22,55,66];
list2[2];

//通过字符串来取 数组中对应的内容
var heros = [];
heros["qqq"] = 100;
heros["www"] = 200;
*/
//---------数组操作-----------
/*
//1.length:获得数组的长度 注意 不要直接给他赋值
var list3 = [55,33,987,234,11,50];
console.log(list3.length);
//2.indexOf()：获得某元素的下标
console.log(list3.indexOf(987));
//3.拷贝数组 得到一个新的数组slice();
var list4 = list3.slice();
console.log(list4);
//3.获得数组中某一段的元素 生成一个新的数组 不会影响原来的数组
//3.1从某个下标到结束
var list5 = list3.slice(1);
console.log(list5);
//3.2从下标是X1的元素 到下标是X2的元素
var list6 = list3.slice(1,3);
console.log(list6);

//4.push：向数组的末尾添加元素
var cooks = ["小炒肉"];
var cookName = prompt("点个菜吧");
cooks.push(cookName);
console.log(cooks);

//5.pop：将数组的末尾元素删除
cooks.pop();
console.log(cooks);

//✭✭✭✭✭push pop 是操作的数组 最后一个元素


//6.unshift：向数组的头部添加元素 arr.unshift(元素)
var list7 = ["111","222","333"];
list7.unshift("000");
console.log(list7);

//7.shift：将数组的第一个元素删除 arr.shift()
list7.shift();
console.log(list7);
*/
//----------随堂小练习-------
// var list = [[111,44,768,345],["453","ert","twert","3423",6543]];
//1.遍历数组
//2.删除第二个元素中的6543
//3.删除list中每一个元素（数组）的第一个元素
//4.获得list每一个元素中的 第2-4个元素

//手动遍历
//1.获得list里面第一个数组中的每一个元素
// console.log(list[0][0]);
// console.log(list[0][1]);
// console.log(list[0][2]);
// console.log(list[0][3]);
//
// //2.获得list里面第二个数组中的每一个元素
// list[1][0];
// list[1][1];
// list[1][2];
// list[1][3];

/*
* 第一次循环
* i的值是0  符合i<list.length
* 进入外层的循环代码（包含了for）
* 等待外层循环代码 里面的for 循环结束之后 才会进入 《第二次循环》
*
* 第二次循环
* i的值是1  符合i<list.length
* 进入外层的循环代码（包含了for）
*
* */
// for (var i=0;i<list.length;i++){
//
//     // console.log(list[i]);
//     // i=0 item -> [111,44,768,345]
//     // i=1 item -> ["453","ert","twert",6543,"3423"]
//
//     var item = list[i];
//     for (var j=0;j<item.length;j++){
//
//         console.log(item[j]);
//
//     }
//
// }

//2.删除第二个元素中的6543
// var item = list[1];
// item.pop();

//3.删除list中每一个元素（数组）的第一个元素
// var item1 = list[0];
// item1.shift();
// var item2 = list[1];
// item2.shift();

// for(var i=0;i<list.length;i++){
//     var item1 = list[i];
//     item1.shift();
// }

//4.获得list每一个元素中的 第2-4个元素
// for (var i=0;i<list.length;i++){
//     var item = list[i];
//     var result = item.slice(1,3);
//     console.log(result);
// }


//8.splice 删除数组中的指定位置的内容 可以获得到删除的内容
/*
* start,deleteCount
* 开始的位置
* 删除的数量
* */
// var list55 = [33,55,77,11,45];
// var resultList = list55.splice(1,3);//得到删除的元素
// console.log(resultList);
// //原数组 被删除了 指定的部分
// console.log(list55);

/*
* 总结1
* splice 可以得到删除的内容  调用方法之后 得到的内容 就是 删除的内容
* splice 删除指定内容之后  原数组 会失去内删除的内容
* */

//找到指定位置  去替换成 指定内容
// var resultList = list55.splice(1,3,22,23);
// console.log(resultList);
// console.log(list55);

/*
* start,deleteCount,items
* items 在删除位置 补充的内容
* */
//--------------上午--------------
//-------------中午练习-----------
//[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
// var list = [[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];

// for (var i=0;i<list.length;i++){
//     for (var j=0;j<list[i].length;j++){
//         for (var k=0;k<list[i][j].length;k++){
//             console.log(list[i][j][k]);
//         }
//     }
// }
//
// list.splice(1,1);
// //pop()
// console.log(list);

//3.替换每一个元素中的第二个元素的第二个元素  为6
//var list = [[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
/*
for (var i=0;i<list.length;i++){
    var item = list[i][1];
    // item[1] = 6;
    item.splice(1,1,6);
}
var item = list[1][0];
item.push(99);
*/
//--------------下午内容----------------
//9.concat：合并数组生成一个新的数组
var list = [1,55,435,77];
var otherList = [44,33,22,11];
var allList = list.concat(otherList);
console.log(allList);

//10.sort：给数组排序 arr.sort()
allList.sort();
console.log(allList);

var chars = ["rerty","wrt","vert","tyre"];
// chars.sort();
// console.log(chars);

//reverse
chars.reverse();
console.log(chars);

//12.join：将数组使用指定字符转成字符串
var string = chars.join(" ");
console.log(string);

// var heros = [{name:"XX",att:100,blood:1000},{name:"XX1",att:100,blood:1000},{name:"XX2",att:100,blood:1000},{name:"XX3",att:100,blood:1000}];
// var hero = heros[0];
// console.log(hero.name);


//-----------------函数(方法)-----------------
//无参（没有参数） 无返回值（就是使用函数之后 这个函数代表的内容）的函数
//无参 无返回值函数 声明公式：function 函数名(){功能代码}
//函数 代表一块内容 使用的时候 就表示 使用了一段代码
//无参 无返回值函数 调用公式：函数名()

function whoAreYou() {
    console.log("1111");
    console.log("1111");
    console.log("1111");
    console.log("3242");
}

whoAreYou();

//每一次使用函数的时候  都帮计算95+45的和 并输出结果
// function sum() {
//     console.log(95+45);
// }
// sum();
// sum();
// sum();
/*
* 参数是一个函数的入口
* 返回值是函数的出口
* ✭✭✭✭✭什么时候去使用 无返回值 无参数的函数
* 1.不需要 改变 函数内部内容的时候
* 2.不需要 通过函数 得到一些内容的时候
* */

//有参数 无返回值的函数
//声明公式：function 函数名(参数列表){功能代码}
//调用公式：函数名(实参);
//参数列表：如果大于1个参数 参数之间 使用,号隔开

/*
* ✭✭✭✭✭什么时候去使用 无返回值 有参数的函数
* 1.需要改变 函数内部内容（就需要 给函数 留一个开口 可以进入这个函数）
* 2.不需要通过 这个函数 得到一些内容（让函数给咱们一些内容）
* */

// function sum(a,b) {
//     console.log(a+b);
// }
//
// sum(10,20);
// sum(10,25);
// sum(100,25);

//无参数 有返回值的函数
//声明公式：function 函数名(){功能代码 return 结果}
//调用公式：函数名(); ->函数名()他表示 return 的结果
/*
* ✭✭✭✭✭什么时候去使用 无参数 有返回值的函数
* 1.不需要改变函数内部内容
* 2.希望通过函数 得到一些内容的时候 （使用函数的时候  让函数给咱们一些内容《调用函数的时候 函数的本身》）
* */
//return 返回 -> 返回给 使用这个函数的位置 一个内容
// function sum() {
//     return 10+20;
// }
// sum(); 表示 是   return 10+20;的结果 -> 他就是一个数字 30->之前怎么使用 数字30  现在就可以怎么去使用sum()
// console.log(sum()*40);


//有参数 有返回值的 函数
//声明公式:function 函数名(参数列表){功能代码 return 结果}
//调用公式:函数名(实参);
//这个函数 就表示 return 的结果

// console.log(parseInt(Math.random()*10));

// function season(seasonIndex) {
//     var seasons = ["春","夏","秋","冬"];
//     return seasons[seasonIndex];
// }
//
// console.log(season(0)+"天");

//写一个方法 计算随意传入两个数字的差  得到后计算10倍的这个数字
// function cha(a,b) {
//     return a-b;
// }
// console.log(cha(10,5)*10);

//通过函数 计算 随意传的两个数组的平均数
// function avg(list1,list2) {
//     var avgResult = 0;
//
//     //1.两个数组合并成一个数组
//     var all = list1.concat(list2);
//     //2.计算数组中 所有元素的和
//     var sum = 0;
//     for (var item in all){
//         sum += all[item];
//     }
//     avgResult = sum/all.length;
//     return avgResult;
// }
// console.log(avg([44,33,12,55],[34,66,17]));


//---------上周作业----------
// 5.如果字符传两边有,号 去掉字符两边的,号
//1.判断两边是不是 ,
//2.如果是,删除（替换成""）
// var inputString = prompt("请输入一个字符串");
// if (inputString[0] === ","){
//     inputString = inputString.replace(",","");
// }
// if (inputString[inputString.length-1] === ","){
//     inputString = inputString.replace(",","");
// }
// console.log(inputString);

// var inputString = prompt("请输入一个字符串");
// if (inputString.search(",")!=0){
//     inputString = inputString.replace(","," ");
// }

var inputString = prompt("请输入一个字符串");
var result = "";
//inputString = "wqqqqe";
for (var charIndex in inputString){
    var char = inputString[charIndex];
    if (char !== "q"){
        console.log(char);
        result += char;
    }
}
console.log(result);