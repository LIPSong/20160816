/**
 * Created by liuyujing on 16/9/23.
 */



(function () {

    function Monster(_name) {
        this.name = _name;
        this.att = function () {
            console.log("攻击英雄");
        }
    }
    window.Monster = Monster;

})();

