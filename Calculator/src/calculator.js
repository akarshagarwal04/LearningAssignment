
// is there any way to encapsulate data and its related functions better
//Alternatively we can encapsulate all the functions and data in constructor function and can have global object of that function,

function Calculator(){
	this.data = new dataObject();
	function dataObject(){
		this.latestOperator = null;
		this.prevOperand = "";
		this.curOperand = "";
	}
	this.handleClickInput = function handleClickInput(button, textFieldId){
		var text = document.getElementById(textFieldId);
		var btValue = button.value;
		handleCalculator(btValue,text,this);
	}
	function handleCalculator(btValue,text,calculator){
		if(btValue=="+" || btValue=="-" || btValue=="*" || btValue=="/"){
			if(calculator.data.latestOperator!=null && calculator.data.curOperand!="" && calculator.data.prevOperand!=""){
				calculator.data.prevOperand = operate(calculator);
				calculator.data.latestOperator = btValue;
				calculator.data.curOperand = "";
				text.value = calculator.data.prevOperand;
			} else if(calculator.data.curOperand!=""){
				calculator.data.latestOperator = btValue;
				calculator.data.prevOperand = calculator.data.curOperand;
				calculator.data.curOperand = "";
			} 
		}
		if(btValue=="C"){
			calculator.data.curOperand = "";
			text.value = "";
		}
		if((btValue>="0" && btValue<="9") || btValue=="."){
			calculator.data.curOperand = calculator.data.curOperand + btValue;
			text.value = calculator.data.curOperand;
		}
		if(btValue=="="){
			if(calculator.data.latestOperator!=null && calculator.data.prevOperand!="" && calculator.data.curOperand!=""){
				calculator.data.curOperand = operate(calculator);
				calculator.data.prevOperand = "";
				calculator.data.latestOperator = null;
				text.value = calculator.data.curOperand;
			}
		}
		function operate(calculator){
			return eval(calculator.data.prevOperand+calculator.data.latestOperator+calculator.data.curOperand);
		}
	}
	
}
var CALCULATOR = new Calculator();


