/**
 * Created by liuyujing on 16/9/27.
 */

(function () {

    var myWindow;


    var div = document.getElementById("div1");
    div.onclick = function () {
        // location.assign("other.html");
        location.replace("other.html");
        // history.go(0);
        // myWindow = open("other.html","_blank","width=300,height=200,left=10,top=100",false);
        // var result = confirm("XXX");
        // print();
        // myWindow.close();
        // console.log(myWindow.closed);
        // scrollTo(0,300);
        // var cache = window.applicationCache;
    };


    console.log(navigator.userAgent);
    console.log(screen.pixelDepth);

    console.log(location.protocol);

    // location.assign("other.html");

    // location.reload(true);

    // history.go(1);


    function some() {
        var mm = 10;
        function getMM() {
            return mm;
        }
        return getMM;
    }

    var mm = some();
    console.log(mm());


    function ttt(fun) {
        return fun();
    }

    console.log(ttt(some)());



    function max(a,b) {
        function result(c) {
            return a+b+c;
        }
        return result;
    }

    var result = max(1,2);
    if (1){
        console.log(result(23));
    }





})();