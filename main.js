
var title = document.querySelector("h1");
var button = document.querySelector("button");
var a=10;
var b= typeof(a);
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

//show the Emitting Factor
function Displayfactor(){
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    document.getElementById("f1").innerHTML = ftext1;
    document.getElementById("f2").innerHTML = ftext2;
    document.getElementById("f3").innerHTML = ftext3;
    document.getElementById("f4").innerHTML = ftext4;
    document.getElementById("f5").innerHTML = ftext5;
}

//show the control factor
function displayControlFactor(){
    var controlType = document.getElementsByTagName("select");
    var ctext1 =controlType[10].value;
    var ctext2 =controlType[11].value;
    var ctext3 =controlType[12].value;
    var ctext4 =controlType[13].value;
    var ctext5 =controlType[14].value;
    document.getElementById("c1").innerHTML = ctext1;
    document.getElementById("c2").innerHTML = ctext2;
    document.getElementById("c3").innerHTML = ctext3;
    document.getElementById("c4").innerHTML = ctext4;
    document.getElementById("c5").innerHTML = ctext5;
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

function sourceFactor(){
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    var controlType = document.getElementsByTagName("select");
    var ctext1 =controlType[10].value;
    var ctext2 =controlType[11].value;
    var ctext3 =controlType[12].value;
    var ctext4 =controlType[13].value;
    var ctext5 =controlType[14].value;
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

    document.getElementById("s1").innerHTML = (ftext1*ctext1*width1*length1/10000).toFixed(0);
    document.getElementById("s2").innerHTML = (ftext1*ctext1*width2*length2/10000).toFixed(0);
    document.getElementById("s3").innerHTML = (ftext1*ctext1*width3*length3/10000).toFixed(0);
    document.getElementById("s4").innerHTML = (ftext1*ctext1*width3*length4/10000).toFixed(0);
    document.getElementById("s5").innerHTML = (ftext1*ctext1*width5*length5/10000).toFixed(0);

}

function showTable(){
    document.getElementById("info").innerHTML="";
    var Table1=document.getElementById("are1");
    var objCells=Table1.rows.item(3).cells;
    info.innerHTML=info.innerHTML+' '+objCells.item(4).innerHTML;
}

function showTableData() {
    document.getElementById('info').innerHTML = "";
    var myTab = document.getElementById('are2');

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 0; i < myTab.rows.length; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) {
            info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
        }
        info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
    }
}

function getCellValue(a,b) {
    var tem=document.getElementById("are3");
    document.getElementById("info").innerHTML = tem.rows[a].cells[b].innerText;
  }