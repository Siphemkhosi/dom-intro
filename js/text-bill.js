// get a reference to the textbox where the bill type is to be entered
//get a reference to the add button
const aButtonAdd = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callBillTotalElem= document.querySelector(".callTotalOne");
const smsBillTotalElem = document.querySelector(".smsTotalOne");
const totalBillTotalElem = document.querySelector(".totalOne");


//add an event listener for when the add button is pressed
var roundedBillTotal3 = 0;

var callTotal = 0;
var smsTotal = 0;


function calculateBtnClicked2(){

 const aButtonText = document.querySelector(".billTypeText");
if(aButtonText){
    var billString =  aButtonText.value.trim();
}
if (billString === "call"){
    callTotal += 2.75;
}
else if (billString === "sms"){
    smsTotal += 0.75;

}
var roundedBillTotal1 =   callTotal.toFixed(2);
callBillTotalElem.innerHTML = roundedBillTotal1;

var roundedBillTotal2 =   smsTotal.toFixed(2);
smsBillTotalElem.innerHTML = roundedBillTotal2;


roundedBillTotal3 = Number(roundedBillTotal1) + Number(roundedBillTotal2)
totalBillTotalElem.innerHTML = roundedBillTotal3.toFixed(2);

//000000000000000
if(roundedBillTotal3>30 && roundedBillTotal3<50){
    totalBillTotalElem.classList.add("warning");
}else if(roundedBillTotal3>50){
    totalBillTotalElem.classList.add("danger");
}

}
aButtonAdd.addEventListener('click',calculateBtnClicked2);

