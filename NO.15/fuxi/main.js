(function(){
    /*
     * 按照父容器 等宽放大缩小
     * img 需要放大缩小的图片元素
     * superEle img元素所在的 父容器
     * */
    /*
    function scaleForWidth(img,superEle) {
        //newImg 调整新创建好的图片元素的尺寸
        var newImg = new Image();
        newImg.src = img.src;

        //得到父元素的宽
        var superEleWidth = parseFloat(superEle.style.width);

        //    判断图片和父元素 的宽 是不相同的
        if (superEleWidth != newImg.width){
            var scale = superEleWidth/newImg.width;
            newImg.width *= scale;
            newImg.height *= scale;
        }
        return newImg;
    }

    //等高 放大缩小
    function scaleForHeight(img,superEle) {
        var newImg = new Image();
        newImg.src = img.src;

        var superEleHeight = parseFloat(superEle.style.height);
        if (superEleHeight!=newImg.height){
            var scale = superEleHeight/newImg.height;
            newImg.width *= scale;
            newImg.height *= scale;
        }
        return newImg;
    }

    //按照最大的一个方向去放大
    function scaleForSuperEle(img,superEle) {
        //防止超出 父元素的边框
        superEle.style.overflow = "hidden";
        //得到父元素的宽高
        var superEleWidth = parseFloat(superEle.style.width);
        var superEleHeight = parseFloat(superEle.style.height);
        //通过判断 父元素 是宽 大于高  还是高大于宽 来决定 通过哪个方向放大缩小
        if (superEleWidth>=superEleHeight){
            return scaleForWidth(img,superEle);
        }else {
            return scaleForHeight(img,superEle);
        }
    }




    var image = document.createElement("img");
    image.src = "1.jpg";

    var superEle=document.getElementById("content");
    var newImage = scaleForSuperEle(image,superEle);

    superEle.appendChild(newImage);
*/

//    等宽  放大   缩小
//    计算  容器的宽  和  img 元素的宽  和 img 元素的宽 的比例
//    img元素的宽/高 *计算出的比例

    // imageTool.scaleForHeight();
    // imageTool.scaleForWidth();

    // var image = document.createElement("img");
    // image.src = "1.jpg";
    //
    // var superEle=document.getElementById("content");
    // var newImage;
    // image.addEventListener("load",function () {
    //     var newImage = imageTool.scaleForWidth(image,superEle);
    //     superEle.appendChild(newImage);
    // });


    /*
    * 按钮 播放暂停的控制  -> 三目运算
    *
    * 点击按钮 判断上面的文字是不是 暂停？ 如果暂停？（播放） 播放？（暂停）
    * */

    /*
    var button = "暂停";
    button = button==="暂停"?"播放":"暂停";
    if(button==="暂停"){
        button = "播放";
    }else {
        button = "暂停";
    }
    */

    // var button = document.getElementById("play");
    // button.onclick = function () {
    //     this.textContent = this.textContent==="暂停"?"播放":"暂停";
    // };

    /*
    * 点击图片 切换另外一张图片
    *
    * */

    // var changeImage = document.getElementById("changeImage");
    // // changeImage.selected = false;
    //
    // changeImage.onclick = function () {
    //     var img = document.querySelector("#changeImage img");
    //     // var list = ;
    //     var imgPath = _.last(img.src.split("/"));
    //     img.src = imgPath === "1.jpg"?"2.jpg":"1.jpg";
    //
    // };
/*
//    字符串 数字 相加  得到 新的字符串
    var n = 30;
    var s = "55";
    var r = n + parseInt(s);
    console.log(r);


    var input = document.getElementById("input");
    var done = document.getElementById("done");
    input.onfocus = function () {
        input.value = "";
        done.textContent = "正在输入";
    };
    input.onblur = function () {
        done.textContent = "完成";
    };

    done.onclick = function () {

        var info;
        switch (input.value){
            case "春":
                info = "春";
                break;
            case "夏":
                info = "夏";
                break;
            case "秋":
                info = "秋";
                break;
            case "冬":
                info = "冬";
                break;
            default:
                info = "default";
        }
        input.value = "请输入一个季节";
        alert(info);
    };

    // function clearDefaultValue(input) {
    //     // input.onfocus = function () {
    //     //
    //     // }
    //     input.addEventListener("focus",function () {
    //         this.value = "";
    //     });
    // }

    var list = [1,2,4,5,6,7,8,9,111,33];
    for (var index in list) {
        //index 得到数组中的下标
        console.log("下标:"+index);
        //可以通过数组中的下标  得到里面没一个内容
        console.log("值:"+list[index]);
    }

    var num = 0;
    while (1){
        num++;
        var result = parseInt(Math.random()*10);
        // alert("未抽中");
        if (result === 8){
            alert("第"+num+"抽中");
            break; //跳出整个循环
            // continue;//跳过这次 继续循环
        }
    }

    var students = [{name:"小明",score:50},{name:"小李",score:90},{name:"小红",score:30},{name:"小白",score:70}];
    // 1.表扬80分以上的同学 使用循环 判读分数 显示80分以上学生的信息
    // 2.保存80分 以上的同学 到另一个数组中

    var newList = [];
    for (var i=0;i<students.length;i++){
        // if (students[i].score>=80){
        //     console.log(students[i].name+"牛！");
        // }
        if (students[i].score<80){
            continue;
        }
        console.log(students[i].name+"牛！");
        newList.push(students[i]);
    }
    console.log(newList.length);


    var a = prompt();
    function aaa() {

    }
    function bbb() {

    }
   a==="你好"?aaa():bbb();






    var price = 0;

    for (var i=0;i<3;i++){
        var chooseCook = prompt();

        if (chooseCook === "红烧鸡块"){
            price += (25-10);

        }else if(chooseCook === "小炒肉"){
            price += 20;

        }else if(chooseCook === "土豆丝"){
            price += 15;
        }
    }
    console.log(price);


    var lll = ["123","235354","gdfh","oyuu"];
    // var item = lll[0];

    var item = _.head(lll);
    console.log(item);


    // function qqqq() {
    //
    // }
    //
    // window.qqqq();

    var list = [[1,3],[4],[55,6][[32,[46]]]];
    var newList = _.flatten(list);

    var name = ["小明","小张"];
    var score = [33,99];
    var newArray = _.zip(name,score);
    console.log(_.unzip(newArray));

    console.log(_.range(10));
*/
    var nameInput = document.getElementById("name");
    var passwordInput = document.getElementById("password");
    var regButton = document.getElementById("register");

    var reg = /^[A-Z]([a-z]|[0-9])/;
    reg = /(国家|人民|钱财)/;
    reg = /a.d/;
    reg = /\W/;
    reg = /\s/;
    reg = /\bucai/;
    reg = /13+/;
    reg = /13*/;
    reg = /w{3}/;
    reg = /w{1,3}/;
    reg = /^www/;
    reg = /ttt$/;
    reg = /iphone(?=9.0|9.1)/;
    reg = /ww/;
    regButton.onclick = function () {
        var result = reg.test(nameInput.value);
        result = reg.exec(nameInput.value);

        // alert(nameInput.value.search(reg));
        alert(nameInput.value.match(reg));
    }

})();



