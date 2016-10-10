/**
 * Created by liuyujing on 16/10/9.
 */
(function () {

    /*
    * createView:创建视图
    * images:图片路径的数组
    * */

    var imagesLength = 0;
    var imageViewIndex = 0;
    var isAgain = false;
    var timer;

    //创建轮播图中的视图
    function createView(images) {
        imagesLength = images.length;

        var contentView = document.getElementById("content");
        bindMouseEvent(contentView);

        var rightSpace = 30;
        for (var i=0;i<images.length;i++){
            /*类似文字的内容*/
            var imageView = document.createElement("a");
            imageView.href = images[i].toUrl;
            contentView.appendChild(imageView);

            var image = document.createElement("img");
            image.src = images[i].imagePath;
            imageView.appendChild(image);

            imageView.className = "imageView";

            var pointButton = document.createElement("button");
            pointButton.textContent = i+1;
            rightSpace-=5;
            pointButton.style.right = ""+rightSpace+"%";
            pointButton.className = "pointButton";
            contentView.appendChild(pointButton);
            if (i===0){
                pointButton.id = "curPointButton";
            }
            bindMouseEvent(pointButton);
        }

        var nextButton = document.getElementById("nextButton");
        nextButton.onclick = function () {
            next();
        };

        var preButton = document.getElementById("preButton");
        preButton.onclick = function () {
            pre();
        };

        bindMouseEvent(nextButton);
        bindMouseEvent(preButton);
    }

    function bindMouseEvent(view) {
        view.onmouseenter = function () {
            clearInterval(timer);
        };
        view.onmouseout = function () {
            startTimer();
        };
    }

    //下一页
    function next() {
        control(true);
    }
    //上一页
    function pre() {
        control(false);
    }

    function updatePoint() {
        document.getElementById("curPointButton").id = "pointButton";
        document.getElementsByClassName("pointButton")[imageViewIndex].id = "curPointButton";
    }
    /*
    * control 控制上一页 或者下一页的方法
    * isNext 是否是下一页
    * true 下一页
    * false 上一页
    * */
    function control(isNext) {

        var imageViews = document.getElementsByClassName("imageView");
        if (!isAgain){
            for (var i = 0; i < imageViews.length; i++) {
                imageViews[i].style.display = isNext?"block":"none";
            }
        }

        if (isNext){
            imageViews[imageViewIndex].style.display ="none";

            isAgain = true;
            imageViewIndex++;

            if (imageViewIndex===imagesLength) {
                imageViewIndex = 0;
                isAgain = false;
                for (var i = 0; i < imageViews.length; i++) {
                    imageViews[i].style.display = isNext ? "block" : "none";
                }
            }
        }else {
            imageViewIndex--;
            if (imageViewIndex==-1){
                imageViewIndex = imagesLength-1;
                isAgain = false;
                for (var i = 0; i < imageViews.length; i++) {
                    imageViews[i].style.display = isNext?"block":"none";
                }
            }

            imageViews[imageViewIndex].style.display = "block";
            isAgain = true;

        }
        updatePoint();
    }

    //开启定时器 自动轮播
    function startTimer() {
        if (timer){
            clearInterval(timer);
        }
        timer = setInterval(function () {
            next();
        },3000);
    }

    //开启轮播图
    function start() {
        var images = [{imagePath:"images/1.jpg",toUrl:"https://www.baidu.com/"},{imagePath:"images/2.jpg",toUrl:"https://www.baidu.com/"},{imagePath:"images/3.jpg",toUrl:"https://www.baidu.com/"}];

        createView(images);
        startTimer();
    }

    start();

})();
