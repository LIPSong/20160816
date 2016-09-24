/**
 * Created by liuyujing on 16/9/19.
 */
var numberList = [4,66,2,34,8,8,2,99];
//冒泡排序
for (var i=0;i<numberList.length;i++){
    for (var j=i;j<numberList.length;j++){
        if (numberList[i]>numberList[j]){
            var temp = numberList[i];
            numberList[i]=numberList[j];
            numberList[j]=temp;
        }
    }
}
console.log(numberList);

var max=numberList[0];
var min=numberList[0];
for (var i=0;i<numberList.length;i++){
    if (numberList[i]>max){
        max = numberList[i];
    }
    if (numberList[i]<min){
        min = numberList[i];
    }
}
console.log(max,min);

for (var i=1;i<=9;i++){
    for (var j=1;j<=i;j++){
        document.write(j+"*"+i+"="+(i*j)+"\t");
    }
    document.write("<br>");
}

var scores = [];
for (var i=0;i<10;i++){
    var num = parseFloat(prompt());
    scores.push(num);
}
console.log(scores);
