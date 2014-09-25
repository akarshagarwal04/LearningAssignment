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
	if(btValue=="+" || btValue=="-" || btValue=="*" || btValue=="/"){
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
		text.value = "";
	}
	if((btValue>="0" && btValue<="9") || btValue=="."){
		data.curOperand = data.curOperand + btValue;
		text.value = data.curOperand;
	}
	if(btValue=="="){
		if(data.latestOperator!=null && data.prevOperand!="" && data.curOperand!=""){
			data.curOperand = operate();
			data.prevOperand = "";
			data.latestOperator = null;
			text.value = data.curOperand;
		}
	}
	function operate(){
		return eval(data.prevOperand+data.latestOperator+data.curOperand);
	}
}