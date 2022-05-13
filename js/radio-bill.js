// get a reference to the sms or call radio buttons
// const callButtonElem = document.querySelectorAll(".billItemTypeRadio");
//get a reference to the add button
const rAddButtonElem = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callBillraTotalElem= document.querySelector(".callTotalTwo");
const smsBillraTotalElem = document.querySelector(".smsTotalTwo");
const totalraBillTotalElem = document.querySelector(".totalTwo");

var totalTwo = 0;

var callTotal1 = 0;
var smsTotal1 = 0;

function calculateBtnClicked3(){
var radioButtonElem = document.querySelector("input[name='billItemType']:checked");

if(radioButtonElem){
    var billString = radioButtonElem.value;
 
}
  if(billString === "call"){
        callTotal1 += 2.75;
    }
    else if (billString === "sms"){
        smsTotal1 += 0.75;
    
    }
    

 var  smsTot  = callTotal1.toFixed(2);
callBillraTotalElem.innerHTML = smsTot;

var callTot = smsTotal1.toFixed(2);
smsBillraTotalElem.innerHTML =  callTot ;

 totalTwo= Number(smsTot) + Number(callTot);
totalraBillTotalElem.innerHTML = totalTwo.toFixed(2);

//000000000000000
if(totalTwo>30 && totalTwo<50){
    totalraBillTotalElem.classList.add("warning");
}else if(totalTwo>50){
    totalraBillTotalElem.classList.add("danger");
}




}

rAddButtonElem.addEventListener('click',calculateBtnClicked3)














//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
