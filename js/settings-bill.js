
const settingAddButtonElem = document.querySelector(".setting")
const settingupdateButtonElem = document.querySelector(".updateSettings")
const callsetTotalElem= document.querySelector(".callTotalSettings");
const smssetTotalElem = document.querySelector(".smsTotalSettings");
const totalsetTotalElem = document.querySelector(".totalSettings");

var callsetButton =0
var smssetButton=0
var warningSetButton=0
var criticalSetButton =0

var totalTwo = 0;
var callTotal1 = 0;
var smsTotal1 = 0;

function calculateBtnClicked5(){
    
var settingButtonElem = document.querySelector("input[name='billItemTypeWithSettings']:checked").value;
// if(settingButtonElem){ 
//     var billStringSet = settingButtonElem.value;
   
// }
  if(settingButtonElem === "call"){
      if(criticalSetButton = Number(callTotal1) + Number(callsetButton) + Number(smsTotal1)){
      return
     }
        callTotal1 += callsetButton;
     
    }
    else if (settingButtonElem === "sms"){
        if(criticalSetButton < Number(callTotal1) + Number(smssetButton) + Number(smsTotal1)){
            return 
        }
        smsTotal1 += smssetButton;
    
    }


 var  callTot  = callTotal1.toFixed(2);


var smsTot = smsTotal1.toFixed(2);

totalTwo= Number(smsTot) + Number(callTot);

    smssetTotalElem.innerHTML =  smsTot;
    callsetTotalElem.innerHTML = callTot;
    totalsetTotalElem.innerHTML = totalTwo.toFixed(2);  


//000000000000000
if(totalTwo>=warningSetButton && totalTwo<criticalSetButton){
    totalsetTotalElem.classList.add("warning");
}else if(totalTwo >= criticalSetButton){
    totalsetTotalElem.classList.add("danger");
}

}
function addClasses(){
    if(!(totalTwo>=warningSetButton && totalTwo<criticalSetButton)){
        totalsetTotalElem.classList.remove("warning");
    }else{ 
        totalsetTotalElem.classList.add("warning");
    }
     if(totalTwo<=criticalSetButton){
        totalsetTotalElem.classList.remove("danger");
    }else{
        totalsetTotalElem.classList.add("danger");
    }
}
function settingUpdate(){
      callsetButton= Number(document.querySelector(".callCostSetting").value);
      smssetButton = Number(document.querySelector(".smsCostSetting").value);
      warningSetButton= Number(document.querySelector(".warningLevelSetting").value); 
     
      criticalSetButton = Number(document.querySelector(".criticalLevelSetting").value);
     addClasses()
     
}

settingupdateButtonElem.addEventListener('click', settingUpdate)
//add an event listener for when the add button is pressed
settingAddButtonElem.addEventListener('click',calculateBtnClicked5)
//in the event listener get the value from the billItemTypeRadio radio buttons

