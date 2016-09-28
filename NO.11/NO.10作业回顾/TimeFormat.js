/**
 * Created by liuyujing on 16/9/28.
 */
(function () {
    //如果是个位数 在前面添0
    function getAddZero(num) {
        var result = num<10?"0"+num:num;
        return result;
    }

    function dateFormat() {
        var date = new Date();

        //    得到周几
        var weekList = ["周日","周一","周二","周三","周四","周五","周六"];
        var weekString = weekList[date.getDay()];
        //    上午下午
        var hoursNum = date.getHours();
        var APM = hoursNum<=12?"上午":"下午";

        //    得到小时
        //     01 02 3456
        //     10 11

        // var hourString = hoursNum>12?(hoursNum-12)<10?"0"+(hoursNum-12):hoursNum-12:hoursNum<10?"0"+hoursNum:hoursNum;

        var hour = hoursNum>12?hoursNum-12:hoursNum;
        // var hourString = hour<10?"0"+hour:hour;
        var hourString = getAddZero(hour);

        //    得到分钟
        var minutes = getAddZero(date.getMinutes());

        //周二下午03:01
        return weekString+APM+hourString+":"+minutes;
    }

    window.dateFormat = dateFormat;
})();
