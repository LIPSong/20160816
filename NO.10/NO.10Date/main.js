/**
 * Created by liuyujing on 16/9/27.
 */

(function () {

//    日期相关
//    1.创建日期对象
    var date = new Date();
    console.log(date);

    //2.得到date对象  在当月的第几天
    var curDate = date.getDate();
    console.log(curDate);

//    3.得到date对象 是周几
    var weekNum = date.getDay();
    console.log(weekNum);

    // 0,1,2,3,4,5,6
    function returnWeekString(num){
        return ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][num];
    }

    console.log(returnWeekString(weekNum));


    // function returnWeekString(num) {
    //     var weekString;
    //     switch(num){
    //         case 0:
    //             weekString = "星期日";
    //             break;
    //         case 1:
    //             weekString = "星期一";
    //             break;
    //         case 2:
    //             weekString = "星期二";
    //             break;
    //         case 3:
    //             weekString = "星期三";
    //             break;
    //         case 4:
    //             weekString = "星期四";
    //             break;
    //         case 5:
    //             weekString = "星期五";
    //             break;
    //         case 6:
    //             weekString = "星期六";
    //             break;
    //         default:
    //     }
    //     return weekString;
    // }

//    4.获得date对象中的月份0 ~ 11
    var month = date.getMonth();
    console.log(month);
    
    function returnMonthString(num) {
        return ["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"][num];
    }
    console.log(returnMonthString(month));

//    5.通过date获得是几几几几年
    console.log(date.getFullYear());

//    --------------------------------------------

//    今天是:2016年 一月份 周五

    function getWeekString(num){
        return ["周日","周一","周二","周三","周四","周五","周六"][num];
    }

    function dateString() {
        var date1 = new Date();
        return "今天是:"+date1.getFullYear()+"年"+" "+returnMonthString(date1.getMonth())+" "+getWeekString(date1.getDay());
    }

    var div = document.getElementById("dateView");
    div.textContent = dateString();

    var newDiv = div.cloneNode(false);
    newDiv.textContent = dateString();
    document.body.appendChild(newDiv);



//    ---------------------------------------
//    获得date中是几时
    console.log(date.getHours());
//    获得date中 是几分
    console.log(date.getMinutes());
//    获得date中 是几秒
    console.log(date.getSeconds());
//    获得date中 毫秒
    console.log(date.getMilliseconds());

//  写一个数字版 钟表
//     3时:15分:25秒

//    定时器
//     setTimeout(function,毫秒数) 当设置时间结束的时候  执行某个方法  不会重复执行
//     setInterval(function,毫秒数) 隔多少毫秒 去执行一次
//     clearTimeout(Timeout的变量名) 清除停止定时器
//     clearInterval(Interval的变量名) 清除停止定时器

    function timeString() {
        var date2 = new Date();
        var hour = date2.getHours()>12?date2.getHours()-12:date2.getHours();
        return hour+":"+date2.getMinutes()+":"+date2.getSeconds();
    }

    var timeView = document.getElementById("dateView");

    function updateTimeString() {
        timeView.textContent = timeString();
    }
    setInterval(updateTimeString,1000);


//    ---------------------------------------
//    9.getTime() 获得1970 1月1日 到现在的一个毫秒数  是一个时间戳  与服务端互相传递的时间  就是一个时间戳
    console.log(date.getTime());

//  10.getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差
    console.log(date.getTimezoneOffset());

    //11.设置 date中的 在当月中的天数
    date.setDate(1);


//    12.设置年
    date.setFullYear(2015);
//    13.设置月份
    date.setMonth(3);
//    14.设置时分秒毫秒
    date.setHours(3);
    date.setMinutes(30);
    date.setSeconds(24);
    date.setMilliseconds(400);

    console.log(date);

    console.log(Date.parse("2016-2-15 3:24:55"));

    date.setTime(1458754230000);
    console.log(date);

    //15.把日期转换成字符串
    var string = date.toString();
    console.log(string.split(" "));

//    16.toTimeString()	把 Date 对象的时间部分转换为字符串
    console.log(date.toTimeString());

//    17.toDateString()	把 Date 对象的日期部分转换为字符串
    console.log(date.toDateString());

//    valueOf()
    console.log(date.valueOf());


    var testDiv = document.getElementById("test");
    var angle = 10;

    testDiv.onclick = function () {
        this.style.transform = "rotate("+angle+"deg)";
        angle+=10;
        // this.style.transformOrigin = "";
        // this.style.cssText =
    };


})();