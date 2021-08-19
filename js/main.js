
var title = document.querySelector("h1");
var button = document.querySelector("button");
var a = 10;
var b = typeof (a);
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

//show the Emitting Factor
function Displayfactor() {
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
function displayControlFactor() {
    var controlType = document.getElementsByTagName("select");
    var ctext1 = controlType[10].value;
    var ctext2 = controlType[11].value;
    var ctext3 = controlType[12].value;
    var ctext4 = controlType[13].value;
    var ctext5 = controlType[14].value;
    document.getElementById("c1").innerHTML = ctext1;
    document.getElementById("c2").innerHTML = ctext2;
    document.getElementById("c3").innerHTML = ctext3;
    document.getElementById("c4").innerHTML = ctext4;
    document.getElementById("c5").innerHTML = ctext5;
}


function area() {
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
    area1.innerHTML = width1 * length1;
    area2.innerHTML = width2 * length2;
    area3.innerHTML = width3 * length3;
    area4.innerHTML = width4 * length4;
    area5.innerHTML = width5 * length5;
}

function sourceFactor() {
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    var controlType = document.getElementsByTagName("select");
    var ctext1 = controlType[10].value;
    var ctext2 = controlType[11].value;
    var ctext3 = controlType[12].value;
    var ctext4 = controlType[13].value;
    var ctext5 = controlType[14].value;
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

    document.getElementById("s1").innerHTML = (ftext1 * ctext1 * width1 * length1 / 10000).toFixed(0);
    document.getElementById("s2").innerHTML = (ftext2 * ctext2 * width2 * length2 / 10000).toFixed(0);
    document.getElementById("s3").innerHTML = (ftext3 * ctext3 * width3 * length3 / 10000).toFixed(0);
    document.getElementById("s4").innerHTML = (ftext4 * ctext4 * width4 * length4 / 10000).toFixed(0);
    document.getElementById("s5").innerHTML = (ftext5 * ctext5 * width5 * length5 / 10000).toFixed(0);

}

function totalFactor() {
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    var controlType = document.getElementsByTagName("select");
    var ctext1 = controlType[10].value;
    var ctext2 = controlType[11].value;
    var ctext3 = controlType[12].value;
    var ctext4 = controlType[13].value;
    var ctext5 = controlType[14].value;
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
    var t1 = ftext1 * ctext1 * width1 * length1 / 10000;
    var t2 = ftext2 * ctext2 * width2 * length2 / 10000;
    var t3 = ftext3 * ctext3 * width3 * length3 / 10000;
    var t4 = ftext4 * ctext4 * width4 * length4 / 10000;
    var t5 = ftext5 * ctext5 * width5 * length5 / 10000;
    var tal = Number(t1) + Number(t2) + Number(t3) + Number(t4) + Number(t5);
    if (tal > 4000)
        alert("Hello, the valid total odor emitting factor should be between 0 to 4000.\nPlease check your input.");
    document.getElementById("TOEF").innerHTML = tal.toFixed(0);
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

function getCellValue1(a, b) {
    var tem = document.getElementById("are3");
    document.getElementById("info").innerHTML = tem.rows[a].cells[b].innerText;
    //return tem.rows[a].cells[b].innerText;
}

function getCellValue2(a, b) {
    var tem = document.getElementById("are2");
    document.getElementById("info").innerHTML = tem.rows[a].cells[b].innerText;
    //return tem.rows[a].cells[b].innerText;
}

function getCellValue3(a, b) {
    var tem = document.getElementById("are3");
    document.getElementById("info").innerHTML = tem.rows[a].cells[b].innerText;
    //return tem.rows[a].cells[b].innerText;
}

function getCountyArea(el, dl) {
    if (el.value.trim() != '') {
        var opSelected = dl.querySelector(`[value="${el.value}"]`);
        var option = document.createElement("option");
        option.value = opSelected.value;
        option.text = opSelected.getAttribute('data-value');
        document.getElementById('CountyArea').innerHTML = option.innerText;
    }
}

function changeDirection(el, dl) {
    var area;
    if (el.value.trim() != '') {
        var opSelected = dl.querySelector(`[value="${el.value}"]`);
        var option = document.createElement("option");
        option.value = opSelected.value;
        option.text = opSelected.getAttribute('data-value');
        area = option.innerText;
    }
    var x = document.getElementById("distanceTable").rows[1].cells;
    var y = document.getElementById("distanceTable").rows[2].cells;
    var z = document.getElementById("distanceTable").rows[3].cells;
    var w = document.getElementById("distanceTable").rows[4].cells;
    if (area == "1") {
        x[0].innerHTML = "North";
        y[0].innerHTML = "East";
        z[0].innerHTML = "South";
        w[0].innerHTML = "West";
    }
    else {
        x[0].innerHTML = "Northeast";
        y[0].innerHTML = "Southeast";
        z[0].innerHTML = "Southwest";
        w[0].innerHTML = "Northwest";
    }
}

function changeTableCell(el, dl) {
    var area;
    if (el.value.trim() != '') {
        var opSelected = dl.querySelector(`[value="${el.value}"]`);
        var option = document.createElement("option");
        option.value = opSelected.value;
        option.text = opSelected.getAttribute('data-value');
        area = option.innerText;
    }
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    var controlType = document.getElementsByTagName("select");
    var ctext1 = controlType[10].value;
    var ctext2 = controlType[11].value;
    var ctext3 = controlType[12].value;
    var ctext4 = controlType[13].value;
    var ctext5 = controlType[14].value;
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
    var t1 = ftext1 * ctext1 * width1 * length1 / 10000;
    var t2 = ftext2 * ctext2 * width2 * length2 / 10000;
    var t3 = ftext3 * ctext3 * width3 * length3 / 10000;
    var t4 = ftext4 * ctext4 * width4 * length4 / 10000;
    var t5 = ftext5 * ctext5 * width5 * length5 / 10000;
    var tal = Number(t1) + Number(t2) + Number(t3) + Number(t4) + Number(t5);
    var N_99;
    var N_98;
    var N_97;
    var N_96;
    var N_94;
    var N_91;
    var E_99;
    var E_98;
    var E_97;
    var E_96;
    var E_94;
    var E_91;
    var S_99;
    var S_98;
    var S_97;
    var S_96;
    var S_94;
    var S_91;
    var W_99;
    var W_98;
    var W_97;
    var W_96;
    var W_94;
    var W_91;

    if (tal < 50) {
        var n_99_1 = 3;
        var n_99_2 = 3;
        var n_98_1 = 3;
        var n_98_2 = 4;
        var n_97_1 = 3;
        var n_97_2 = 5;
        var n_96_1 = 3;
        var n_96_2 = 6;
        var n_94_1 = 3;
        var n_94_2 = 7;
        var n_91_1 = 3;
        var n_91_2 = 8;
        var e_99_1 = 14;
        var e_99_2 = 3;
        var e_98_1 = 14;
        var e_98_2 = 4;
        var e_97_1 = 14;
        var e_97_2 = 5;
        var e_96_1 = 14;
        var e_96_2 = 6;
        var e_94_1 = 14;
        var e_94_2 = 7;
        var e_91_1 = 14;
        var e_91_2 = 8;
        var s_99_1 = 25;
        var s_99_2 = 3;
        var s_98_1 = 25;
        var s_98_2 = 4;
        var s_97_1 = 25;
        var s_97_2 = 5;
        var s_96_1 = 25;
        var s_96_2 = 6;
        var s_94_1 = 25;
        var s_94_2 = 7;
        var s_91_1 = 25;
        var s_91_2 = 8;
        var w_99_1 = 36;
        var w_99_2 = 3;
        var w_98_1 = 36;
        var w_98_2 = 4;
        var w_97_1 = 36;
        var w_97_2 = 5;
        var w_96_1 = 36;
        var w_96_2 = 6;
        var w_94_1 = 36;
        var w_94_2 = 7;
        var w_91_1 = 36;
        var w_91_2 = 8;
    }
    else if (tal < 100) {
        var n_99_1 = 4;
        var n_99_2 = 3;
        var n_98_1 = 4;
        var n_98_2 = 4;
        var n_97_1 = 4;
        var n_97_2 = 5;
        var n_96_1 = 4;
        var n_96_2 = 6;
        var n_94_1 = 4;
        var n_94_2 = 7;
        var n_91_1 = 4;
        var n_91_2 = 8;
        var e_99_1 = 15;
        var e_99_2 = 3;
        var e_98_1 = 15;
        var e_98_2 = 4;
        var e_97_1 = 15;
        var e_97_2 = 5;
        var e_96_1 = 15;
        var e_96_2 = 6;
        var e_94_1 = 15;
        var e_94_2 = 7;
        var e_91_1 = 15;
        var e_91_2 = 8;
        var s_99_1 = 26;
        var s_99_2 = 3;
        var s_98_1 = 26;
        var s_98_2 = 4;
        var s_97_1 = 26;
        var s_97_2 = 5;
        var s_96_1 = 26;
        var s_96_2 = 6;
        var s_94_1 = 26;
        var s_94_2 = 7;
        var s_91_1 = 26;
        var s_91_2 = 8;
        var w_99_1 = 37;
        var w_99_2 = 3;
        var w_98_1 = 37;
        var w_98_2 = 4;
        var w_97_1 = 37;
        var w_97_2 = 5;
        var w_96_1 = 37;
        var w_96_2 = 6;
        var w_94_1 = 37;
        var w_94_2 = 7;
        var w_91_1 = 37;
        var w_91_2 = 8;
    }
    else if (tal < 200) {
        var n_99_1 = 5;
        var n_99_2 = 3;
        var n_98_1 = 5;
        var n_98_2 = 4;
        var n_97_1 = 5;
        var n_97_2 = 5;
        var n_96_1 = 5;
        var n_96_2 = 6;
        var n_94_1 = 5;
        var n_94_2 = 7;
        var n_91_1 = 5;
        var n_91_2 = 8;
        var e_99_1 = 16;
        var e_99_2 = 3;
        var e_98_1 = 16;
        var e_98_2 = 4;
        var e_97_1 = 16;
        var e_97_2 = 5;
        var e_96_1 = 16;
        var e_96_2 = 6;
        var e_94_1 = 16;
        var e_94_2 = 7;
        var e_91_1 = 16;
        var e_91_2 = 8;
        var s_99_1 = 27;
        var s_99_2 = 3;
        var s_98_1 = 27;
        var s_98_2 = 4;
        var s_97_1 = 27;
        var s_97_2 = 5;
        var s_96_1 = 27;
        var s_96_2 = 6;
        var s_94_1 = 27;
        var s_94_2 = 7;
        var s_91_1 = 27;
        var s_91_2 = 8;
        var w_99_1 = 38;
        var w_99_2 = 3;
        var w_98_1 = 38;
        var w_98_2 = 4;
        var w_97_1 = 38;
        var w_97_2 = 5;
        var w_96_1 = 38;
        var w_96_2 = 6;
        var w_94_1 = 38;
        var w_94_2 = 7;
        var w_91_1 = 38;
        var w_91_2 = 8;
    }
    else if (tal < 300) {
        var n_99_1 = 6;
        var n_99_2 = 3;
        var n_98_1 = 6;
        var n_98_2 = 4;
        var n_97_1 = 6;
        var n_97_2 = 5;
        var n_96_1 = 6;
        var n_96_2 = 6;
        var n_94_1 = 6;
        var n_94_2 = 7;
        var n_91_1 = 6;
        var n_91_2 = 8;
        var e_99_1 = 17;
        var e_99_2 = 3;
        var e_98_1 = 17;
        var e_98_2 = 4;
        var e_97_1 = 17;
        var e_97_2 = 5;
        var e_96_1 = 17;
        var e_96_2 = 6;
        var e_94_1 = 17;
        var e_94_2 = 7;
        var e_91_1 = 17;
        var e_91_2 = 8;
        var s_99_1 = 28;
        var s_99_2 = 3;
        var s_98_1 = 28;
        var s_98_2 = 4;
        var s_97_1 = 28;
        var s_97_2 = 5;
        var s_96_1 = 28;
        var s_96_2 = 6;
        var s_94_1 = 28;
        var s_94_2 = 7;
        var s_91_1 = 28;
        var s_91_2 = 8;
        var w_99_1 = 39;
        var w_99_2 = 3;
        var w_98_1 = 39;
        var w_98_2 = 4;
        var w_97_1 = 39;
        var w_97_2 = 5;
        var w_96_1 = 39;
        var w_96_2 = 6;
        var w_94_1 = 39;
        var w_94_2 = 7;
        var w_91_1 = 39;
        var w_91_2 = 8;
    }
    else if (tal < 400) {
        var n_99_1 = 7;
        var n_99_2 = 3;
        var n_98_1 = 7;
        var n_98_2 = 4;
        var n_97_1 = 7;
        var n_97_2 = 5;
        var n_96_1 = 7;
        var n_96_2 = 6;
        var n_94_1 = 7;
        var n_94_2 = 7;
        var n_91_1 = 7;
        var n_91_2 = 8;
        var e_99_1 = 18;
        var e_99_2 = 3;
        var e_98_1 = 18;
        var e_98_2 = 4;
        var e_97_1 = 18;
        var e_97_2 = 5;
        var e_96_1 = 18;
        var e_96_2 = 6;
        var e_94_1 = 18;
        var e_94_2 = 7;
        var e_91_1 = 18;
        var e_91_2 = 8;
        var s_99_1 = 29;
        var s_99_2 = 3;
        var s_98_1 = 29;
        var s_98_2 = 4;
        var s_97_1 = 29;
        var s_97_2 = 5;
        var s_96_1 = 29;
        var s_96_2 = 6;
        var s_94_1 = 29;
        var s_94_2 = 7;
        var s_91_1 = 29;
        var s_91_2 = 8;
        var w_99_1 = 40;
        var w_99_2 = 3;
        var w_98_1 = 40;
        var w_98_2 = 4;
        var w_97_1 = 40;
        var w_97_2 = 5;
        var w_96_1 = 40;
        var w_96_2 = 6;
        var w_94_1 = 40;
        var w_94_2 = 7;
        var w_91_1 = 40;
        var w_91_2 = 8;
    }
    else if (tal < 500) {
        var n_99_1 = 8;
        var n_99_2 = 3;
        var n_98_1 = 8;
        var n_98_2 = 4;
        var n_97_1 = 8;
        var n_97_2 = 5;
        var n_96_1 = 8;
        var n_96_2 = 6;
        var n_94_1 = 8;
        var n_94_2 = 7;
        var n_91_1 = 8;
        var n_91_2 = 8;
        var e_99_1 = 19;
        var e_99_2 = 3;
        var e_98_1 = 19;
        var e_98_2 = 4;
        var e_97_1 = 19;
        var e_97_2 = 5;
        var e_96_1 = 19;
        var e_96_2 = 6;
        var e_94_1 = 19;
        var e_94_2 = 7;
        var e_91_1 = 19;
        var e_91_2 = 8;
        var s_99_1 = 30;
        var s_99_2 = 3;
        var s_98_1 = 30;
        var s_98_2 = 4;
        var s_97_1 = 30;
        var s_97_2 = 5;
        var s_96_1 = 30;
        var s_96_2 = 6;
        var s_94_1 = 30;
        var s_94_2 = 7;
        var s_91_1 = 30;
        var s_91_2 = 8;
        var w_99_1 = 41;
        var w_99_2 = 3;
        var w_98_1 = 41;
        var w_98_2 = 4;
        var w_97_1 = 41;
        var w_97_2 = 5;
        var w_96_1 = 41;
        var w_96_2 = 6;
        var w_94_1 = 41;
        var w_94_2 = 7;
        var w_91_1 = 41;
        var w_91_2 = 8;
    }
    else if (tal < 1000) {
        var n_99_1 = 9;
        var n_99_2 = 3;
        var n_98_1 = 9;
        var n_98_2 = 4;
        var n_97_1 = 9;
        var n_97_2 = 5;
        var n_96_1 = 9;
        var n_96_2 = 6;
        var n_94_1 = 9;
        var n_94_2 = 7;
        var n_91_1 = 9;
        var n_91_2 = 8;
        var e_99_1 = 20;
        var e_99_2 = 3;
        var e_98_1 = 20;
        var e_98_2 = 4;
        var e_97_1 = 20;
        var e_97_2 = 5;
        var e_96_1 = 20;
        var e_96_2 = 6;
        var e_94_1 = 20;
        var e_94_2 = 7;
        var e_91_1 = 20;
        var e_91_2 = 8;
        var s_99_1 = 31;
        var s_99_2 = 3;
        var s_98_1 = 31;
        var s_98_2 = 4;
        var s_97_1 = 31;
        var s_97_2 = 5;
        var s_96_1 = 31;
        var s_96_2 = 6;
        var s_94_1 = 31;
        var s_94_2 = 7;
        var s_91_1 = 31;
        var s_91_2 = 8;
        var w_99_1 = 42;
        var w_99_2 = 3;
        var w_98_1 = 42;
        var w_98_2 = 4;
        var w_97_1 = 42;
        var w_97_2 = 5;
        var w_96_1 = 42;
        var w_96_2 = 6;
        var w_94_1 = 42;
        var w_94_2 = 7;
        var w_91_1 = 42;
        var w_91_2 = 8;
    }
    else if (tal < 2000) {
        var n_99_1 = 10;
        var n_99_2 = 3;
        var n_98_1 = 10;
        var n_98_2 = 4;
        var n_97_1 = 10;
        var n_97_2 = 5;
        var n_96_1 = 10;
        var n_96_2 = 6;
        var n_94_1 = 10;
        var n_94_2 = 7;
        var n_91_1 = 10;
        var n_91_2 = 8;
        var e_99_1 = 21;
        var e_99_2 = 3;
        var e_98_1 = 21;
        var e_98_2 = 4;
        var e_97_1 = 21;
        var e_97_2 = 5;
        var e_96_1 = 21;
        var e_96_2 = 6;
        var e_94_1 = 21;
        var e_94_2 = 7;
        var e_91_1 = 21;
        var e_91_2 = 8;
        var s_99_1 = 32;
        var s_99_2 = 3;
        var s_98_1 = 32;
        var s_98_2 = 4;
        var s_97_1 = 32;
        var s_97_2 = 5;
        var s_96_1 = 32;
        var s_96_2 = 6;
        var s_94_1 = 32;
        var s_94_2 = 7;
        var s_91_1 = 32;
        var s_91_2 = 8;
        var w_99_1 = 43;
        var w_99_2 = 3;
        var w_98_1 = 43;
        var w_98_2 = 4;
        var w_97_1 = 43;
        var w_97_2 = 5;
        var w_96_1 = 43;
        var w_96_2 = 6;
        var w_94_1 = 43;
        var w_94_2 = 7;
        var w_91_1 = 43;
        var w_91_2 = 8;
    }
    else if (tal < 3000) {
        var n_99_1 = 11;
        var n_99_2 = 3;
        var n_98_1 = 11;
        var n_98_2 = 4;
        var n_97_1 = 11;
        var n_97_2 = 5;
        var n_96_1 = 11;
        var n_96_2 = 6;
        var n_94_1 = 11;
        var n_94_2 = 7;
        var n_91_1 = 11;
        var n_91_2 = 8;
        var e_99_1 = 22;
        var e_99_2 = 3;
        var e_98_1 = 22;
        var e_98_2 = 4;
        var e_97_1 = 22;
        var e_97_2 = 5;
        var e_96_1 = 22;
        var e_96_2 = 6;
        var e_94_1 = 22;
        var e_94_2 = 7;
        var e_91_1 = 22;
        var e_91_2 = 8;
        var s_99_1 = 33;
        var s_99_2 = 3;
        var s_98_1 = 33;
        var s_98_2 = 4;
        var s_97_1 = 33;
        var s_97_2 = 5;
        var s_96_1 = 33;
        var s_96_2 = 6;
        var s_94_1 = 33;
        var s_94_2 = 7;
        var s_91_1 = 33;
        var s_91_2 = 8;
        var w_99_1 = 44;
        var w_99_2 = 3;
        var w_98_1 = 44;
        var w_98_2 = 4;
        var w_97_1 = 44;
        var w_97_2 = 5;
        var w_96_1 = 44;
        var w_96_2 = 6;
        var w_94_1 = 44;
        var w_94_2 = 7;
        var w_91_1 = 44;
        var w_91_2 = 8;
    }
    else if (tal < 4000) {
        var n_99_1 = 12;
        var n_99_2 = 3;
        var n_98_1 = 12;
        var n_98_2 = 4;
        var n_97_1 = 12;
        var n_97_2 = 5;
        var n_96_1 = 12;
        var n_96_2 = 6;
        var n_94_1 = 12;
        var n_94_2 = 7;
        var n_91_1 = 12;
        var n_91_2 = 8;
        var e_99_1 = 23;
        var e_99_2 = 3;
        var e_98_1 = 23;
        var e_98_2 = 4;
        var e_97_1 = 23;
        var e_97_2 = 5;
        var e_96_1 = 23;
        var e_96_2 = 6;
        var e_94_1 = 23;
        var e_94_2 = 7;
        var e_91_1 = 23;
        var e_91_2 = 8;
        var s_99_1 = 34;
        var s_99_2 = 3;
        var s_98_1 = 34;
        var s_98_2 = 4;
        var s_97_1 = 34;
        var s_97_2 = 5;
        var s_96_1 = 34;
        var s_96_2 = 6;
        var s_94_1 = 34;
        var s_94_2 = 7;
        var s_91_1 = 34;
        var s_91_2 = 8;
        var w_99_1 = 45;
        var w_99_2 = 3;
        var w_98_1 = 45;
        var w_98_2 = 4;
        var w_97_1 = 45;
        var w_97_2 = 5;
        var w_96_1 = 45;
        var w_96_2 = 6;
        var w_94_1 = 45;
        var w_94_2 = 7;
        var w_91_1 = 45;
        var w_91_2 = 8;
    }
    else {
        var n_99_1 = 0;
        var n_99_2 = 0;
        var n_98_1 = 0;
        var n_98_2 = 0;
        var n_97_1 = 0;
        var n_97_2 = 0;
        var n_96_1 = 0;
        var n_96_2 = 0;
        var n_94_1 = 0;
        var n_94_2 = 0;
        var n_91_1 = 0;
        var n_91_2 = 0;
        var e_99_1 = 0;
        var e_99_2 = 0;
        var e_98_1 = 0;
        var e_98_2 = 0;
        var e_97_1 = 0;
        var e_97_2 = 0;
        var e_96_1 = 0;
        var e_96_2 = 0;
        var e_94_1 = 0;
        var e_94_2 = 0;
        var e_91_1 = 0;
        var e_91_2 = 0;
        var s_99_1 = 0;
        var s_99_2 = 0;
        var s_98_1 = 0;
        var s_98_2 = 0;
        var s_97_1 = 0;
        var s_97_2 = 0;
        var s_96_1 = 0;
        var s_96_2 = 0;
        var s_94_1 = 0;
        var s_94_2 = 0;
        var s_91_1 = 0;
        var s_91_2 = 0;
        var w_99_1 = 0;
        var w_99_2 = 0;
        var w_98_1 = 0;
        var w_98_2 = 0;
        var w_97_1 = 0;
        var w_97_2 = 0;
        var w_96_1 = 0;
        var w_96_2 = 0;
        var w_94_1 = 0;
        var w_94_2 = 0;
        var w_91_1 = 0;
        var w_91_2 = 0;
    }
    if (area == 1) {
        var temN1 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are1").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are1").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are1").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are1").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are1").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are1").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are1").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are1").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are1").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are1").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are1").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are1").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are1").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are1").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are1").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are1").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are1").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are1").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are1").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are1").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are1").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are1").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are1").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are1").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are1").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are1").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are1").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are1").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are1").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are1").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are1").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are1").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are1").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are1").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are1").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are1").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are1").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are1").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are1").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are1").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are1").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are1").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are1").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are1").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are1").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are1").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are1").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are1").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));
    }
    else if (area == 2) {
        var temN1 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are2").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are2").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are2").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are2").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are2").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are2").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are2").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are2").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are2").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are2").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are2").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are2").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are2").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are2").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are2").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are2").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are2").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are2").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are2").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are2").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are2").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are2").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are2").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are2").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are2").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are2").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are2").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are2").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are2").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are2").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are2").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are2").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are2").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are2").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are2").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are2").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are2").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are2").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are2").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are2").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are2").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are2").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are2").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are2").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are2").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are2").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are2").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are2").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are2").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are2").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are2").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are2").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are2").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are2").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));
    }

    else if (area == 3 || area==4){
        var temN1 = document.getElementById("are3").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are3").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are3").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are3").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are3").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are3").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are3").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are3").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are3").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are3").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are3").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are3").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are3").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are3").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are3").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are3").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are3").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are3").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are3").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are3").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are3").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are3").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are3").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are3").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are3").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are3").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are3").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are3").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are3").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are3").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are3").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are3").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are3").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are3").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are3").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are3").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are3").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are3").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are3").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are3").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are3").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are3").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are3").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are3").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are3").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are3").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are3").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are3").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are3").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are3").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are3").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are3").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are3").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are3").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are3").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are3").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));

    }
    else{
        alert("Please select the county on the top.");
    }
    //north & northeast line
    var x = document.getElementById("distanceTable").rows[1].cells;
    //east & southeast
    var y = document.getElementById("distanceTable").rows[2].cells;
    //south & southwest
    var z = document.getElementById("distanceTable").rows[3].cells;
    //west & southwest
    var w = document.getElementById("distanceTable").rows[4].cells;
    //the number of 99% N & NE
    x[1].innerHTML = (N_99 * 5280).toFixed(0);//temN3;//
    x[2].innerHTML = (N_98 * 5280).toFixed(0);//
    x[3].innerHTML = (N_97 * 5280).toFixed(0);//
    x[4].innerHTML = (N_96 * 5280).toFixed(0);//
    x[5].innerHTML = (N_94 * 5280).toFixed(0);//
    x[6].innerHTML = (N_91 * 5280).toFixed(0);

    y[1].innerHTML = (E_99 * 5280).toFixed(0);//
    y[2].innerHTML = (E_98 * 5280).toFixed(0);//
    y[3].innerHTML = (E_97 * 5280).toFixed(0);//
    y[4].innerHTML = (E_96 * 5280).toFixed(0);//
    y[5].innerHTML = (E_94 * 5280).toFixed(0);
    y[6].innerHTML = (E_91 * 5280).toFixed(0);

    z[1].innerHTML = (S_99 * 5280).toFixed(0);//
    z[2].innerHTML = (S_98 * 5280).toFixed(0);//
    z[3].innerHTML = (S_97 * 5280).toFixed(0);//
    z[4].innerHTML = (S_96 * 5280).toFixed(0);//
    z[5].innerHTML = (S_94 * 5280).toFixed(0);
    z[6].innerHTML = (S_91 * 5280).toFixed(0);

    w[1].innerHTML = (W_99 * 5280).toFixed(0);//
    w[2].innerHTML = (W_98 * 5280).toFixed(0);//
    w[3].innerHTML = (W_97 * 5280).toFixed(0);//
    w[4].innerHTML = (W_96 * 5280).toFixed(0);//
    w[5].innerHTML = (W_94 * 5280).toFixed(0);
    w[6].innerHTML = (W_91 * 5280).toFixed(0);
}

function chart(el, dl) {
    var area;
    if (el.value.trim() != '') {
        var opSelected = dl.querySelector(`[value="${el.value}"]`);
        var option = document.createElement("option");
        option.value = opSelected.value;
        option.text = opSelected.getAttribute('data-value');
        area = option.innerText;
    }
    var houseType = document.getElementsByTagName("select");
    var ftext1 = houseType[5].value;
    var ftext2 = houseType[6].value;
    var ftext3 = houseType[7].value;
    var ftext4 = houseType[8].value;
    var ftext5 = houseType[9].value;
    var controlType = document.getElementsByTagName("select");
    var ctext1 = controlType[10].value;
    var ctext2 = controlType[11].value;
    var ctext3 = controlType[12].value;
    var ctext4 = controlType[13].value;
    var ctext5 = controlType[14].value;
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
    var t1 = ftext1 * ctext1 * width1 * length1 / 10000;
    var t2 = ftext2 * ctext2 * width2 * length2 / 10000;
    var t3 = ftext3 * ctext3 * width3 * length3 / 10000;
    var t4 = ftext4 * ctext4 * width4 * length4 / 10000;
    var t5 = ftext5 * ctext5 * width5 * length5 / 10000;
    var tal = Number(t1) + Number(t2) + Number(t3) + Number(t4) + Number(t5);
    var N_99;
    var N_98;
    var N_97;
    var N_96;
    var N_94;
    var N_91;
    var E_99;
    var E_98;
    var E_97;
    var E_96;
    var E_94;
    var E_91;
    var S_99;
    var S_98;
    var S_97;
    var S_96;
    var S_94;
    var S_91;
    var W_99;
    var W_98;
    var W_97;
    var W_96;
    var W_94;
    var W_91;

    if (tal < 50) {
        var n_99_1 = 3;
        var n_99_2 = 3;
        var n_98_1 = 3;
        var n_98_2 = 4;
        var n_97_1 = 3;
        var n_97_2 = 5;
        var n_96_1 = 3;
        var n_96_2 = 6;
        var n_94_1 = 3;
        var n_94_2 = 7;
        var n_91_1 = 3;
        var n_91_2 = 8;
        var e_99_1 = 14;
        var e_99_2 = 3;
        var e_98_1 = 14;
        var e_98_2 = 4;
        var e_97_1 = 14;
        var e_97_2 = 5;
        var e_96_1 = 14;
        var e_96_2 = 6;
        var e_94_1 = 14;
        var e_94_2 = 7;
        var e_91_1 = 14;
        var e_91_2 = 8;
        var s_99_1 = 25;
        var s_99_2 = 3;
        var s_98_1 = 25;
        var s_98_2 = 4;
        var s_97_1 = 25;
        var s_97_2 = 5;
        var s_96_1 = 25;
        var s_96_2 = 6;
        var s_94_1 = 25;
        var s_94_2 = 7;
        var s_91_1 = 25;
        var s_91_2 = 8;
        var w_99_1 = 36;
        var w_99_2 = 3;
        var w_98_1 = 36;
        var w_98_2 = 4;
        var w_97_1 = 36;
        var w_97_2 = 5;
        var w_96_1 = 36;
        var w_96_2 = 6;
        var w_94_1 = 36;
        var w_94_2 = 7;
        var w_91_1 = 36;
        var w_91_2 = 8;
    }
    else if (tal < 100) {
        var n_99_1 = 4;
        var n_99_2 = 3;
        var n_98_1 = 4;
        var n_98_2 = 4;
        var n_97_1 = 4;
        var n_97_2 = 5;
        var n_96_1 = 4;
        var n_96_2 = 6;
        var n_94_1 = 4;
        var n_94_2 = 7;
        var n_91_1 = 4;
        var n_91_2 = 8;
        var e_99_1 = 15;
        var e_99_2 = 3;
        var e_98_1 = 15;
        var e_98_2 = 4;
        var e_97_1 = 15;
        var e_97_2 = 5;
        var e_96_1 = 15;
        var e_96_2 = 6;
        var e_94_1 = 15;
        var e_94_2 = 7;
        var e_91_1 = 15;
        var e_91_2 = 8;
        var s_99_1 = 26;
        var s_99_2 = 3;
        var s_98_1 = 26;
        var s_98_2 = 4;
        var s_97_1 = 26;
        var s_97_2 = 5;
        var s_96_1 = 26;
        var s_96_2 = 6;
        var s_94_1 = 26;
        var s_94_2 = 7;
        var s_91_1 = 26;
        var s_91_2 = 8;
        var w_99_1 = 37;
        var w_99_2 = 3;
        var w_98_1 = 37;
        var w_98_2 = 4;
        var w_97_1 = 37;
        var w_97_2 = 5;
        var w_96_1 = 37;
        var w_96_2 = 6;
        var w_94_1 = 37;
        var w_94_2 = 7;
        var w_91_1 = 37;
        var w_91_2 = 8;
    }
    else if (tal < 200) {
        var n_99_1 = 5;
        var n_99_2 = 3;
        var n_98_1 = 5;
        var n_98_2 = 4;
        var n_97_1 = 5;
        var n_97_2 = 5;
        var n_96_1 = 5;
        var n_96_2 = 6;
        var n_94_1 = 5;
        var n_94_2 = 7;
        var n_91_1 = 5;
        var n_91_2 = 8;
        var e_99_1 = 16;
        var e_99_2 = 3;
        var e_98_1 = 16;
        var e_98_2 = 4;
        var e_97_1 = 16;
        var e_97_2 = 5;
        var e_96_1 = 16;
        var e_96_2 = 6;
        var e_94_1 = 16;
        var e_94_2 = 7;
        var e_91_1 = 16;
        var e_91_2 = 8;
        var s_99_1 = 27;
        var s_99_2 = 3;
        var s_98_1 = 27;
        var s_98_2 = 4;
        var s_97_1 = 27;
        var s_97_2 = 5;
        var s_96_1 = 27;
        var s_96_2 = 6;
        var s_94_1 = 27;
        var s_94_2 = 7;
        var s_91_1 = 27;
        var s_91_2 = 8;
        var w_99_1 = 38;
        var w_99_2 = 3;
        var w_98_1 = 38;
        var w_98_2 = 4;
        var w_97_1 = 38;
        var w_97_2 = 5;
        var w_96_1 = 38;
        var w_96_2 = 6;
        var w_94_1 = 38;
        var w_94_2 = 7;
        var w_91_1 = 38;
        var w_91_2 = 8;
    }
    else if (tal < 300) {
        var n_99_1 = 6;
        var n_99_2 = 3;
        var n_98_1 = 6;
        var n_98_2 = 4;
        var n_97_1 = 6;
        var n_97_2 = 5;
        var n_96_1 = 6;
        var n_96_2 = 6;
        var n_94_1 = 6;
        var n_94_2 = 7;
        var n_91_1 = 6;
        var n_91_2 = 8;
        var e_99_1 = 17;
        var e_99_2 = 3;
        var e_98_1 = 17;
        var e_98_2 = 4;
        var e_97_1 = 17;
        var e_97_2 = 5;
        var e_96_1 = 17;
        var e_96_2 = 6;
        var e_94_1 = 17;
        var e_94_2 = 7;
        var e_91_1 = 17;
        var e_91_2 = 8;
        var s_99_1 = 28;
        var s_99_2 = 3;
        var s_98_1 = 28;
        var s_98_2 = 4;
        var s_97_1 = 28;
        var s_97_2 = 5;
        var s_96_1 = 28;
        var s_96_2 = 6;
        var s_94_1 = 28;
        var s_94_2 = 7;
        var s_91_1 = 28;
        var s_91_2 = 8;
        var w_99_1 = 39;
        var w_99_2 = 3;
        var w_98_1 = 39;
        var w_98_2 = 4;
        var w_97_1 = 39;
        var w_97_2 = 5;
        var w_96_1 = 39;
        var w_96_2 = 6;
        var w_94_1 = 39;
        var w_94_2 = 7;
        var w_91_1 = 39;
        var w_91_2 = 8;
    }
    else if (tal < 400) {
        var n_99_1 = 7;
        var n_99_2 = 3;
        var n_98_1 = 7;
        var n_98_2 = 4;
        var n_97_1 = 7;
        var n_97_2 = 5;
        var n_96_1 = 7;
        var n_96_2 = 6;
        var n_94_1 = 7;
        var n_94_2 = 7;
        var n_91_1 = 7;
        var n_91_2 = 8;
        var e_99_1 = 18;
        var e_99_2 = 3;
        var e_98_1 = 18;
        var e_98_2 = 4;
        var e_97_1 = 18;
        var e_97_2 = 5;
        var e_96_1 = 18;
        var e_96_2 = 6;
        var e_94_1 = 18;
        var e_94_2 = 7;
        var e_91_1 = 18;
        var e_91_2 = 8;
        var s_99_1 = 29;
        var s_99_2 = 3;
        var s_98_1 = 29;
        var s_98_2 = 4;
        var s_97_1 = 29;
        var s_97_2 = 5;
        var s_96_1 = 29;
        var s_96_2 = 6;
        var s_94_1 = 29;
        var s_94_2 = 7;
        var s_91_1 = 29;
        var s_91_2 = 8;
        var w_99_1 = 40;
        var w_99_2 = 3;
        var w_98_1 = 40;
        var w_98_2 = 4;
        var w_97_1 = 40;
        var w_97_2 = 5;
        var w_96_1 = 40;
        var w_96_2 = 6;
        var w_94_1 = 40;
        var w_94_2 = 7;
        var w_91_1 = 40;
        var w_91_2 = 8;
    }
    else if (tal < 500) {
        var n_99_1 = 8;
        var n_99_2 = 3;
        var n_98_1 = 8;
        var n_98_2 = 4;
        var n_97_1 = 8;
        var n_97_2 = 5;
        var n_96_1 = 8;
        var n_96_2 = 6;
        var n_94_1 = 8;
        var n_94_2 = 7;
        var n_91_1 = 8;
        var n_91_2 = 8;
        var e_99_1 = 19;
        var e_99_2 = 3;
        var e_98_1 = 19;
        var e_98_2 = 4;
        var e_97_1 = 19;
        var e_97_2 = 5;
        var e_96_1 = 19;
        var e_96_2 = 6;
        var e_94_1 = 19;
        var e_94_2 = 7;
        var e_91_1 = 19;
        var e_91_2 = 8;
        var s_99_1 = 30;
        var s_99_2 = 3;
        var s_98_1 = 30;
        var s_98_2 = 4;
        var s_97_1 = 30;
        var s_97_2 = 5;
        var s_96_1 = 30;
        var s_96_2 = 6;
        var s_94_1 = 30;
        var s_94_2 = 7;
        var s_91_1 = 30;
        var s_91_2 = 8;
        var w_99_1 = 41;
        var w_99_2 = 3;
        var w_98_1 = 41;
        var w_98_2 = 4;
        var w_97_1 = 41;
        var w_97_2 = 5;
        var w_96_1 = 41;
        var w_96_2 = 6;
        var w_94_1 = 41;
        var w_94_2 = 7;
        var w_91_1 = 41;
        var w_91_2 = 8;
    }
    else if (tal < 1000) {
        var n_99_1 = 9;
        var n_99_2 = 3;
        var n_98_1 = 9;
        var n_98_2 = 4;
        var n_97_1 = 9;
        var n_97_2 = 5;
        var n_96_1 = 9;
        var n_96_2 = 6;
        var n_94_1 = 9;
        var n_94_2 = 7;
        var n_91_1 = 9;
        var n_91_2 = 8;
        var e_99_1 = 20;
        var e_99_2 = 3;
        var e_98_1 = 20;
        var e_98_2 = 4;
        var e_97_1 = 20;
        var e_97_2 = 5;
        var e_96_1 = 20;
        var e_96_2 = 6;
        var e_94_1 = 20;
        var e_94_2 = 7;
        var e_91_1 = 20;
        var e_91_2 = 8;
        var s_99_1 = 31;
        var s_99_2 = 3;
        var s_98_1 = 31;
        var s_98_2 = 4;
        var s_97_1 = 31;
        var s_97_2 = 5;
        var s_96_1 = 31;
        var s_96_2 = 6;
        var s_94_1 = 31;
        var s_94_2 = 7;
        var s_91_1 = 31;
        var s_91_2 = 8;
        var w_99_1 = 42;
        var w_99_2 = 3;
        var w_98_1 = 42;
        var w_98_2 = 4;
        var w_97_1 = 42;
        var w_97_2 = 5;
        var w_96_1 = 42;
        var w_96_2 = 6;
        var w_94_1 = 42;
        var w_94_2 = 7;
        var w_91_1 = 42;
        var w_91_2 = 8;
    }
    else if (tal < 2000) {
        var n_99_1 = 10;
        var n_99_2 = 3;
        var n_98_1 = 10;
        var n_98_2 = 4;
        var n_97_1 = 10;
        var n_97_2 = 5;
        var n_96_1 = 10;
        var n_96_2 = 6;
        var n_94_1 = 10;
        var n_94_2 = 7;
        var n_91_1 = 10;
        var n_91_2 = 8;
        var e_99_1 = 21;
        var e_99_2 = 3;
        var e_98_1 = 21;
        var e_98_2 = 4;
        var e_97_1 = 21;
        var e_97_2 = 5;
        var e_96_1 = 21;
        var e_96_2 = 6;
        var e_94_1 = 21;
        var e_94_2 = 7;
        var e_91_1 = 21;
        var e_91_2 = 8;
        var s_99_1 = 32;
        var s_99_2 = 3;
        var s_98_1 = 32;
        var s_98_2 = 4;
        var s_97_1 = 32;
        var s_97_2 = 5;
        var s_96_1 = 32;
        var s_96_2 = 6;
        var s_94_1 = 32;
        var s_94_2 = 7;
        var s_91_1 = 32;
        var s_91_2 = 8;
        var w_99_1 = 43;
        var w_99_2 = 3;
        var w_98_1 = 43;
        var w_98_2 = 4;
        var w_97_1 = 43;
        var w_97_2 = 5;
        var w_96_1 = 43;
        var w_96_2 = 6;
        var w_94_1 = 43;
        var w_94_2 = 7;
        var w_91_1 = 43;
        var w_91_2 = 8;
    }
    else if (tal < 3000) {
        var n_99_1 = 11;
        var n_99_2 = 3;
        var n_98_1 = 11;
        var n_98_2 = 4;
        var n_97_1 = 11;
        var n_97_2 = 5;
        var n_96_1 = 11;
        var n_96_2 = 6;
        var n_94_1 = 11;
        var n_94_2 = 7;
        var n_91_1 = 11;
        var n_91_2 = 8;
        var e_99_1 = 22;
        var e_99_2 = 3;
        var e_98_1 = 22;
        var e_98_2 = 4;
        var e_97_1 = 22;
        var e_97_2 = 5;
        var e_96_1 = 22;
        var e_96_2 = 6;
        var e_94_1 = 22;
        var e_94_2 = 7;
        var e_91_1 = 22;
        var e_91_2 = 8;
        var s_99_1 = 33;
        var s_99_2 = 3;
        var s_98_1 = 33;
        var s_98_2 = 4;
        var s_97_1 = 33;
        var s_97_2 = 5;
        var s_96_1 = 33;
        var s_96_2 = 6;
        var s_94_1 = 33;
        var s_94_2 = 7;
        var s_91_1 = 33;
        var s_91_2 = 8;
        var w_99_1 = 44;
        var w_99_2 = 3;
        var w_98_1 = 44;
        var w_98_2 = 4;
        var w_97_1 = 44;
        var w_97_2 = 5;
        var w_96_1 = 44;
        var w_96_2 = 6;
        var w_94_1 = 44;
        var w_94_2 = 7;
        var w_91_1 = 44;
        var w_91_2 = 8;
    }
    else if (tal < 4000) {
        var n_99_1 = 12;
        var n_99_2 = 3;
        var n_98_1 = 12;
        var n_98_2 = 4;
        var n_97_1 = 12;
        var n_97_2 = 5;
        var n_96_1 = 12;
        var n_96_2 = 6;
        var n_94_1 = 12;
        var n_94_2 = 7;
        var n_91_1 = 12;
        var n_91_2 = 8;
        var e_99_1 = 23;
        var e_99_2 = 3;
        var e_98_1 = 23;
        var e_98_2 = 4;
        var e_97_1 = 23;
        var e_97_2 = 5;
        var e_96_1 = 23;
        var e_96_2 = 6;
        var e_94_1 = 23;
        var e_94_2 = 7;
        var e_91_1 = 23;
        var e_91_2 = 8;
        var s_99_1 = 34;
        var s_99_2 = 3;
        var s_98_1 = 34;
        var s_98_2 = 4;
        var s_97_1 = 34;
        var s_97_2 = 5;
        var s_96_1 = 34;
        var s_96_2 = 6;
        var s_94_1 = 34;
        var s_94_2 = 7;
        var s_91_1 = 34;
        var s_91_2 = 8;
        var w_99_1 = 45;
        var w_99_2 = 3;
        var w_98_1 = 45;
        var w_98_2 = 4;
        var w_97_1 = 45;
        var w_97_2 = 5;
        var w_96_1 = 45;
        var w_96_2 = 6;
        var w_94_1 = 45;
        var w_94_2 = 7;
        var w_91_1 = 45;
        var w_91_2 = 8;
    }
    else {
        var n_99_1 = 0;
        var n_99_2 = 0;
        var n_98_1 = 0;
        var n_98_2 = 0;
        var n_97_1 = 0;
        var n_97_2 = 0;
        var n_96_1 = 0;
        var n_96_2 = 0;
        var n_94_1 = 0;
        var n_94_2 = 0;
        var n_91_1 = 0;
        var n_91_2 = 0;
        var e_99_1 = 0;
        var e_99_2 = 0;
        var e_98_1 = 0;
        var e_98_2 = 0;
        var e_97_1 = 0;
        var e_97_2 = 0;
        var e_96_1 = 0;
        var e_96_2 = 0;
        var e_94_1 = 0;
        var e_94_2 = 0;
        var e_91_1 = 0;
        var e_91_2 = 0;
        var s_99_1 = 0;
        var s_99_2 = 0;
        var s_98_1 = 0;
        var s_98_2 = 0;
        var s_97_1 = 0;
        var s_97_2 = 0;
        var s_96_1 = 0;
        var s_96_2 = 0;
        var s_94_1 = 0;
        var s_94_2 = 0;
        var s_91_1 = 0;
        var s_91_2 = 0;
        var w_99_1 = 0;
        var w_99_2 = 0;
        var w_98_1 = 0;
        var w_98_2 = 0;
        var w_97_1 = 0;
        var w_97_2 = 0;
        var w_96_1 = 0;
        var w_96_2 = 0;
        var w_94_1 = 0;
        var w_94_2 = 0;
        var w_91_1 = 0;
        var w_91_2 = 0;
    }
    if (area == 1) {
        var temN1 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are1").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are1").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are1").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are1").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are1").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are1").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are1").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are1").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are1").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are1").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are1").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are1").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are1").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are1").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are1").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are1").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are1").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are1").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are1").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are1").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are1").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are1").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are1").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are1").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are1").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are1").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are1").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are1").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are1").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are1").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are1").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are1").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are1").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are1").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are1").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are1").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are1").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are1").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are1").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are1").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are1").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are1").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are1").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are1").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are1").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are1").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are1").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are1").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));
    }
    else if (area == 2) {
        var temN1 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are2").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are2").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are2").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are2").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are2").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are2").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are2").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are2").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are2").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are2").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are2").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are2").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are2").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are2").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are2").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are2").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are2").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are2").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are2").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are2").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are2").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are2").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are2").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are2").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are2").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are2").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are2").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are2").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are2").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are2").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are2").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are2").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are2").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are2").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are2").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are2").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are2").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are2").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are2").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are2").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are2").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are2").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are2").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are2").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are2").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are2").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are2").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are2").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are2").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are2").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are2").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are2").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are2").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are2").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));
    }

    else if (area == 3||area==4) {
        var temN1 = document.getElementById("are3").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are3").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are3").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are3").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are3").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are3").rows[n_98_1].cells[n_98_2].innerHTML;
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temN111 = document.getElementById("are3").rows[n_97_1 - 1].cells[n_97_2].innerHTML;
        var temN222 = document.getElementById("are3").rows[n_97_1].cells[n_97_2].innerHTML;
        N_97 = Number(temN111) + Number((temN222 - temN111) * (tal - temN3) / (temN4 - temN3));

        var temN1111 = document.getElementById("are3").rows[n_96_1 - 1].cells[n_96_2].innerHTML;
        var temN2222 = document.getElementById("are3").rows[n_96_1].cells[n_96_2].innerHTML;
        N_96 = Number(temN1111) + Number((temN2222 - temN1111) * (tal - temN3) / (temN4 - temN3));

        var temN11111 = document.getElementById("are3").rows[n_94_1 - 1].cells[n_94_2].innerHTML;
        var temN22222 = document.getElementById("are3").rows[n_94_1].cells[n_94_2].innerHTML;
        N_94 = Number(temN11111) + Number((temN22222 - temN11111) * (tal - temN3) / (temN4 - temN3));

        var temN111111 = document.getElementById("are3").rows[n_91_1 - 1].cells[n_91_2].innerHTML;
        var temN222222 = document.getElementById("are3").rows[n_91_1].cells[n_91_2].innerHTML;
        N_91 = Number(temN111111) + Number((temN222222 - temN111111) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are3").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are3").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are3").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are3").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));

        var temE11 = document.getElementById("are3").rows[e_98_1 - 1].cells[e_98_2].innerHTML;
        var temE22 = document.getElementById("are3").rows[e_98_1].cells[e_98_2].innerHTML;
        E_98 = Number(temE11) + Number((temE22 - temE11) * (tal - temE3) / (temE4 - temE3));

        var temE111 = document.getElementById("are3").rows[e_97_1 - 1].cells[e_97_2].innerHTML;
        var temE222 = document.getElementById("are3").rows[e_97_1].cells[e_97_2].innerHTML;
        E_97 = Number(temE111) + Number((temE222 - temE111) * (tal - temE3) / (temE4 - temE3));

        var temE1111 = document.getElementById("are3").rows[e_96_1 - 1].cells[e_96_2].innerHTML;
        var temE2222 = document.getElementById("are3").rows[e_96_1].cells[e_96_2].innerHTML;
        E_96 = Number(temE1111) + Number((temE2222 - temE1111) * (tal - temE3) / (temE4 - temE3));

        var temE11111 = document.getElementById("are3").rows[e_94_1 - 1].cells[e_94_2].innerHTML;
        var temE22222 = document.getElementById("are3").rows[e_94_1].cells[e_94_2].innerHTML;
        E_94 = Number(temE11111) + Number((temE22222 - temE11111) * (tal - temE3) / (temE4 - temE3));

        var temE111111 = document.getElementById("are3").rows[e_91_1 - 1].cells[e_91_2].innerHTML;
        var temE222222 = document.getElementById("are3").rows[e_91_1].cells[e_91_2].innerHTML;
        E_91 = Number(temE111111) + Number((temE222222 - temE111111) * (tal - temE3) / (temE4 - temE3));

        var temS1 = document.getElementById("are3").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are3").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are3").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are3").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));

        var temS11 = document.getElementById("are3").rows[s_98_1 - 1].cells[s_98_2].innerHTML;
        var temS22 = document.getElementById("are3").rows[s_98_1].cells[s_98_2].innerHTML;
        S_98 = Number(temS11) + Number((temS22 - temS11) * (tal - temS3) / (temS4 - temS3));

        var temS111 = document.getElementById("are3").rows[s_97_1 - 1].cells[s_97_2].innerHTML;
        var temS222 = document.getElementById("are3").rows[s_97_1].cells[s_97_2].innerHTML;
        S_97 = Number(temS111) + Number((temS222 - temS111) * (tal - temS3) / (temS4 - temS3));

        var temS1111 = document.getElementById("are3").rows[s_96_1 - 1].cells[s_96_2].innerHTML;
        var temS2222 = document.getElementById("are3").rows[s_96_1].cells[s_96_2].innerHTML;
        S_96 = Number(temS1111) + Number((temS2222 - temS1111) * (tal - temS3) / (temS4 - temS3));

        var temS11111 = document.getElementById("are3").rows[s_94_1 - 1].cells[s_94_2].innerHTML;
        var temS22222 = document.getElementById("are3").rows[s_94_1].cells[s_94_2].innerHTML;
        S_94 = Number(temS11111) + Number((temS22222 - temS11111) * (tal - temS3) / (temS4 - temS3));

        var temS111111 = document.getElementById("are3").rows[s_91_1 - 1].cells[s_91_2].innerHTML;
        var temS222222 = document.getElementById("are3").rows[s_91_1].cells[s_91_2].innerHTML;
        S_91 = Number(temS111111) + Number((temS222222 - temS111111) * (tal - temS3) / (temS4 - temS3));

        var temW1 = document.getElementById("are3").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are3").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are3").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are3").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));

        var temW11 = document.getElementById("are3").rows[w_98_1 - 1].cells[w_98_2].innerHTML;
        var temW22 = document.getElementById("are3").rows[w_98_1].cells[w_98_2].innerHTML;
        W_98 = Number(temW11) + Number((temW22 - temW11) * (tal - temW3) / (temW4 - temW3));

        var temW111 = document.getElementById("are3").rows[w_97_1 - 1].cells[w_97_2].innerHTML;
        var temW222 = document.getElementById("are3").rows[w_97_1].cells[w_97_2].innerHTML;
        W_97 = Number(temW111) + Number((temW222 - temW111) * (tal - temW3) / (temW4 - temW3));

        var temW1111 = document.getElementById("are3").rows[w_96_1 - 1].cells[w_96_2].innerHTML;
        var temW2222 = document.getElementById("are3").rows[w_96_1].cells[w_96_2].innerHTML;
        W_96 = Number(temW1111) + Number((temW2222 - temW1111) * (tal - temW3) / (temW4 - temW3));

        var temW11111 = document.getElementById("are3").rows[w_94_1 - 1].cells[w_94_2].innerHTML;
        var temW22222 = document.getElementById("are3").rows[w_94_1].cells[w_94_2].innerHTML;
        W_94 = Number(temW11111) + Number((temW22222 - temW11111) * (tal - temW3) / (temW4 - temW3));

        var temW111111 = document.getElementById("are3").rows[w_91_1 - 1].cells[w_91_2].innerHTML;
        var temW222222 = document.getElementById("are3").rows[w_91_1].cells[w_91_2].innerHTML;
        W_91 = Number(temW111111) + Number((temW222222 - temW111111) * (tal - temW3) / (temW4 - temW3));

    }
    else{
        alert("Please select the county on the top.");
    }
    if (area == 1) {
        var n99_value = N_99;
        var n98_value = N_98;
        var n97_value = N_97;
        var n96_value = N_96;
        var n94_value = N_94;
        var n91_value = N_91;
        var s99_value = S_99;
        var s98_value = S_98;
        var s97_value = S_97;
        var s96_value = S_96;
        var s94_value = S_94;
        var s91_value = S_91;
        var w99_value = W_99;
        var w98_value = W_98;
        var w97_value = W_97;
        var w96_value = W_96;
        var w94_value = W_94;
        var w91_value = W_91;
        var e99_value = E_99;
        var e98_value = E_98;
        var e97_value = E_97;
        var e96_value = E_96;
        var e94_value = E_94;
        var e91_value = E_91;
        var ne99_value = (N_99 + E_99) / 2;
        var ne98_value = (N_98 + E_98) / 2;
        var ne97_value = (N_97 + E_97) / 2;
        var ne96_value = (N_96 + E_96) / 2;
        var ne94_value = (N_94 + E_94) / 2;
        var ne91_value = (N_91 + E_91) / 2;
        var se99_value = (S_99 + E_99) / 2;
        var se98_value = (S_98 + E_98) / 2;
        var se97_value = (S_97 + E_97) / 2;
        var se96_value = (S_96 + E_96) / 2;
        var se94_value = (S_94 + E_94) / 2;
        var se91_value = (S_91 + E_91) / 2;
        var sw99_value = (S_99 + W_99) / 2;
        var sw98_value = (S_98 + W_98) / 2;
        var sw97_value = (S_97 + W_97) / 2;
        var sw96_value = (S_96 + W_96) / 2;
        var sw94_value = (S_94 + W_94) / 2;
        var sw91_value = (S_91 + W_91) / 2;
        var nw99_value = (N_99 + W_99) / 2;
        var nw98_value = (N_98 + W_98) / 2;
        var nw97_value = (N_97 + W_97) / 2;
        var nw96_value = (N_96 + W_96) / 2;
        var nw94_value = (N_94 + W_94) / 2;
        var nw91_value = (N_91 + W_91) / 2;
    }
    else {
        var n99_value = (N_99 + W_99) / 2;
        var n98_value = (N_98 + W_98) / 2;
        var n97_value = (N_97 + W_97) / 2;
        var n96_value = (N_96 + W_96) / 2;
        var n94_value = (N_94 + W_94) / 2;
        var n91_value = (N_91 + W_91) / 2;
        var s99_value = (E_99 + S_99) / 2;
        var s98_value = (E_98 + S_98) / 2;
        var s97_value = (E_97 + S_97) / 2;
        var s96_value = (E_96 + S_96) / 2;
        var s94_value = (E_94 + S_94) / 2;
        var s91_value = (E_91 + S_91) / 2;
        var w99_value = (S_99 + W_99) / 2;
        var w98_value = (S_98 + W_98) / 2;
        var w97_value = (S_97 + W_97) / 2;
        var w96_value = (S_96 + W_96) / 2;
        var w94_value = (S_94 + W_94) / 2;
        var w91_value = (S_91 + W_91) / 2;
        var e99_value = (E_99 + N_99) / 2;
        var e98_value = (E_98 + N_98) / 2;
        var e97_value = (E_97 + N_97) / 2;
        var e96_value = (E_96 + N_96) / 2;
        var e94_value = (E_94 + N_94) / 2;
        var e91_value = (E_91 + N_91) / 2;
        var ne99_value = N_99;
        var ne98_value = N_98;
        var ne97_value = N_97;
        var ne96_value = N_96;
        var ne94_value = N_94;
        var ne91_value = N_91;
        var se99_value = E_99;
        var se98_value = E_98;
        var se97_value = E_97;
        var se96_value = E_96;
        var se94_value = E_94;
        var se91_value = E_91;
        var sw99_value = S_99;
        var sw98_value = S_98;
        var sw97_value = S_97;
        var sw96_value = S_96;
        var sw94_value = S_94;
        var sw91_value = S_91;
        var nw99_value = W_99;
        var nw98_value = W_98;
        var nw97_value = W_97;
        var nw96_value = W_96;
        var nw94_value = W_94;
        var nw91_value = W_91;
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.height = 500;
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
            datasets: [{
                label: '99%',
                data: [n99_value, ne99_value, e99_value, se99_value, s99_value, sw99_value, w99_value, nw99_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgb(255, 99, 132)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '98%',
                data: [n98_value, ne98_value, e98_value, se98_value, s98_value, sw98_value, w98_value, nw98_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgb(54, 162, 235)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '97%',
                data: [n97_value, ne97_value, e97_value, se97_value, s97_value, sw97_value, w97_value, nw97_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(255, 206, 86)',
                spanGaps: true,
                fill: true,
            }, {
                label: '96%',
                data: [n96_value, ne96_value, e96_value, se96_value, s96_value, sw96_value, w96_value, nw96_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(75, 192, 192)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '94%',
                data: [n94_value, ne94_value, e94_value, se94_value, s94_value, sw94_value, w94_value, nw94_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(153, 102, 255)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '91%',
                data: [n91_value, ne91_value, e91_value, se91_value, s91_value, sw91_value, w91_value, nw91_value],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(255, 159, 64)',
                spanGaps: true,
                fill: true,
            },
            ]
        },
        options: {
            scale: {

                ticks: {
                    color: 'red',
                    //display: false,
                    max: n99_value*1.25,
                    min: 0,
                    //display: false,
                },
            },
            gridLines: {
                display: false,
             },
            title: {
                display: true,
                text: 'Odor Setback Distance(miles) Graph',
                fontSize: '24',
                position: 'top'
            }

        }
    })
}

function printpage() {
    window.print()
  }

function dependedSourceType1(){
    var values = $('#sourceType1 option:selected').val();
        if (values == 0){
            $("#requre").show();
            $("#Cattle Yard").hide();
            $("#Dairy Barn").hide();
            $("#Swine Barn").hide();
            $("#Manure Storage").hide();
            $("#PoultryBarn").hide();
        }
        if (values == 1){
            $("#requre").hide();
            $("#Cattle Yard").show();
            $("#Dairy Barn").hide();
            $("#Swine Barn").hide();
            $("#Manure Storage").hide();
            $("#PoultryBarn").hide();
        }
        if (values == 2){
            $("#requre").hide();
            $("#Cattle Yard").hide();
            $("#Dairy Barn").show();
            $("#Swine Barn").hide();
            $("#Manure Storage").hide();
            $("#PoultryBarn").hide();
        }
        if (values == 3){
            $("#requre").hide();
            $("#Cattle Yard").hide();
            $("#Dairy Barn").hide();
            $("#Swine Barn").show();
            $("#Manure Storage").hide();
            $("#PoultryBarn").hide();
        }
        if (values == 4){
            $("#requre").hide();
            $("#Cattle Yard").hide();
            $("#Dairy Barn").hide();
            $("#Swine Barn").hide();
            $("#Manure Storage").show();
            $("#PoultryBarn").hide();
        }
        if (values == 5){
            $("#requre").hide();
            $("#Cattle Yard").hide();
            $("#Dairy Barn").hide();
            $("#Swine Barn").hide();
            $("#Manure Storage").hide();
            $("#PoultryBarn").show();
        }
}
