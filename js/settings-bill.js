//get a reference to the add button
// var settingAddButtonElem = document.querySelector("input[name='number']:checked");
// if(settingAddButtonElem)  {  
//     var billString = settingAddButtonElem.value;
// }
const settingAddButtonElem = document.querySelector(". setting")
//get a reference to the 'Update settings' button
const settingupdateButtonElem = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings

// get a reference to the total
const callsetTotalElem= document.querySelector(".callTotalSettings");
const smssetTotalElem = document.querySelector(".smsTotalSettings");
const totalsetTotalElem = document.querySelector(".totalSettings");

var settotalTwo = 0;

var setcallTotal1 = 0;
var setsmsTotal1 = 0;

function calculateBtnClicked4(){

// get refences to all the settings fields
// call set button
const callsetButtonElem = document.querySelector(".callCostSetting");
if(callsetButtonElem){
    var billString1 = callsetButtonElem.value;
} 
// sms set  button
const smssetButtonElem = document.querySelector(".smsCostSetting");
if(smssetButtonElem){
    var billString2= smssetButtonElem.value;
}



// get a reference to the sms or call radio buttons
var billSettingButtonElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if(billSettingButtonElem)  {  
    var billString = billSettingButtonElem.value;
}
if(billString === "call"){
    setcallTotal1 += billString1
}
else if (billString === "sms"){
    setsmsTotal1 += billString2
}
 var smsTot  = setcallTotal1.toFixed(2);
callsetTotalElem.innerHTML = smsTot;

 var callTot = setsmsTotal1.toFixed(2);
smssetTotalElem.innerHTML =  callTot ;

 settotalTwo= Number(smsTot) + Number(callTot);
totalsetTotalElem.innerHTML = settotalTwo.toFixed(2);


// set warning level 
const warningsetButtonElem = document.querySelector(".warningLevelSetting");
if(warningsetButtonElem){
    var billString3= warningsetButtonElem.value;
}
// criticallevel
const criticalsetButtonElem = document.querySelector(".criticalLevelSetting");
if(criticalsetButtonElem){
    var billString4 = criticalsetButtonElem.value;
}
if(settotalTwo>billString3 && settotalTwo< billString4){
    totalsetTotalElem.classList.add("warning");
}
else if(settotalTwo>billString4){
    totalsetTotalElem.classList.add("danger");
}


//  set arrow and button
var setArrowElem = document.querySelector("input[type='number']:checked");
if(setArrowElem){
   var billString = setArrowElem.value;
}

}
//add an event listener for when the 'Update settings' button is pressed
settingupdateButtonElem .addEventListener('click',calculateBtnClicked4)
//add an event listener for when the add button is pressed
settingAddButtonElem .addEventListener('click',calculateBtnClicked4)
//in the event listener get the value from the billItemTypeRadio radio buttons

