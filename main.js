// console.log("hello".length);
// console.log("hello".charAt(1));
// console.log("hello world".toUpperCase());
// console.log("hello world".replace("hello", "goodbye"));

// var name="Mengling";
// console.log(name);
// let nn="jiuihu";
// console.log(nn);
//  const pi=3.14;
//  console.log(pi);
// var x=9;
// x=x+8;
// console.log(x);

// var age=19;
// var allow = age>=18 ? "Yes" : "No";
// console.log(allow);
//object
// var obj = new Object();
// var obj2 = {};

// obj = {
//     name: "Mengling",
//     age:20,
//     email: "hihui.gmail.com",
//     contact:{
//         phone: "32784792",
//         telegrame: "@nihui"
//     }
// }
// obj.age = 84;

// console.log(obj.age);


//array
// var  a=new Array();
// var b=["dog", "cat", "mouse"];
// a[0]="hiouh";
// console.log(a);
// console.log("The array b is: "+b);

//function
// var a=1;
// function add(s){
//     a *= s;
// }
// add(2);
// console.log(a);

// function add(){
//     let sum=0;
//     for(let i=0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// let ans = add(1,2,3,4,5,6,7,8,9,10);
// console.log(ans);


// function makeAdd(a){
//     return function(b){
//         return a+b;
//     }
// }

// var x=makeAdd(5);
// var sum=x(7);
// console.log(sum);
var title = document.querySelector("h1");
var button = document.querySelector("button");
var a=10;
var b= typeof(a);
//document.write("the type of a is:" + b);
//show the selected county
function isSelected() {
    var cityName;
    var city = document.getElementById("county");
    for(i=0;i<city.length;i++){
    if(city[i].selected==true){
    cityName = city[i].innerText; //关键点
    document.write("county Name:" + cityName);
    }
    }}
    isSelected();
//show the current date and time
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();