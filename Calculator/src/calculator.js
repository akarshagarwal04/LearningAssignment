function dataObject(){
	this.latestOperator = null;
	this.prevOperand = "";
	this.curOperand = "";
}
//TODO: is there any way to encapsulate data and its related functions better
var data = new dataObject();
function handleClickInput(button, textFieldId){
	var text = document.getElementById(textFieldId);
	var btValue = button.value;
	handleCalculator(btValue,text);
}

function handleCalculator(btValue,text){
	if(btValue=="+" || btValue=="-" ){
		if(data.latestOperator!=null && data.curOperand!="" && data.prevOperand!=""){
			data.prevOperand = operate();
			data.latestOperator = btValue;
			data.curOperand = "";
			text.value = data.prevOperand;
		} else if(data.curOperand!=""){
			data.latestOperator = btValue;
			data.prevOperand = data.curOperand;
			data.curOperand = "";
		} 
	}
	if(btValue=="C"){
		data.curOperand = "";
		text.value = data.curOperand;
	}
	if((btValue>="0" && btValue<="9") || btValue=="."){
		data.curOperand = "" + data.curOperand + btValue;
		text.value = data.curOperand;
	}
	if(btValue=="="){
		if(data.latestOperator!=null && data.prevOperand!="" && data.curOperand!=""){
			//restore state same as only one operand in memory and that operand would be operated result 
			//that can be used for further computation
			data.curOperand = operate();
			data.prevOperand = "";
			data.latestOperator = null;
			text.value = data.curOperand;
		}
	}
	function operate(){
		switch(data.latestOperator) {
	    case "+":
	        return (Number(data.prevOperand) + Number(data.curOperand));
	    case "-":
	    	return (Number(data.prevOperand) - Number(data.curOperand));
		}
	}
}