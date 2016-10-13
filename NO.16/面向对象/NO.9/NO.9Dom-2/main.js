/**
 * Created by liuyujing on 16/9/26.
 */
(function () {
/*
    var div = document.createElement("div");
    // div.innerText = "123456789876543";
    div.style.cssText = "height:100px;width:100px;background:red";
    div.onclick = function () {
        alert("");
    };

    document.body.appendChild(div);

    var addDiv = div.cloneNode(false);
    div.appendChild(addDiv);

    // var cloneDiv = div.cloneNode(false);//只克隆元素本身 不克隆里面的内容
    var cloneDiv = div.cloneNode(true);
    document.body.appendChild(cloneDiv);

    console.log(div.firstChild);

    var firstChild = div.firstChild;
    firstChild.style.background = "yellow";
    firstChild.style.height = "50px";


    var inputEle = document.getElementById("userName");
    inputEle.value = "123";
    inputEle.focus();

    console.log(inputEle.hasAttribute("id"));
    console.log(inputEle.hasAttributes());

    console.log(inputEle.hasChildNodes());
    // console.log(inputEle.hasfocus());

    var div2 = div.cloneNode(false);
    document.body.insertBefore(div2,inputEle);

    // console.log(div2.isContentEditable);

    console.log(div.lastChild);
    console.log(div.nodeType);

    var textNode = document.createTextNode("1111");

    console.log(textNode.nodeValue);

    console.log(inputEle.parentNode);

    // inputEle.removeAttribute("id");
    var att = document.createAttribute("class");
    att.value = "box";
    div.setAttributeNode(att);

    // div.getAttribute("class");
    div.removeChild(firstChild);
*/

    var div = document.createElement("div");
    div.style.cssText = "height:100px;width:100px;background:red";
    document.body.appendChild(div);
    var listener = function () {
      alert("");
    };
    div.addEventListener("click",listener);
    // div.removeEventListener("click",listener);

    var cancalDiv = document.createElement("div");
    cancalDiv.innerText = "取消上面的监听事件";
    // document.body.appendChild(cancalDiv);

    // cancalDiv.onclick = function () {
    //     div.removeEventListener("click",listener);
    // }

    document.body.replaceChild(cancalDiv,div);

    console.log(cancalDiv.scrollLeft);

    cancalDiv.textContent = "12456";



})();
