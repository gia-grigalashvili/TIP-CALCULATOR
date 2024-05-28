const billinput = document.getElementById("bill");
const tipinputs = Array.from(document.getElementsByClassName("tip"));
const peopleinput = document.getElementById("people");
const resultip = document.getElementById("result-tip");
const resulttotal = document.getElementById("result-total");
const resetbutton = document.getElementById("reset");
const customtipinput = document.getElementById("custom-tip");

let billvalue = 0;
let tipvalue = 0;
let peoplevalue = 0;
billinput.addEventListener("input", (event) => {
  billvalue = Number(event.target.value);
  calculation();
});
tipinputs.forEach((button) => {
  button.addEventListener("click", (event) => {
    tipvalue = parseInt(event.target.innerText);
    calculation();
  });
});
peopleinput.addEventListener("input", (event) => {
  peoplevalue = Number(event.target.value);
  calculation();
});
customtipinput.addEventListener("input", (event) => {
  tipvalue = parseInt(event.target.value);
  calculation();
});

function calculation() {
  if (peoplevalue != 0) {
    let tiprsultvalue = (billvalue * (tipvalue / 100)) / peoplevalue;
    let totalvalue = billvalue / peoplevalue + tiprsultvalue;
    resultip.innerText = `$${tiprsultvalue.toFixed(2)}`;
    resulttotal.innerText = `$${totalvalue.toFixed(2)}`;
  } else {
    resultip.innerText = "$0.00";
    resulttotal.innerText = "$0.00";
  }
}

resetbutton.addEventListener("click", () => {
  resultip.innerText = "$0.00";
  resulttotal.innerText = "$0.00";
  billinput.value = "";
  peopleinput.value = "";
});
