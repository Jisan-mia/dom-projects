const poundsInput = document.getElementById("poundInput");
const kgInput = document.getElementById("kgInput");
const ouncesInput = document.getElementById("ouncesInput");
const gramsInput = document.getElementById("gramsInput");
const stonesInput = document.getElementById("stonesInput");
const tonneInput = document.getElementById("tonneInput");
const mgInput = document.getElementById("mgInput");

//pound function
function poundsToOther(poundVaue) {
  kgInput.value = poundVaue / 2.2046;
  ouncesInput.value = poundVaue * 16;
  gramsInput.value = poundVaue / 0.0022046;
  stonesInput.value = poundVaue * 0.071429;
  tonneInput.value = poundVaue / 2205;
  mgInput.value = poundVaue * 4.536e8;
}

//kilogram function
function kgToOther(kgValue) {
  poundInput.value = kgValue * 2.2046;
  ouncesInput.value = kgValue * 35.274;
  gramsInput.value = kgValue * 1000;
  stonesInput.value = kgValue * 0.1574;
  tonneInput.value = kgValue / 1000;
  mgInput.value = kgValue * 1e6;
}

//ounces function
function ouncesToOther(ouncesValue) {
  poundInput.value = ouncesValue * 0.0625;
  kgInput.value = ouncesValue / 35.247;
  gramsInput.value = ouncesValue / 0.035274;
  stonesInput.value = ouncesValue * 0.0044643;
  tonneInput.value = ouncesValue / 35274;
  mgInput.value = ouncesValue * 28350;
}

//grams funciton
function gramsToOther(gramsValue) {
  poundInput.value = gramsValue * 0.0022046;
  kgInput.value = gramsValue / 1000;
  ouncesInput.value = gramsValue * 0.035274;
  stonesInput.value = gramsValue * 0.00015747;
  tonneInput.value = gramsValue / 1e6;
  mgInput.value = gramsValue * 1000;
}

//stones function
function stonesToOther(stonesValue) {
  poundInput.value = stonesValue * 14;
  kgInput.value = stonesValue / 0.15747;
  ouncesInput.value = stonesValue * 224;
  gramsInput.value = stonesValue / 0.00015747;
  tonneInput.value = stonesValue / 157;
  mgInput.value = stonesValue * 6.35e6;
}

//tonne function
function tonneToOther(toneValue) {
  poundInput.value = toneValue * 2205;
  kgInput.value = toneValue * 1000;
  ouncesInput.value = toneValue * 35274;
  gramsInput.value = toneValue * 1e6;
  stonesInput.value = toneValue * 157;
  mgInput.value = toneValue * 1e12;
}

//miligram function
function mgToOther(mgValue) {
  poundInput.value = mgValue / 453592;
  kgInput.value = mgValue / 1e6;
  ouncesInput.value = mgValue / 28350;
  gramsInput.value = mgValue / 1000;
  stonesInput.value = mgValue / 6.35e6;
  tonneInput.value = mgValue / 1e9;
}
