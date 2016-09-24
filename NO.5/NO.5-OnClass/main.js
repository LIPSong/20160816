/**
 * Created by liuyujing on 16/9/20.
 */
var huLuWa = {
    name:"葫芦娃",
    att:30,
    blood:1000
};




/*
*
* 7.某餐馆 每天顾客是10人，根据顾客点的菜品（红烧鸡块（25）、小炒肉（20））、土豆丝（15）），计算总共的流水
 8.计算上道题的 毛利  红烧鸡块（成本10）、小炒肉（成本8）、土豆丝（成本4）
* */
function getCooks() {
    var hsjk = {
        name:"红烧鸡块",
        price:25,
        cost:10
    };

    var xcr = {
        name:"小炒肉",
        price:20,
        cost:8
    };

    var tds = {
        name:"土豆丝",
        price:15,
        cost:4
    };

    var cooks = [hsjk,xcr,tds];
    return cooks;
}

//菜名
//cooks 全局变量的数组
/*
* 1.var cooks = [hsjk,xcr,tds]; 放到花括号的外面的时候 ->从声明的位置开始到文件结束  都可以去使用
* 2.var cooks = [hsjk,xcr,tds]; 放到chooseCook函数里面 表示 这个方法有一个固定的数组（菜单）->里面只能有三道菜 如果有多个函数 使用到了菜单的数组 想要添加菜品 就得修改好多位置
* 3.单独把数据存放到 一个方法里面 （在添加数据的时候 只需要找到这个加载数据的方法即可《一般情况不需要去管  通过网络请求去更新》）
* */

//用户选择菜品
function chooseCook(cooks) {

    var chooseCookIndex = parseInt(prompt("1."+cooks[0].name+"2."+cooks[1].name+"3."+cooks[2].name))-1;

    return cooks[chooseCookIndex];
}




/*
* return cooks【choosCookIndex-1】.name；
*
* 把刚那个name去掉
* */


/*
* "小炒肉"
*
*
* */


function welcome() {
    var allPrice = 0;
    var allCost = 0;
    for (var i =0;i<10;i++){
        //获得菜品的数据
        var cooks = getCooks();

        //cook是用户点好的菜品
        var cook = chooseCook(cooks);

        allPrice += cook.price;
        allCost += cook.cost;
    }

// cook.price那俩代表什么

    console.log(allPrice);
    console.log(allPrice-allCost);
}

// welcome();

// var news = {
//     titil:"Lyft总裁：10年后自动驾驶共享汽车将取代私家车",
//     date:"2016.09.19 09:11:55",
//     // ....
// };




//"11111"
//"2222453"
//"222222234"
//"222234"
//"222245676"
// "22224575"

//输出 100次
/*
for (var i=0;i<100;i++){
    console.log("99999");
    console.log("2222453");
    console.log("222222234");
    console.log("222234");
    console.log("222245676");
    console.log("22224575");
}

for (var i=0;i<100;i++){
    console.log("9999999");
    console.log("2222453");
    console.log("222222234");
    console.log("222234");
    console.log("222245676");
    console.log("22224575");
}

for (var i=0;i<100;i++){
    console.log("9999");
    console.log("2222453");
    console.log("222222234");
    console.log("222234");
    console.log("222245676");
    console.log("22224575");
}


for (var i=0;i<100;i++){
    console.log("11111");
    console.log("2222453");
    console.log("222222234");
    console.log("222234");
    console.log("222245676");
    console.log("22224575");
}

for (var i=0;i<100;i++){
    console.log("11111");
    console.log("2222453");
    console.log("222222234");
    console.log("222234");
    console.log("222245676");
    console.log("22224575");
}

function run100() {
    for (var i=0;i<100;i++){
        console.log("9999");
        console.log("2222453");
        console.log("222222234");
        console.log("222234");
        console.log("222245676");
        console.log("22224575");
    }
}

run100();
run100();
run100();
run100();

var num = 9;
if (num===9){
    run100();
}
*/
/*
 * 函数的特点
 * 1.封装代码
 * 2.声明好的函数 不回去立刻执行 等调用的时候 才会去执行
 * */


/*
* 为什么要使用函数？
* 1.减少代码量
* 2.方便维护
* 3.使用灵活
* */

//删除输入的所有w
//帮公交车写一个函数  出入用户坐车的公里数，函数帮计算出对应的车费。（0-3公里每公里5元 4-6公里每公里3元 6公里以上每公里2元）
/*
function deleteOfW(string) {
    var result;
    for (var i=0;i<string.length;i++){
        if (string[i] !== "w"){
            result += string[i];
        }
    }
    return result;
}
var result = deleteOfW("wr4etqw");
console.log(result);
*/
//帮公交车写一个函数  输入用户坐车的公里数，函数帮计算出对应的车费。（0-3公里每公里5元 4-6公里每公里3元 6公里以上每公里2元）
/*
function pay(km) {
    var allPrice = 0;
    if (km >= 0 && km <= 3) {
        var price = 5;
        allPrice = km * price;
    } else if (km > 3 && km <= 6) {
        var price = 3;
        allPrice = (3 * 5) + (km - 3) * price;
    } else {
        var price = 2;
        allPrice = (3 * 5) + (3 * 3) + (km - 3 - 3) * price;
    }

    // 0-3 4-6 6<

    return allPrice;
}
console.log(pay(100));
*/
// 0.创建3个对象{name:xx,age:xx,score:[3个分数]} 通过函数 找到有分数不及格的同学
// 1.将输入的字符串通过,号 转换成数组 依次输出每一个元素
// 2.!!!!文字接龙 第一次输入一个成语  第二次输入成语的第一个字 必须是后一个的第一个字
// 3.!!!!石头剪子布的游戏 逻辑 石头赢剪子  剪子赢布 布赢石头 用户对电脑（电脑是随机出的）
// !!4.[55,2,55,2,78,99,55,63] 从小到大排序 删除数组中相同的元素
// !! 5.一瓶啤酒3块钱 5个瓶子换一瓶啤酒 写一个函数 输入酒瓶数量 可以得到需要支付的总额和啤酒瓶 以及余下的酒瓶
//!! 6.判断一个字符串中出现次数最多的字符，统计这个次数
// 7.清空数组 var arr=[1,2,3,4,5,6,7];
// 8.篮球从5米高的地方掉下来，每次弹起的高度是原来的30%，经过几次弹起，篮球的高度是小于0.1米。
// 9.在函数中随意传入一个数组，把数组其他元素删除，只保留最后一个








// 0.创建3个对象{name:xx,age:xx,score:[3个分数]} 通过函数 找到有分数不及格的同学
function searchStudent() {
    var list = [{name:"张晓明",age:18,score:[88,76,60]},{name:"王二小",age:17,score:[56,77,61]},{name:"高达尚",age:19,score:[68,76,60]}];
    var result = [];
    for (var i=0;i<list.length;i++){
        for (var j=0;j<list[i].score.length;j++){
            if (list[i].score[j]<60){
                result.push(list[i]);
            }
        }
    }
    return result;
}

// console.log(searchStudent());

//1.将输入的字符串通过,号 转换成数组 依次输出每一个元素
/*
function toArray() {
    var input = prompt();
    return input.split(",");
}
var list = toArray();
for (var i=0;i<list.length;i++){
    console.log(list[i]);
}
*/
//2.文字接龙 第一次输入一个成语  第二次输入成语的第一个字 必须是后一个的第一个字
function start() {
    var lastString = "";
    var isFirst = true;
    while (1){
        var string = prompt("");
        if (!isFirst) {
            console.log(string[0]);
            console.log(lastString[lastString.length-1]);
            if(string[0]===lastString[lastString.length-1]){
            }else {
                break;
            }
        }else{
            isFirst = false;
        }
        lastString = string;
    }
}

//3.石头剪子布的游戏 逻辑 石头赢剪子  剪子赢布 布赢石头 用户对电脑（电脑是随机出的）
function startGame() {
    //0 石头 1剪子 2布
    var user = parseInt(prompt("石头剪子布"));
    var computer = parseInt(Math.random()*10)%3;
    var result = user-computer;//结果
    // user-computer === 0 平局  0
//    user-computer === 1 (剪子/石头 布/剪子) 用户输
    //    user-computer === -2 用户输
//    user-computer === -1 用户赢
    //    user-computer === 2 用户赢


    if (result===0){
        console.log(user+":"+computer+"平手");
    }else if(result === -1||result===2){
        console.log(user+":"+computer+"用户赢");
    }else {
        console.log(user+":"+computer+"用户输");
    }

}

startGame();

//5.一瓶啤酒3块钱 5个瓶子换一瓶啤酒 写一个函数 输入啤酒数量和酒瓶的数量 可以得到需要支付的总额和啤酒瓶 以及余下的酒瓶
function result(beerNum,emptyBottlNum) {

    var freeNum = parseInt(emptyBottlNum/5);
    var needPay = (beerNum-freeNum)*3;
    var otheremptyBottlNum = emptyBottlNum%5;
    return {money:needPay,emptyBottlNum:emptyBottlNum-otheremptyBottlNum,otheremptyBottlNum:otheremptyBottlNum};
}

result(10,33);


// 6.判断一个字符串中出现次数最多的字符，统计这个次数
var str = "rettttewwt";
var result = [];
for(var i=0;i<str.length;i++){
    // if (!result["r"]){
    if (!result[str[i]]){
        result[str[i]]=1;
        // result["r"]=1;
        // ["r":1,"e":5,"t":3];
    }else {
        // result["r"]++;
        result[str[i]]++;
    }
}
console.log(result);




//---------------------

var blackgroundView = document.createElement("div");
document.body.appendChild(blackgroundView);

var userBlackgroundView = document.createElement("div");
blackgroundView.appendChild(userBlackgroundView);

var computerBlackgroundView = document.createElement("div");
blackgroundView.appendChild(computerBlackgroundView);


var images = ["image/shitou.jpg","image/jiandao.gif","image/bu.gif"];

var lastSelectEle;
var timer;
for (var i=0;i<3;i++){
    var element = document.createElement("p");
    element.id = images[i];
    var image = document.createElement("img");
    image.src = images[i];
    image.style.height = "100%";
    element.appendChild(image);
    userBlackgroundView.appendChild(element);
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.float = "left";
    element.onclick = function (event) {
        var curEle = this;
        if (lastSelectEle){
            lastSelectEle.style.opacity = "1.0";
        }
        curEle.style.opacity = "0.8";
        lastSelectEle = curEle;
        clearInterval(timer);

        var user = images.indexOf(curEle.id);
        console.log("user:"+user);
        var computer = images.indexOf(document.getElementById("computer").src.replace("http://localhost:63342/NO.5-OnClass/",""));
        var result = user-computer;//结果
        console.log(document.getElementById("computer").src);
        console.log("computer:"+computer);
        console.log("result:"+result);
        var message;
        if (result===0){
            console.log(user+":"+computer+"平手");
            message = user+":"+computer+"平手";
        }else if(result === -1||result===2){
            console.log(user+":"+computer+"用户赢");
            message = user+":"+computer+"用户赢";
        }else {
            console.log(user+":"+computer+"用户输");
            message = user+":"+computer+"用户输";
        }
        alert(message);
        start();
    };
}

var element = document.createElement("p");
var image = document.createElement("img");
image.id = "computer";
image.src = images[0];
image.style.height = "100%";
element.appendChild(image);
computerBlackgroundView.appendChild(element);
element.style.height = "100px";
element.style.width = "100px";

function start() {
    var computerSelectIndex = 0;
    timer = setInterval(function () {
        computerSelectIndex++;
        computerSelectIndex = computerSelectIndex>=images.length?0:computerSelectIndex;
        image.src = images[computerSelectIndex];
    },500);
}


start();

//
/*
//------------打印99乘法表------------
function table() {
    for (var i=1;i<10;i++){
        for(var j=1;j<=i;j++){
            document.write(j+"*"+i+"="+j*i+"\t");
        }
        document.write("<br>");
    }
}
table();

//2.给数组从大到小排序 [2,1,45,99,7,65];
function sortLower() {
    var list = [2,1,45,99,7,65];
    for (var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if (list[i]<list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    console.log(list);
}

sortLower();

//[[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]]; 找出数组中所有33所在  位置
function search33ForLocation() {
    var result = [];
    var list = [[[234,3,2],[5,44,33,23,65]],[[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]]];
    for (var i=0;i<list.length;i++){
        // [[234,3,2],[5,44,33,23,65]] === list[0]
        // [[44,55,33,11,56],[4,77,43,98],[5,3,77,98,68]] === list[1]
        for (var j=0;j<list[i].length;j++){
            //i=0
            // [234,3,2] j = 0
            //[5,44,33,23,65] j=1

            //i=1
            // [44,55,33,11,56] j=0
            //[4,77,43,98] j=1
            //[5,3,77,98,68] j=2

            for(var k=0;k<list[i][j].length;k++){
                if (list[i][j][k] === 33){
                    result.push("下标是"+i+" "+j+" "+k);
                }
            }
        }
    }
    console.log(result);
}
search33ForLocation();

//写一个函数 输入任意数组 查找出 数组中的最小值
function searchMinNum(list) {
    for (var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if(list[i]>list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j]  = temp;
            }
        }
    }
    return list[0];
}

 function min(list) {
 var min = list[0];
 for (var j = 0; j <list.length; j++) {
 if (list[j] <min) {
 min = list[j];
 }
 }

 return min;
 }


//[66,80,35,99,54]求数组的平均分数
function avg() {
    var list = [66,80,35,99,54];
    var sum = 0;
    for (var i=0;i<list.length;i++){
        sum += list[i];
    }
    return sum/list.length;
}

//8.给数组从小到大排序 [5,7,4,9,1,6]
function sortUpper() {
    var list = [5,7,4,9,1,6];
    for (var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if(list[i]>list[j]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    console.log(list);
}
*/
