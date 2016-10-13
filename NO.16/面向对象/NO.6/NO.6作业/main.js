/**
 * Created by liuyujing on 16/9/22.
 */
onload = function () {
    // 1.显示用户输入的内容  和上一次 用户输入的内容  点击按钮开始接龙 如果正确显示笑脸 不正确哭
//2.石头剪子布 界面

    function createAppendView() {

        var list = [{id:"last",text:"",color:"red"},{id:"cur",text:"",color:"yellow"}];
        var blackgroundView = document.createElement("div");
        blackgroundView.style.height = "110px";
        document.body.appendChild(blackgroundView);
        for (var i=0;i<list.length;i++){
            var info = list[i];
            var div = document.createElement("div");
            div.id = info.id;
            div.style.height = "100px";
            div.style.width = "100px";
            div.style.margin = "5px";
            div.style.background = info.color;
            div.style.float = "left";
            blackgroundView.appendChild(div);
        }
    }

    createAppendView();


    function createView() {

        var list = [{id:"shitou",color:"red"},{id:"jianzi",color:"blue"},{id:"bu",color:"yellow"},{id:"computer",color:"green"}];

        var blackgroundView = document.createElement("div");
        blackgroundView.style.height = "110px";
        document.body.appendChild(blackgroundView);

        for (var i=0;i<list.length;i++){
            var info = list[i];
            var div = document.createElement("div");
            div.id = info.id;
            div.style.background = info.color;
            div.style.height = "100px";
            div.style.width = "100px";
            div.style.margin = "5px";
            div.style.float = "left";
            if (i===list.length-1){
                div.style.clear = "both";
            }
            blackgroundView.appendChild(div);
        }

    }
    createView();

};
