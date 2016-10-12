/**
 * Created by liuyujing on 16/10/11.
 */

// var imageTool = {};

//对外提供一个统一的接口
//以后可以通过imageTool 来找 里面的内容
window.imageTool = window.imageTool||{};

(function () {

    /*
     * 按照父容器 等宽放大缩小
     * img 需要放大缩小的图片元素
     * superEle img元素所在的 父容器
     * */
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

    function scaleForImageCenter(image,superView) {
        var newImage = new Image();
        newImage.src = image.src;
        superView.style.overflow = "hidden";

        var superViewWidth = parseInt(superView.style.width);
        var superViewHeight = parseInt(superView.style.height);

        var scale = 0;
        var space = 0;

        if (superViewWidth>superViewHeight){
            scale = superViewWidth/newImage.width;
        }else{
            scale = superViewHeight/newImage.height;

        }
        newImage.width *= scale;
        newImage.height *= scale;

        if (superViewWidth>superViewHeight){
            space = (superViewHeight-newImage.height)/2;
            newImage.style.cssText = "position:relative;top:"+space+"px;";
        }else{
            space = (superViewWidth-newImage.width)/2;
            newImage.style.cssText = "position:position;left:"+space+"px;";
        }

        return newImage;
    }

    imageTool.scaleForWidth = imageTool.caiqie = scaleForWidth;
    imageTool.scaleForHeight = scaleForHeight;
    imageTool.scaleForSuperEle = scaleForSuperEle;
    imageTool.scaleForImageCenter = scaleForImageCenter;

})();


// var t = {};
// t.a = function () {
//
// };
// t.a();

// window.t = window.t||{};
//
// (function () {
//     function a() {
//
//     }
//     function b() {
//
//     }
//     function c() {
//
//     }
//     t.a = a;
//     t.b = b;
// })();


