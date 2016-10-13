/**
 * Created by liuyujing on 16/9/26.
 */

(function () {

    function GuessView() {

            var list = [{mark:"shitou",color:"red"},{mark:"jiandao",color:"blue"},{mark:"bu",color:"green"},{mark:"computer",color:"gray"}];

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
                // view.style.background = info.color;
                view.style.margin = "5px";
                view.id = info.mark;
                view.style.float = "left";


                if (i===list.length-1){
                    view.style.clear = "both";
                }else {

                    view.onclick = function () {
                        console.log(this);

                    }
                }
                backgroundView.appendChild(view);
            }
        }


    window.GuessView = GuessView;

})();
