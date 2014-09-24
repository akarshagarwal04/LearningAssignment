/*var latestOperator=null;
var prevOperand="";
var curOperand="";*/
function dataObject(){
	this.latestOperator = null;
	this.prevOperand = "";
	this.curOperand = "";
}
var data = new dataObject();
function handleClickInput(button){
	var btValue = button.value;
	handleCalculator(btValue);
}
function handleCalculator(btValue){
	if(btValue=="+" || btValue=="-" ){
		if(data.curOperand!=""){
			data.latestOperator = btValue;
			data.prevOperand = curOperand;
			data.curOperand = "";
			//TODO:display curOperand in textbox
		}
	}
	if((btValue>="0" && btValue<="9") || btValue=="."){
		data.curOperand = data.curOperand+btValue;
		//TODO: display curOperand in textbox
	}
	if(btValue=="="){
		if(data.latestOperator!=null && data.prevOperand!="" && data.curOperand!=""){
			data.curOperand = operate();
			data.prevOperand = "";
			data.latestOperator = null;
			//TODO: display curOperand in textbox
		}
	}
	function operate(){
		switch(data.latestOperator) {
	    case "+":
	        return (Number(data.prevOperand) + Number(data.curOperand));
	    case "-":
	    	return (Number(data.prevOperand) + Number(data.curOperand));
	}
	}
}