/**
 * Created by liuyujing on 16/9/14.
 */


//11.某餐馆 每天顾客是10人，每个顾客最多可点5个菜，根据顾客点的菜品（红烧鸡块（25）、小炒肉（20））、土豆丝（15）），计算总共的流水

//1.while的判断条件 是<=5 当用户点完菜的时候  如果不够5份才 就直接定义的变量超过5 用户就不能再继续点菜
//2.写死循环 当用户点完菜 之后  跳出循环
/*
var num = 1;
while (num<=5){
    var cookName = prompt("请输入菜名,如果点完菜请输入《完毕》");
    if (cookName === "完毕"){
        num-=1;
        console.log("点菜完毕 一共点了"+num+"个菜");
        break;
    }
    num++;
}
if (num===6){
    num-=1;
    console.log("点菜完毕 一共点了"+num+"个菜");
}
*/

//1.写出最多只能点5次的逻辑
/*
var num = 1;
while (1){
    var cookName = prompt();
    if (cookName === "完毕"||num>5){
        num-=1;
        console.log("点菜完毕 一共点了"+num+"个菜");
        break;
    }
    num++;
}
*/


//2.实现单个人只能点5个菜以内 并计算这个人点菜的总额
/*
var num = 1;
var money=0;
while (1){
    var cookName = prompt();
    if (cookName === "完毕"){
        num-=1;
        console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
        break;
    }
    switch (cookName){
        case "红烧鸡块":
            money+=25;
            console.log("您点了"+cookName+"共花了"+money+"元");
            break;
        case "小炒肉":
            money+=20;
            console.log("您点了"+cookName+"共花了"+money+"元");
            break;
        case "土豆丝":
            money+=15;
            console.log("您点了"+cookName+"共花了"+money+"元");
            break;
        case "地三鲜":
            money+=5;
            console.log("您点了"+cookName+"共花了"+money+"元");
            break;
        case "宫爆鸡丁":
            money+=2;
            console.log("您点了"+cookName+"共花了"+money+"元");
            break;
        default:
            console.log("本店没有"+cookName+"这个菜");
            num-=1;
    }

    if(num===5){
        console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
        break;
    }
    num++;
}

*/

//计算一天总共的流水是多少
/*
var allMoney = 0;
for (var i=0;i<10;i++){

    allMoney += money;
}
*/

//完整版
/*
var allMoney = 0;
for (var i=0;i<10;i++){

    var num = 1;
    var money=0;
    while (1){
        var cookName = prompt();
        if (cookName === "完毕"){
            num-=1;
            console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
            break;
        }
        switch (cookName){
            case "红烧鸡块":
                money+=25;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "小炒肉":
                money+=20;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "土豆丝":
                money+=15;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "地三鲜":
                money+=5;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "宫爆鸡丁":
                money+=2;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            default:
                console.log("本店没有"+cookName+"这个菜");
                num-=1;
        }

        if(num===5){
            console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
            break;
        }
        num++;
    }

    allMoney += money;
}

console.log("今天的流水是"+allMoney+"元");
*/

//完整修复版
/*
var allMoney = 0;
while (1){
    var welcome = prompt("欢迎光临");
    if (welcome === "暂停营业"){
        break;
    }

    var num = 1;
    var money=0;
    while (1){
        var cookName = prompt("上帝!您需要什么?");
        if (cookName === "完毕"){
            num-=1;
            console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
            break;
        }
        switch (cookName){
            case "红烧鸡块":
                money+=25;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "小炒肉":
                money+=20;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "土豆丝":
                money+=15;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "地三鲜":
                money+=5;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            case "宫爆鸡丁":
                money+=2;
                console.log("您点了"+cookName+"共花了"+money+"元");
                break;
            default:
                console.log("本店没有"+cookName+"这个菜");
                num-=1;
        }

        if(num===5){
            console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
            break;
        }
        num++;
    }

    allMoney += money;
}

console.log("今天的流水是"+allMoney+"元");
*/

//12.一年的房租是80000块  红烧鸡块（成本10）、小炒肉（成本8）、土豆丝（成本4） 计算一个月的 毛利是多少

//一个月流水
/*
var monthProfitMoney = 0;
for (var j=0;j<30;j++){
    //XXXX每天的流水和毛利
    monthProfitMoney += allProfitMoney;
}
monthProfitMoney -= 80000/12;
console.log("这个月一共赚了"+monthProfitMoney+"元");
*/

//完整版
/*
var monthProfitMoney = 0;
for (var j=0;j<30;j++){
    //每天的总利润
    var allProfitMoney = 0;
    //每天的总流水
    var allMoney = 0;
    while (1){
        var welcome = prompt("欢迎光临");
        if (welcome === "暂停营业"){
            break;
        }

        var num = 1;
        //每个客户点菜的总钱数
        var money=0;
        //赚的每个客户的钱
        var profitMoney = 0;
        while (1){
            var cookName = prompt("上帝!您需要什么?");
            if (cookName === "完毕"){
                num-=1;
                console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
                break;
            }
            switch (cookName){
                case "红烧鸡块":
                    money+=25;
                    profitMoney += (25-10);
                    console.log("您点了"+cookName+"共花了"+money+"元");
                    break;
                case "小炒肉":
                    money+=20;
                    profitMoney += (20-8);
                    console.log("您点了"+cookName+"共花了"+money+"元");
                    break;
                case "土豆丝":
                    money+=15;
                    profitMoney += (15-5);
                    console.log("您点了"+cookName+"共花了"+money+"元");
                    break;
                case "地三鲜":
                    money+=5;
                    profitMoney += (5-2);
                    console.log("您点了"+cookName+"共花了"+money+"元");
                    break;
                case "宫爆鸡丁":
                    money+=2;
                    profitMoney += (2-1);
                    console.log("您点了"+cookName+"共花了"+money+"元");
                    break;
                default:
                    console.log("本店没有"+cookName+"这个菜");
                    num-=1;
            }

            if(num===5){
                console.log("点菜完毕 一共点了"+num+"个菜 共花了"+money+"元");
                break;
            }
            num++;
        }

        allMoney += money;
    }

    console.log("今天的流水是"+allMoney+"元");

    //计算一个月的总利润
    monthProfitMoney += allProfitMoney;
}
monthProfitMoney -= 80000/12;
console.log("这个月一共赚了"+monthProfitMoney+"元");
*/
/*
14.写一个小游戏的逻辑
1）选择不同的英雄（每一个英雄的血量 攻击力 不同）
2）选择不同的怪物（每一个怪物的血量 攻击力 不同）
3）输入技能  互相伤害
4）谁的血量为0 宣布游戏结束
*/

// 1.选择英雄和怪物
/*
var chooseHero = prompt("请选择你喜欢的英雄:1.张英才2.刘玉静3.张力4.曹静");
var chooseMonster = prompt("请选择你的对手:1.青蛙 2.蚂蚁 3.七星瓢虫 4.大灰狼");

//英雄的初始血量和攻击力
var heroBlood = 0;
var heroATT = 0;

//怪物的初始血量 和攻击力
var monsterBlood = 0;
var monsterATT = 0;

//选择英雄的
switch (chooseHero){
    case "张英才":
        heroBlood = 300;
        heroATT = 5;
        break;
    case "刘玉静":
        heroBlood = 260;
        heroATT = 6;
        break;
    case "张力":
        heroBlood = 230;
        heroATT = 8;
        break;
    case "曹静":
        heroBlood = 200;
        heroATT = 10;
        break;
    default:
}
console.log("您选择的英雄是"+chooseHero+"拥有"+heroBlood+"滴血"+"攻击力是"+heroATT);

//选择怪物
switch (chooseMonster){
    case "青蛙":
        monsterBlood = 100;
        monsterATT = 8;
        break;
    case "蚂蚁":
        monsterBlood = 200;
        monsterATT = 10;
        break;
    case "七星瓢虫":
        monsterBlood = 240;
        monsterATT = 5;
        break;
    case "大灰狼":
        monsterBlood = 300;
        monsterATT = 2;
        break;
    default:
}
console.log("您选择的对手是"+chooseMonster+"拥有"+monsterBlood+"滴血"+"攻击力是"+monsterATT);
*/


//2.不管谁死 都结束
/*
while (1){

    if (heroBlood<=0||monsterBlood<=0){
        //修复小bug 修复出现负数的情况
        heroBlood = heroBlood<=0?0:heroBlood;
        monsterBlood = monsterBlood<=0?0:monsterBlood;
        break;
    }
}
*/

//3.使用技能 互相伤害
/*
var lastSkill = 0;
while (1){
    var heroSkill = prompt("请选择您要使用的技能:1.耳刮子 2.佛山无影腿 3.如来神掌 4.九阴白骨爪");
    heroSkill -= lastSkill;
    switch (heroSkill){
        case "1":
            lastSkill = 10;
            break;
        case "2":
            lastSkill = 50;
            break;
        case "3":
            lastSkill = 80;
            break;
        case "4":
            lastSkill = 100;
            break;
        default:
            lastSkill = 0;
    }
    heroATT += lastSkill;


    if (heroBlood<=0||monsterBlood<=0){
        //修复小bug 修复出现负数的情况
        heroBlood = heroBlood<=0?0:heroBlood;
        monsterBlood = monsterBlood<=0?0:monsterBlood;
        break;
    }
    heroBlood -= monsterATT;
    monsterBlood -= heroATT;
}
*/

//完整版
var chooseHero = prompt("请选择你喜欢的英雄:1.张英才2.刘玉静3.张力4.曹静");
var chooseMonster = prompt("请选择你的对手:1.青蛙 2.蚂蚁 3.七星瓢虫 4.大灰狼");

//英雄的初始血量和攻击力
var heroBlood = 0;
var heroATT = 0;

//怪物的初始血量 和攻击力
var monsterBlood = 0;
var monsterATT = 0;

//选择英雄的
switch (chooseHero){
    case "张英才":
        heroBlood = 300;
        heroATT = 5;
        break;
    case "刘玉静":
        heroBlood = 260;
        heroATT = 6;
        break;
    case "张力":
        heroBlood = 230;
        heroATT = 8;
        break;
    case "曹静":
        heroBlood = 200;
        heroATT = 10;
        break;
    default:
}
console.log("您选择的英雄是"+chooseHero+"拥有"+heroBlood+"滴血"+"攻击力是"+heroATT);

//选择怪物
switch (chooseMonster){
    case "青蛙":
        monsterBlood = 100;
        monsterATT = 8;
        break;
    case "蚂蚁":
        monsterBlood = 200;
        monsterATT = 10;
        break;
    case "七星瓢虫":
        monsterBlood = 240;
        monsterATT = 5;
        break;
    case "大灰狼":
        monsterBlood = 300;
        monsterATT = 2;
        break;
    default:
}
console.log("您选择的对手是"+chooseMonster+"拥有"+monsterBlood+"滴血"+"攻击力是"+monsterATT);

var lastSkill = 0;
while (1){
    var heroSkill = prompt("请选择您要使用的技能:1.耳刮子 2.佛山无影腿 3.如来神掌 4.九阴白骨爪");
    heroATT -= lastSkill;
    var skillName = "";
    switch (heroSkill){
        case "1":
            lastSkill = 10;
            skillName = "耳刮子";
            break;
        case "2":
            lastSkill = 50;
            skillName = "佛山无影腿";
            break;
        case "3":
            lastSkill = 80;
            skillName = "如来神掌";
            break;
        case "4":
            lastSkill = 100;
            skillName = "九阴白骨爪";
            break;
        default:
            lastSkill = 0;
    }
    console.log(skillName);
    heroATT += lastSkill;


    if (monsterBlood<=0){
        console.log(chooseHero+"杀死了"+chooseMonster);
        break;
    }
    if (heroBlood<=0){
        console.log(chooseMonster+"杀死了"+chooseHero);
        break;
    }
    heroBlood -= monsterATT;
    console.log(chooseMonster+"攻击了"+chooseHero);
    console.log(chooseHero+"还剩"+heroBlood<=0?0:heroBlood+"滴血");

    monsterBlood -= heroATT;
    console.log(chooseHero+"使用"+"技能"+skillName+"攻击了"+chooseMonster);
    console.log(chooseMonster+"还剩"+monsterBlood<=0?0:monsterBlood+"滴血");


}
