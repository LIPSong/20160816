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

    //创建轮播图中的视图
    function createView(images) {
        imagesLength = images.length;

        var contentView = document.getElementById("content");

        for (var i=0;i<images.length;i++){
            /*类似文字的内容*/
            var imageView = document.createElement("div");
            contentView.appendChild(imageView);

            var image = document.createElement("img");
            image.src = images[i].imagePath;
            imageView.appendChild(image);

            imageView.className = "imageView";

        }

        var nextButton = document.getElementById("nextButton");
        nextButton.onclick = function () {
            next();
        };

        var preButton = document.getElementById("preButton");
        preButton.onclick = function () {
            pre();
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
            if (imageViewIndex===imagesLength){
                imageViewIndex = 0;
                isAgain = false;
                for (var i = 0; i < imageViews.length; i++) {
                    imageViews[i].style.display = isNext?"block":"none";
                }
            }
        }else {
            imageViewIndex--;
            console.log(imageViewIndex);
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

    }

    //开启定时器 自动轮播
    function startTimer() {
        
    }

    //开启轮播图
    function start() {
        var images = [{imagePath:"images/1.jpg"},{imagePath:"images/2.jpg"},{imagePath:"images/3.jpg"}];

        createView(images);
        startTimer();
    }

    start();

})();
