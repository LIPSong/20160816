/**
 * Created by liuyujing on 16/10/7.
 */
(function () {

    function CreateColorView(rowNum,color,opacity) {
        var space = 5;
        var width = (400 - (rowNum+1)*5)/rowNum;
        var colorView = document.createElement("div");
        colorView.style.cssText = "background:"+color+";width:"+width+"px;height:"+width+"px;opacity:"+opacity+";margin:"+space+"px 0 0 "+space+"px;float:left";
        colorView.className = "colorView";
        return colorView;
    }

    window.CreateColorView = CreateColorView;
})();