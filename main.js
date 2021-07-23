
var title = document.querySelector("h1");
var button = document.querySelector("button");
var a=10;
var b= typeof(a);
//document.write("the type of a is:" + b);
//show the selected county
// function isSelected() {
//     var cityName;
//     var city = document.getElementById("county");
//     for(i=0;i<city.length;i++){
//     if(city[i].selected==true){
//     cityName = city[i].innerText; //关键点
//     document.write("county Name:" + cityName);
//     }
//     }}
//     isSelected();
//show the current date and time
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

//show the Emitting Factor
function Displayfactor(){
    var houseType = document.getElementsByTagName("select");
    var text1 = houseType[5].value;
    var text2 = houseType[6].value;
    var text3 = houseType[7].value;
    var text4 = houseType[8].value;
    var text5 = houseType[9].value;
    document.getElementById("f1").innerHTML = text1;
    document.getElementById("f2").innerHTML = text2;
    document.getElementById("f3").innerHTML = text3;
    document.getElementById("f4").innerHTML = text4;
    document.getElementById("f5").innerHTML = text5;
}

//show the control factor
function displayControlFactor(){
    var controlType = document.getElementsByTagName("select");
    var text1 =controlType[10].value;
    var text2 =controlType[11].value;
    var text3 =controlType[12].value;
    var text4 =controlType[13].value;
    var text5 =controlType[14].value;
    document.getElementById("c1").innerHTML = text1;
    document.getElementById("c2").innerHTML = text2;
    document.getElementById("c3").innerHTML = text3;
    document.getElementById("c4").innerHTML = text4;
    document.getElementById("c5").innerHTML = text5;
}


function area(){
    var width1 = document.areaTable.width1.value;
    var width2 = document.areaTable.width2.value;
    var width3 = document.areaTable.width3.value;
    var width4 = document.areaTable.width4.value;
    var width5 = document.areaTable.width5.value;
    var length1 = document.areaTable.length1.value;
    var length2 = document.areaTable.length2.value;
    var length3 = document.areaTable.length3.value;
    var length4 = document.areaTable.length4.value;
    var length5 = document.areaTable.length5.value;
    var area1 = document.getElementById("area1");
    var area2 = document.getElementById("area2");
    var area3 = document.getElementById("area3");
    var area4 = document.getElementById("area4");
    var area5 = document.getElementById("area5");
    area1.innerHTML = width1 *length1;
    area2.innerHTML = width2 *length2;
    area3.innerHTML = width3 *length3;
    area4.innerHTML = width4 *length4;
    area5.innerHTML = width5 *length5;
}