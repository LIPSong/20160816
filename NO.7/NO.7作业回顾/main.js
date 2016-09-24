/**
 * Created by liuyujing on 16/9/23.
 */


//封装继承的方法
function inherit(subType,superType) {
    var _prototype = Object.create(superType.prototype);
    _prototype.constructor = subType;
    subType.prototype = _prototype;
}

//让英雄、怪物 -> 动物
function Animal(_type) {
    this.type = _type;
}

function Hero(_type,_name) {
    Animal.call(this,_type);
    this.name = _name;
}

function Monster(_type,_mark) {
    Animal.call(this,_type);
    this.mark = _mark;
}

inherit(Hero,Animal);

var aoTeMan = new Hero("站着","奥特曼");
console.log(aoTeMan);

inherit(Monster,Animal);
var wa = new Monster("趴着","青蛙");
console.log(wa);

//法术系/物理系Hero -> Hero
//magicValue 魔法值
function MagicHero(_type,_name,_magicValue) {
    Hero.apply(this,arguments);
    this.magicValue = _magicValue;
}

//attValue 攻击力值
function PhyHero(_type,_name,_attValue) {
    Hero.apply(this,arguments);
    this.attValue = _attValue;
}

inherit(MagicHero,Hero);
inherit(PhyHero,Hero);

var boTe = new MagicHero("站着","哈利波特",1000);

var wuShi = new PhyHero("站着","武士.王",1500);

console.log(boTe);
console.log(wuShi);


//法术系/物理系Monster -> Monster
function MagicMonster(_type,_mark,_magicValue) {
    Monster.apply(this,arguments);
    this.magicValue = _magicValue;
}

function PhyMonster(_type,_mark,_attValue) {
    Monster.apply(this,arguments);
    this.attValue = _attValue;
}

inherit(MagicMonster,Monster);
inherit(PhyMonster,Monster);

var fireFox = new MagicMonster("爬着","火狐",300);
var xuanWu = new PhyMonster("爬着","玄武",500);
console.log(fireFox);
console.log(xuanWu);
