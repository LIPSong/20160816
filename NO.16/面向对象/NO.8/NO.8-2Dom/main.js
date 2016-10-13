/**
 * Created by liuyujing on 16/9/23.
 */

onload = function () {

//    ---------Document----------
//    需要使用Document的对象调用（除了类方法）
//    document->js中内置的对象

//    1.document.body	返回文档的body元素
    var body = document.body;
    console.log(body);

//    2.document.createElement("标签名字的字符串")创建元素节点
    var node = document.createElement("div");
    console.log(node);
    body.appendChild(node);

//    3.document.createAttribute()创建属性节点
    var att = document.createAttribute("class");
    att.value = "home";

//    4.document.setAttributeNode()设置属性节点
    node.setAttributeNode(att);
    console.log(node);

//    5.document.createTextNode()	创建文本节点
    var textNode = document.createTextNode("这是一个文字节点");
    node.appendChild(textNode);

//    6.document.getElementById 从HTML中 获得一个ID是多少的元素
    var inputNode = document.getElementById("nickView");
    inputNode.value = "请输入昵称";
    console.log(inputNode);
//    7.document.getElementsByName()	通过name名字找到对应对象数组
    var elements = document.getElementsByName("nameInput");
    console.log(elements);

//    8.document.getElementsByTagName()	通过标签名的找到对应对象数组
    var elementsByTagName = document.getElementsByTagName("input");
    console.log(elementsByTagName);

//    9.document. getElementsByClassName() 得到类名是什么 的所有节点
    var elementsByClassName = document.getElementsByClassName("home");
    console.log(elementsByClassName);

//    10.document.addEventListener() 给document添加监听事件
//    type(事件的类型),listener（监听者）
//    监听者监视 某个事件的那个人 -> 如果发现有事件操作了 就会告诉监听者
//     document.addEventListener("click",function () {
//         alert("点击了");
//     });

//    Element
//    使用元素对象 去调用（自己创建的 或者  获取到的）
//    1.给元素添加 监听事件
    node.addEventListener("click",function (event) {
        // alert("点击了");
        console.log(event);
    });

//    2.添加一个 子元素到 某个节点
    var pNode = document.createElement("p");
    node.appendChild(pNode);

//    3.element.attributes
    var atts = node.attributes;
    console.log(atts);

//    4.element.childNodes
    var elements = node.childNodes;
    console.log(elements);

//    5.element.className	设置或返回元素的class属性
    pNode.className = "message";
    console.log(node.className);

//    6.getElementsByTagName()
    var items = node.getElementsByTagName("p");
    console.log(items);

//    7.getAttribute
    console.log(node.getAttribute("class"));
//    8.element.getAttributeNode()
    console.log(node.getAttributeNode("textNode"));
//    9.element. getElementsByClassName()
    console.log(node.getElementsByClassName("XX"));

//    10.element.id
    node.id = "backgroundView";

//    11.innerHTML 添加html代码
    node.innerHTML = "<h3></h3>";

//    12.innerText 设置元素上面的内容
    node.innerText = "123456789";

//    13.textContent
    node.textContent = "ertytuio";

//    Attribute
//    1.attr.name	返回属性名称
//    2.attr.value	设置或者返回属性值
    /*
    var att = document.createAttribute("class");
    att.value = "home";
    console.log(att.name);
    */

//    Event
//     onclick:单击事件
    var div = document.createElement("div");
    div.innerText = "点击我";
    document.body.appendChild(div);

    // div.onclick = function () {
    //     alert("...");
    // }


    var imageNode = document.createElement("img");
    imageNode.src = "路径";
    node.appendChild(imageNode);


//    定时器 重复执行的定时器
//     setInterval(重复执行的方法,毫秒数); 1000毫秒=1秒
    var timer = setInterval(function () {
        console.log("欢迎光临~");
    },1000);

    div.onclick = function () {
        clearInterval(timer);
    };

//    setTimeout() clearTimeout() 只执行一次


};