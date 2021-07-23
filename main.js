
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
    var index1=houseType[5].selectedIndex;
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
var city = document.getElementById("county");
var area=city.area;