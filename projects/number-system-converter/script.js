const binaryInput = document.getElementById("binaryInput");
const decimalInput = document.getElementById("decimalInput");
const octalInput = document.getElementById("octalInput");
const hexaDInput = document.getElementById("hexaDInput");

function binaryToOthers(bValue) {
  let sum = 0;
  for (let i = 0; i < bValue.length; i++) {
    let bit = bValue.charAt(bValue.length - i - 1);
    sum += parseInt(bit) * Math.pow(2, i);
  }
  if (bValue == "") {
    decimalInput.value = "";
    octalInput.value = "";
    hexaDInput.value = "";
  } else {
    // decimalInput.value = sum;
    decimalInput.value = parseInt(bValue, 2).toString(10);
    octalInput.value = parseInt(bValue, 2).toString(8);
    hexaDInput.value = parseInt(bValue, 2).toString(16);
  }
}

function decimalToOthers(dValue) {
  if (dValue == "") {
    binaryInput.value = "";
    octalInput.value = "";
    hexaDInput.value = "";
  } else {
    // binaryInput.value = dValueNum.toString(2);
    binaryInput.value = parseInt(dValue, 10).toString(2);
    octalInput.value = parseInt(dValue, 10).toString(8);
    hexaDInput.value = parseInt(dValue, 10).toString(16);
  }
}
function octalToOthers(oValue) {
  if (oValue == "") {
    binaryInput.value = "";
    decimalInput.value = "";
    hexaDInput.value = "";
  } else {
    binaryInput.value = parseInt(oValue, 8).toString(2);
    decimalInput.value = parseInt(oValue, 8).toString(10);
    hexaDInput.value = parseInt(oValue, 8).toString(16);
  }
}
function hexaDToOthers(hValue) {
  if (hValue == "") {
    binaryInput.value = "";
    decimalInput.value = "";
    octalInput.value = "";
  } else {
    binaryInput.value = parseInt(hValue, 16).toString(2);
    decimalInput.value = parseInt(hValue, 16).toString(10);
    octalInput.value = parseInt(hValue, 16).toString(8);
  }
}

//a simple funciton to calculate all the above calculation
/*function convertFromBaseToBase(inputStr, fromBase, toBase){
    let num = parseInt(inputStr, fromBase);
    return num.toString(toBase);
}
*/
/*
function id(id) {
  return document.getElementById(id);
}
function Convert(s, n) {
  if(parseInt(id(s).value, n)) {
    if("bin" != s) { id("bin").value = parseInt(id(s).value, n).toString(2) }
    if("oct" != s) { id("oct").value = parseInt(id(s).value, n).toString(8) }
    if("dec" != s) { id("dec").value = parseInt(id(s).value, n).toString(10) }
    if("hex" != s) { id("hex").value = parseInt(id(s).value, n).toString(16) }
  } else {
    if("bin" != s) { id("bin").value = "" }
    if("oct" != s) { id("oct").value = "" }
    if("dec" != s) { id("dec").value = "" }
    if("hex" != s) { id("hex").value = "" }
  }
}

<input id="bin" oninput="Convert('bin', 2)" placeholder="bin" spellcheck="false">
<input id="oct" oninput="Convert('oct', 8)" placeholder="oct" spellcheck="false">
<input id="dec" oninput="Convert('dec', 10)" placeholder="dec" spellcheck="false">
<input id="hex" oninput="Convert('hex', 16)" placeholder="hex" spellcheck="false">
*/
