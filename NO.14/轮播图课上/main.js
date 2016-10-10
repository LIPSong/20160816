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

    //定时器
    var timer;

    //创建轮播图中的视图
    function createView(images) {
        imagesLength = images.length;

        var contentView = document.getElementById("content");

        //设置小圆点的右边距
        var rightSpace = 30;
        for (var i=0;i<images.length;i++){
            /*类似文字的内容*/
            var imageView = document.createElement("div");
            contentView.appendChild(imageView);

            var image = document.createElement("img");
            image.src = images[i].imagePath;
            imageView.appendChild(image);

            imageView.className = "imageView";

            //创建指示的圆点
            var pointButton = document.createElement("button");
            pointButton.textContent = i+1;
            pointButton.className = "pointButton";

            //让每一个小圆点的右边距 逐渐向右变靠近 拉开距离
            rightSpace -= 5;
            //设置右边距
            pointButton.style.right = ""+rightSpace+"%";
            contentView.appendChild(pointButton);
            //默认 第一个页面是选择状态
            if (i===0){
                pointButton.id = "selectedButton";
            }
            //鼠标移动到小圆点  停止定时器
            addMouseEvent(pointButton);

        //    给小圆点添加点击事件
            pointButton.onclick = function () {
                //点击小圆点  改变显示的视图 -> 改变视图显示的下标
                //点击完成之后  更新视图的状态 更新小圆点的状态
                imageViewIndex = this.textContent-1;
                updateImageView();
            }
        }

        var nextButton = document.getElementById("nextButton");
        nextButton.onclick = function () {
            next();
        };

        var preButton = document.getElementById("preButton");
        preButton.onclick = function () {
            pre();
        };

        //onmouseover 鼠标移动到某个元素内部 触发的事件
        addMouseEvent(contentView);
        addMouseEvent(nextButton);
        addMouseEvent(preButton);

    }

    //封装 鼠标移入 移除事件
    function addMouseEvent(view) {
        view.onmouseenter = function () {
            clearInterval(timer);
        };
        view.onmouseout = function () {
            startTimer();
        };
    }

    //更新小圆点的状态
    function updatePointStatus() {
    //    取消上一个小圆点的id selectedButton
        document.getElementById("selectedButton").id = "";
        //    设置与图片视图相同下标 小圆点的id selectedButton
        document.getElementsByClassName("pointButton")[imageViewIndex].id = "selectedButton";
    }

    //更新轮播视图的显示状态
    function updateImageView() {
        var imageViews = document.getElementsByClassName("imageView");
        for (var i=0;i<imageViews.length;i++){
            imageViews[i].style.display = "none";
        }

        imageViews[imageViewIndex].style.display = "block";
        updatePointStatus();
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
    //    找到所有的imageView display设置成none
        var imageViews = document.getElementsByClassName("imageView");
        for (var i=0;i<imageViews.length;i++){
            imageViews[i].style.display = "none";
        }

        if(isNext){
        //    下一页
            imageViewIndex++;
            // 如果到了最后一个 需要让下标回归到第一个
            if(imageViewIndex === imageViews.length){
                imageViewIndex = 0;
            }
        }else {
        //    上一页
            imageViewIndex--;
            if(imageViewIndex === -1){
                imageViewIndex = imageViews.length-1;
            }
        }

        imageViews[imageViewIndex].style.display = "block";

        //更新小圆点的状态 与轮播视图的位置匹配
        updatePointStatus();
    }

    //开启定时器 自动轮播
    function startTimer() {
        if(timer){
            clearInterval(timer);
        }
        timer = setInterval(next,3000);
    }

    //开启轮播图
    function start() {
        var images = [{imagePath:"images/1.jpg"},{imagePath:"images/2.jpg"},{imagePath:"images/3.jpg"}];

        createView(images);
        startTimer();
    }

    start();

})();
