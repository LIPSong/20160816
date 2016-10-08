/**
 * Created by liuyujing on 16/10/8.
 */
(function () {


    function StartGame() {

        var rowNum = 2;
        var opacity = 1.0;
        var specialOpacity = 0.5;

        var colors = ["#9E413B","#33539E","#9E1A8D","#259E2D"];

        function createViews() {
            var color = colors[parseInt(Math.random()*10)%colors.length];
            var otherViewID = parseInt(Math.random()*1000)%(rowNum*rowNum);
            var backgroundView = document.createElement("div");
            backgroundView.id = "backgroundView";
            document.body.appendChild(backgroundView);
            for (var i=0;i<rowNum*rowNum;i++){
                var colorView = CreateColorView(rowNum,color,opacity);
                backgroundView.appendChild(colorView);

                if (i==otherViewID){
                    // colorView.id = otherViewID;
                    colorView.style.opacity = opacity-specialOpacity;
                    colorView.onclick = function () {
                        success();
                    }
                }else {
                    colorView.onclick = function () {
                        final();
                    }
                }
            }
        }

        function success() {
            rowNum++;
            specialOpacity-=0.05;
            specialOpacity = specialOpacity===0.1?0.1:specialOpacity;
            console.log(specialOpacity);
            var backgroundView = document.getElementById("backgroundView");
            document.body.removeChild(backgroundView);
            createViews();
        }

        function final() {
            alert("点错了");
            rowNum = 2;
            specialOpacity = 0.3;
            opacity = 1.0;
            var backgroundView = document.getElementById("backgroundView");
            document.body.removeChild(backgroundView);
            createViews();
        }

        createViews();

    }

    window.StartGame = StartGame;
})();
