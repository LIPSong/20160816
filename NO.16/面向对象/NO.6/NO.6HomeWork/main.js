/**
 * Created by liuyujing on 16/9/22.
 */

//加载完 界面  再去执行 onload里面的代码
onload = function () {

    function creatAppendView() {

        var backgroundView = document.createElement("div");
        backgroundView.style.height = "110px";
        document.body.appendChild(backgroundView);

        var list = [{id:"last",color:"red"},{id:"cur",color:"yellow"}];

        for (var i=0;i<list.length;i++){
            var info = list[i];

            var div = document.createElement("div");
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = info.color;
            div.style.float = "left";
            div.style.margin = "5px";
            backgroundView.appendChild(div);
        }

    }

    // creatAppendView();


    function createView() {
        var list = [{mark:"shitou",color:"red"},{mark:"jianzi",color:"blue"},{mark:"bu",color:"green"},{mark:"computer",color:"gray"}];

        var backgroundView = document.createElement("div");
        document.body.appendChild(backgroundView);

        for (var i=0;i<list.length;i++){
            var info = list[i];
            // info.mark
            //dom.id
            //是不相同的 因为类不一样
            var view = document.createElement("div");
            view.style.height = "100px";
            view.style.width = "100px";
            view.style.background = info.color;
            view.style.margin = "5px";
            view.id = info.mark;
            view.style.float = "left";

            if (i===list.length-1){
                view.style.clear = "both";
            }
            backgroundView.appendChild(view);
        }
    }
    createView();

};
