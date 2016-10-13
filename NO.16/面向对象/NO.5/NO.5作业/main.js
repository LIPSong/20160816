/**
 * Created by liuyujing on 16/9/21.
 */
//0.创建3个对象{name:xx,age:xx,score:[3个分数]} 通过函数 找到有分数不及格的同学
function searchStudent(students) {
    var result = [];
    for (var i=0;i<students.length;i++){
        var student = students[i];//找到每一个学生
        var list = student.score;
        for (var j=0;j<list.length;j++){
            // student.score[j];//判断学生分数 数组中 是否又不及格的
            if (student.score[j]<60){//查找不及格的同学
                result.push(student);//把不及格的同学 放到一个新的数组中保存
            }
        }
    }
    return result;
}

console.log(searchStudent([{name:"小明",age:18,score:[44,67,77]},{name:"小李",age:15,score:[54,67,87]},{name:"小红",age:17,score:[64,67,77]}]));

// 1.将输入的字符串通过,号 转换成数组 依次输出每一个元素
function inputStringToArray(string) {
    return string.split(",");
}

function enumArray(list) {
    for(var i=0;i<list.length;i++){
        console.log(list[i]);
    }
}

var list = inputStringToArray("ette,tyryutr,ytuiiy,eet,tyui8,32");
enumArray(list);


//2.文字接龙 第一次输入一个成语  第二次输入成语的第一个字 必须是后一个的第一个字
/*
* 1.文字接龙 是一个循环的过程  并且不知道 什么时候结束 -> while
* 2.上一次输入的 最后一个字符 与本次输入的 第一个字符 去对比 是否相同-> 相同继续:不相同结束
* 3.上一次 与本次输入的内容 去对比 -> 需要有一个保存上一次输入内容的变量
* 4.如果是第一次 输入内容 不需要去对比 需要有一个变量去保存是不是 第一次输入
* */
function appendString() {

    var isFirst = true;//用来判断是不是  第一次输入
    var lastMessage;
    while (1){
        var inputString = prompt();//用户输入的内容
        if (!isFirst){//判断是不是第一次输入  如果不是 进入
        //    对比 是否不相同
            if (inputString[0] !== lastMessage[lastMessage.length-1]){
                console.log("Loser");
                break;
            }
        }else {//如果是第一次输入  改变标识isFirst 的值
            isFirst = false;
        }
        lastMessage = inputString;//记录上一次输入的内容
    }
}
// appendString();

// 3.!!!!石头剪子布的游戏 逻辑 石头赢剪子  剪子赢布 布赢石头 用户对电脑（电脑是随机出的）
/*
* 石头:0 剪子:1 布:2
* 用户:电脑
* 0-0=0   平局 只要用户与电脑相减之后的结果  是0  就是平
* 0-1=-1  赢
* 2-0=2   赢
* 0-2=-2  输
* 1-0=1   输
* */

function whoIsWiner() {
    var user = parseInt(prompt("石头剪子布（0，1，2）"));
    var computer = parseInt(Math.random()*10)%3;
    var result = user-computer;
    console.log("user:"+user+"computer:"+computer);
    if (result === 0){
        console.log("平局");
    } else if (result===-1||result===2){
        console.log("赢");
    }else {
        console.log("输");
    }
}
// whoIsWiner();

//从小到大排序 删除数组中相同的元素
function deleteSameItem(list) {
    for (var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if(list[i]>list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }

    //排序之后 如果有相同的数字 就是相邻的
    var newList = [];
    for(var i=0;i<list.length;i++){

            //当前的数字 与下一个数字去对比的时候 不相同的去保存
            if (list[i]!==list[i+1]){
                newList.push(list[i]);
            }
    }

    return newList;
}

// console.log(deleteSameItem([11,22,34,22,55,24,22,55,22,22,22]));

//一瓶啤酒3块钱 5个瓶子换一瓶啤酒 写一个函数 输入酒瓶数量 可以得到需要支付的总额和啤酒瓶 以及余下的酒瓶
function result(emptyBottl,beerNum) {

    var freeNum = parseInt(emptyBottl/5);//只支付空瓶子 可以得到几瓶啤酒

    var otherEmptyBottl = emptyBottl%5;//剩余的空瓶子

    var needPayMoney;
    //beerNum - freeNum
    // beerNum（希望购买到的啤酒数量）
    // 想购买六瓶啤酒（beerNum） 用空瓶子换了四瓶（freeNum） 如果用钱支付 需要支付两瓶的
    //freeNum 用瓶盖支付的啤酒数量
    //beerNum - freeNum 结果大于0 剩下的就得用 金钱支付
    //beerNum - freeNum 结果小于0 就是瓶盖 拿多了
    //freeNum（空瓶子换的啤酒数量） -beerNum（想买的啤酒数量）  多换出来的啤酒 数量

    if ((beerNum - freeNum)<0){//如果空瓶子 超过过买的数量的时候
        //换回空瓶子
        otherEmptyBottl+=(freeNum-beerNum)*5;
        needPayMoney = 0;
    }else {
        needPayMoney = (beerNum - freeNum)*3;//需要用钱支付
    }

    return {all:needPayMoney,payEmpty:emptyBottl-otherEmptyBottl,otherEmptyBottl:otherEmptyBottl};
}
console.log(result(12,1));


function searchMoreChar(string) {
    //"wtttew"
    var list = [];
    for (var i=0;i<string.length;i++){
        // string[i]  w  t t t e w
        // list["w"]  是通过w 取它对应的值   如果没有值 就表示list中不存在 这个键值对  如果有值 就表示list中存在 这个键值对
        //! 取反
        //undefined 不存在  假的（false）
        //有内容 就是真的（true）
        if (!list[string[i]]){
            list[string[i]]=1;//第一次出现在list这个数组中 给他赋值为1
        }else {
            list[string[i]]++;
        }
    }

    var max = 0;
    var index;
    for (var key in list){
        if (max<list[key]){
            max = list[key];
            index = key;
        }
    }
    var sameNum = [];
    for (var key in list){
        if (max===list[key]){
            sameNum[key]=max;
        }
    }
    return sameNum;
}

// console.log(searchMoreChar("tttwwwwwteyti"));

//清空数组;
function clearArray(list) {

    while (list.length){
        list.pop();
    }
    return list;
}
console.log(clearArray([4,26,75,4]));

function num() {
    var m = 5;
    var index=0;
    while (m>0.1){
        m *= 0.3;
        index++;
    }
    return index;
}

console.log(num());

function saveLastItem(list) {
    while (list.length!==1){
        list.shift();
    }
    return list;
}

console.log(saveLastItem([3,55,11,8]));

//作业：
// 1.显示用户输入的内容  和上一次 用户输入的内容  点击按钮开始接龙 如果正确显示笑脸 不正确哭
//2.石头剪子布 界面

