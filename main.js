
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
    document.getElementById("TOEF").innerHTML = tal;
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
    var tem = document.getElementById("are1");
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
        option.text = opSelected.getAttribute('label');
        document.getElementById('CountyArea').innerHTML = option.innerText;
    }
}

function changeDirection(el, dl) {
    var area;
    if (el.value.trim() != '') {
        var opSelected = dl.querySelector(`[value="${el.value}"]`);
        var option = document.createElement("option");
        option.value = opSelected.value;
        option.text = opSelected.getAttribute('label');
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
        option.text = opSelected.getAttribute('label');
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
    

    if (area == 1) {
        if (tal < 50) {
            var n_99_1 = 3;
            var n_99_2 = 3;
            var n_98_1 = 3;
            var n_98_2 = 4;
            var e_99_1 = 14;
            var e_99_2 = 3;
            var s_99_1 = 25;
            var s_99_2 = 3;
            var w_99_1 = 36;
            var w_99_2 = 3;
        }
        else if (tal < 100) {
            var n_99_1 = 4;
            var n_99_2 = 3;
            var n_98_1 = 4;
            var n_98_2 = 4;
            var e_99_1 = 15;
            var e_99_2 = 3;
            var s_99_1 = 26;
            var s_99_2 = 3;
            var w_99_1 = 37;
            var w_99_2 = 3;
        }
        else if (tal < 200) {
            var n_99_1 = 5;
            var n_99_2 = 3;
            var n_98_1 = 5;
            var n_98_2 = 4;
            var e_99_1 = 16;
            var e_99_2 = 3;
            var s_99_1 = 27;
            var s_99_2 = 3;
            var w_99_1 = 38;
            var w_99_2 = 3;
        }
        else if (tal < 300) {
            var n_99_1 = 6;
            var n_99_2 = 3;
            var n_98_1 = 6;
            var n_98_2 = 4;
            var e_99_1 = 17;
            var e_99_2 = 3;
            var s_99_1 = 28;
            var s_99_2 = 3;
            var w_99_1 = 39;
            var w_99_2 = 3;
        }
        else if (tal < 400) {
            var n_99_1 = 7;
            var n_99_2 = 3;
            var n_98_1 = 7;
            var n_98_2 = 4;
            var e_99_1 = 18;
            var e_99_2 = 3;
            var s_99_1 = 29;
            var s_99_2 = 3;
            var w_99_1 = 40;
            var w_99_2 = 3;
        }
        else if (tal < 500) {
            var n_99_1 = 8;
            var n_99_2 = 3;
            var n_98_1 = 8;
            var n_98_2 = 4;
            var e_99_1 = 19;
            var e_99_2 = 3;
            var s_99_1 = 30;
            var s_99_2 = 3;
            var w_99_1 = 41;
            var w_99_2 = 3;
        }
        else if (tal < 1000) {
            var n_99_1 = 9;
            var n_99_2 = 3;
            var n_98_1 = 9;
            var n_98_2 = 4;
            var e_99_1 = 20;
            var e_99_2 = 3;
            var s_99_1 = 31;
            var s_99_2 = 3;
            var w_99_1 = 42;
            var w_99_2 = 3;
        }
        else if (tal < 2000) {
            var n_99_1 = 10;
            var n_99_2 = 3;
            var n_98_1 = 10;
            var n_98_2 = 4;
            var e_99_1 = 21;
            var e_99_2 = 3;
            var s_99_1 = 32;
            var s_99_2 = 3;
            var w_99_1 = 43;
            var w_99_2 = 3;
        }
        else if (tal < 3000) {
            var n_99_1 = 11;
            var n_99_2 = 3;
            var n_98_1 = 11;
            var n_98_2 = 4;
            var e_99_1 = 22;
            var e_99_2 = 3;
            var s_99_1 = 33;
            var s_99_2 = 3;
            var w_99_1 = 44;
            var w_99_2 = 3;
        }
        else if (tal < 4000) {
            var n_99_1 = 12;
            var n_99_2 = 3;
            var n_98_1 = 12;
            var n_98_2 = 4;
            var e_99_1 = 23;
            var e_99_2 = 3;
            var s_99_1 = 34;
            var s_99_2 = 3;
            var w_99_1 = 45;
            var w_99_2 = 3;
        }
        else{
            var n_99_1 = 0;
            var n_99_2 = 0;
            var n_98_1 = 0;
            var n_98_2 = 0;
            var e_99_1 = 0;
            var e_99_2 = 0;
            var s_99_1 = 0;
            var s_99_2 = 0;
            var w_99_1 = 0;
            var w_99_2 = 0;
        }
        var temN1 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are1").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are1").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are1").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));

        var temN11 = document.getElementById("are1").rows[n_98_1 - 1].cells[n_98_2].innerHTML;
        var temN22 = document.getElementById("are1").rows[n_98_1].cells[n_98_2].innerHTML;
        
        N_98 = Number(temN11) + Number((temN22 - temN11) * (tal - temN3) / (temN4 - temN3));

        var temE1 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2].innerHTML;
        var temE2 = document.getElementById("are1").rows[e_99_1].cells[e_99_2].innerHTML;
        var temE3 = document.getElementById("are1").rows[e_99_1 - 1].cells[e_99_2 - 1].innerHTML;
        var temE4 = document.getElementById("are1").rows[e_99_1].cells[e_99_2 - 1].innerHTML;
        E_99 = Number(temE1) + Number((temE2 - temE1) * (tal - temE3) / (temE4 - temE3));
        var temS1 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2].innerHTML;
        var temS2 = document.getElementById("are1").rows[s_99_1].cells[s_99_2].innerHTML;
        var temS3 = document.getElementById("are1").rows[s_99_1 - 1].cells[s_99_2 - 1].innerHTML;
        var temS4 = document.getElementById("are1").rows[s_99_1].cells[s_99_2 - 1].innerHTML;
        S_99 = Number(temS1) + Number((temS2 - temS1) * (tal - temS3) / (temS4 - temS3));
        var temW1 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2].innerHTML;
        var temW2 = document.getElementById("are1").rows[w_99_1].cells[w_99_2].innerHTML;
        var temW3 = document.getElementById("are1").rows[w_99_1 - 1].cells[w_99_2 - 1].innerHTML;
        var temW4 = document.getElementById("are1").rows[w_99_1].cells[w_99_2 - 1].innerHTML;
        W_99 = Number(temW1) + Number((temW2 - temW1) * (tal - temW3) / (temW4 - temW3));
        
    }

    else if (area == 2) {
        if (tal < 50) {
            var n_99_1 = 3;
            var n_99_2 = 3;
            var e_99_1 = 14;
            var e_99_2 = 3;
            var s_99_1 = 25;
            var s_99_2 = 3;
            var w_99_1 = 36;
            var w_99_2 = 3;
        }
        else if (tal < 100) {
            var n_99_1 = 4;
            var n_99_2 = 3;
            var e_99_1 = 15;
            var e_99_2 = 3;
            var s_99_1 = 26;
            var s_99_2 = 3;
            var w_99_1 = 37;
            var w_99_2 = 3;
        }
        else if (tal < 200) {
            var n_99_1 = 5;
            var n_99_2 = 3;
            var e_99_1 = 16;
            var e_99_2 = 3;
            var s_99_1 = 27;
            var s_99_2 = 3;
            var w_99_1 = 38;
            var w_99_2 = 3;
        }
        else if (tal < 300) {
            var n_99_1 = 6;
            var n_99_2 = 3;
            var e_99_1 = 17;
            var e_99_2 = 3;
            var s_99_1 = 28;
            var s_99_2 = 3;
            var w_99_1 = 39;
            var w_99_2 = 3;
        }
        else if (tal < 400) {
            var n_99_1 = 7;
            var n_99_2 = 3;
            var e_99_1 = 18;
            var e_99_2 = 3;
            var s_99_1 = 29;
            var s_99_2 = 3;
            var w_99_1 = 40;
            var w_99_2 = 3;
        }
        else if (tal < 500) {
            var n_99_1 = 8;
            var n_99_2 = 3;
            var e_99_1 = 19;
            var e_99_2 = 3;
            var s_99_1 = 30;
            var s_99_2 = 3;
            var w_99_1 = 41;
            var w_99_2 = 3;
        }
        else if (tal < 1000) {
            var n_99_1 = 9;
            var n_99_2 = 3;
            var e_99_1 = 20;
            var e_99_2 = 3;
            var s_99_1 = 31;
            var s_99_2 = 3;
            var w_99_1 = 42;
            var w_99_2 = 3;
        }
        else if (tal < 2000) {
            var n_99_1 = 10;
            var n_99_2 = 3;
            var e_99_1 = 21;
            var e_99_2 = 3;
            var s_99_1 = 32;
            var s_99_2 = 3;
            var w_99_1 = 43;
            var w_99_2 = 3;
        }
        else if (tal < 3000) {
            var n_99_1 = 11;
            var n_99_2 = 3;
            var e_99_1 = 22;
            var e_99_2 = 3;
            var s_99_1 = 33;
            var s_99_2 = 3;
            var w_99_1 = 44;
            var w_99_2 = 3;
        }
        else if (tal < 4000) {
            var n_99_1 = 12;
            var n_99_2 = 3;
            var e_99_1 = 23;
            var e_99_2 = 3;
            var s_99_1 = 34;
            var s_99_2 = 3;
            var w_99_1 = 45;
            var w_99_2 = 3;
        }
        else{
            var n_99_1 = 0;
            var n_99_2 = 0;
            var e_99_1 = 0;
            var e_99_2 = 0;
            var s_99_1 = 0;
            var s_99_2 = 0;
            var w_99_1 = 0;
            var w_99_2 = 0;
        }
        var temN1 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2].innerHTML;
        var temN2 = document.getElementById("are2").rows[n_99_1].cells[n_99_2].innerHTML;
        var temN3 = document.getElementById("are2").rows[n_99_1 - 1].cells[n_99_2 - 1].innerHTML;
        var temN4 = document.getElementById("are2").rows[n_99_1].cells[n_99_2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));
    }

    else {
        //aa = document.getElementById("are3").rows[3].cells[5].innerHTML;
        var n1 = 4;
        var n2 = 3;
        var temN1 = document.getElementById("are3").rows[n1 - 1].cells[n2].innerHTML;
        var temN2 = document.getElementById("are3").rows[n1].cells[n2].innerHTML;
        var temN3 = document.getElementById("are3").rows[n1 - 1].cells[n2 - 1].innerHTML;
        var temN4 = document.getElementById("are3").rows[n1].cells[n2 - 1].innerHTML;
        N_99 = Number(temN1) + Number((temN2 - temN1) * (tal - temN3) / (temN4 - temN3));
    }

    var aa=N_99;
    //north & northeast line
    var x = document.getElementById("distanceTable").rows[1].cells;
    //east & southeast
    var y = document.getElementById("distanceTable").rows[2].cells;
    //south & southwest
    var z = document.getElementById("distanceTable").rows[3].cells;
    //west & southwest
    var w = document.getElementById("distanceTable").rows[4].cells;
    //the number of 99% N & NE
    x[1].innerHTML = (N_99* 5280).toFixed(0);
    x[2].innerHTML = (N_98* 5280).toFixed(0);
    x[3].innerHTML = temN3;
    x[4].innerHTML = temN4;
    x[5].innerHTML = temN1;
    x[6].innerHTML = temN3;

    y[1].innerHTML = (E_99 * 5280).toFixed(0);
    y[2].innerHTML = (0.1 * 5280).toFixed(0);
    y[3].innerHTML = (1 * 5280).toFixed(0);
    y[4].innerHTML = (1 * 5280).toFixed(0);
    y[5].innerHTML = (1 * 5280).toFixed(0);
    y[6].innerHTML = (1 * 5280).toFixed(0);

    z[1].innerHTML = (S_99 * 5280).toFixed(0);
    z[2].innerHTML = (S_99 * 5280).toFixed(0);
    z[3].innerHTML = (S_99 * 5280).toFixed(0);
    z[4].innerHTML = (S_99 * 5280).toFixed(0);
    z[5].innerHTML = (S_99 * 5280).toFixed(0);
    z[6].innerHTML = (S_99 * 5280).toFixed(0);

    w[1].innerHTML = (W_99 * 5280).toFixed(0);
    w[2].innerHTML = (W_99 * 5280).toFixed(0);
    w[3].innerHTML = (W_99 * 5280).toFixed(0);
    w[4].innerHTML = (W_99 * 5280).toFixed(0);
    w[5].innerHTML = (W_99 * 5280).toFixed(0);
    w[6].innerHTML = (W_99 * 5280).toFixed(0);
}


function chart() {
    var x = 20;
    var y = 18;
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.height = 500;
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['N', 'NE1', 'NE', 'NE2', 'E', 'SE1', 'SE', 'SE2', 'S', 'SW1', 'SW', 'SW2', 'W', 'NW1', 'NW', 'NW2'],
            datasets: [{
                label: '99%',
                data: [x, 18, y, 19, 18.5, , 18, , 18, , 19, , 20, 18.5, 20, 19,],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgb(255, 99, 132)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '98%',
                data: [17, 17, 17, 17, 17, , 19, , 19, , 16, , 16, 17, 16, 17],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgb(54, 162, 235)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '97%',
                data: [15, 14, 13.5, 14.5, 15, , 12.9, , 15, , 14, , 14, 13, 15, 14],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(255, 206, 86)',
                spanGaps: true,
                fill: true,
            }, {
                label: '96%',
                data: [12, 12, 13, 13, 12, , 11, , 13, , 12, , 12, 12, 12, 13],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(75, 192, 192)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '94%',
                data: [10, 11, 11, 11, 12, , 12, , 11, , 10, , 11, 11, 11, 12],
                borderWidth: 1,
                lineTension: 0.3,
                borderColor: 'rgba(153, 102, 255)',
                spanGaps: true,
                fill: true,
            },
            {
                label: '91%',
                data: [7, 8, 8, 9, 8.5, , 7, , 9, , 8.6, , 9, 7, 7, 8],
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
                    max: 20,
                    min: 5,
                },
            },
            title: {
                display: true,
                text: 'Odor Radar Graph',
                fontSize: '24',
                position: 'top'
            }

        }
    })
}