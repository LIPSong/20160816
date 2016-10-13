/**
 * Created by liuyujing on 16/9/25.
 */
(function () {

    function createView() {
        var gameView = document.createElement("div");
        gameView.style.cssText = "width:1000px;height:1000px;background:url(image/backgroundImage.jpg);padding:100px";
        document.body.appendChild(gameView);

        var statusView = document.createElement("div");
        gameView.appendChild(statusView);
        var statusInfos = [{id:"time",title:"60秒"},{id:"score",title:"0分"}];
        for (var i=0;i<statusInfos.length;i++){
            var info = statusInfos[i];
            var view = document.createElement("div");
            view.style.cssText = "height:30px;width:100px;background:yellow;margin:5px;text-align:center;line-height:30px";
            view.id = info.id;
            view.innerText = info.title;
            statusView.appendChild(view);
        }

        var backgroundView = document.createElement("div");
        backgroundView.style.cssText = "width:500px;height:300px;margin:auto";
        gameView.appendChild(backgroundView);

        var itemInfos = [{text:"黑色",id:"showMessageView"},{text:"黑色",id:"other1"},{text:"红色",id:"other2"},{text:"蓝色",id:"other3"}];
        for (var i=0;i<4;i++){
            var info = itemInfos[i];
            var view = document.createElement("div");
            view.style.cssText = "background:yellow;width:100px;height:100px;margin:20px;text-align:center; line-height:100px;border-radius:50px;font-size:25px";
            view.innerText = info.text;
            view.id = info.id;
            backgroundView.appendChild(view);
            if(i!==0){
                view.style.float = "left";
            }else {
                view.style.margin = "0 160px";
            }
        }

    }

    window.ColorView = createView;
})();