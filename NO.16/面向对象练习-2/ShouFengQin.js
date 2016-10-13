/**
 * Created by liuyujing on 16/10/13.
 */

window.shouFengQin = window.shouFengQin||{};
(function () {


    //创建手风琴中单个元素
    function ShiTu(fuYuanSu) {
        //创建元素
        this.beiJingTu = document.createElement("div");
        this.biaoTi = document.createElement("h2");
        this.neiRong = document.createElement("p");

        //设置样式
        this.beiJingTu.className = "puTong";
        this.biaoTi.className = "biaoTi";
        this.neiRong.className = "neiRong";

        //添加元素到 背景图
        this.beiJingTu.appendChild(this.biaoTi);
        this.beiJingTu.appendChild(this.neiRong);

        //把整个背景图  放到使用的元素上面
        fuYuanSu.appendChild(this.beiJingTu);

        //添加一个判断状态的标识
        this.xuanZhongDe = false;

        //为了区分 onclick中this
        var ziJi = this;

        /*
         * b： 传一个 是否 是选中的状态
         * true 选中状态
         * false 普通状态
         * 可以设置 初始是否选中状态
         * */
        this.sheZhiXuanZhong = function (b) {
            /*
             * 如果 传过来的b是true
             * */
            this.beiJingTu.className = b===true?"xuanZhong":"puTong";

            //更改ziJi.xuanZhongDe的值
            ziJi.xuanZhongDe = b;
        };

        this.beiJingTu.onclick = function () {

            this.className = ziJi.xuanZhongDe===false?"xuanZhong":"puTong";

            //更改ziJi.xuanZhongDe的值
            ziJi.xuanZhongDe = !ziJi.xuanZhongDe;
        };

    }


    //创建手风琴界面
    function ShouFengQin(fuShiTu,shuJu){

        var list = [];

        for (var i=0;i<shuJu.length;i++){
            var shitu = new ShiTu(fuShiTu);

            shitu.biaoTi.textContent = shuJu[i].biaoTi;
            shitu.neiRong.textContent = shuJu[i].neiRong;

            if (i===0){
                shitu.sheZhiXuanZhong(true);
            }
            list.push(shitu);
        }

    }

    shouFengQin.ShouFengQin = ShouFengQin;

})();
