$(()=>{
	$("button").button();

	$.widget("com.miWidget",{
		_create:function(){
			this._inputNumero1 = $("<input>");
			this._inputNumero1.attr("placeholder","Type the first number");
			this._inputNumero1.css("width","200px");
			this._inputNumero1.css("border-style","solid");
			this._inputNumero1.css("text-align","left");
			this._inputNumero1.css("margin","0 auto");
			$(this.element).append(this._inputNumero1);

			this._inputNumero2 = $("<input>");
			this._inputNumero2.attr("placeholder","Type the second number");
			this._inputNumero2.css("width","200px");
			this._inputNumero2.css("border-style","solid");
			this._inputNumero2.css("text-align","left");
			this._inputNumero2.css("margin","0 auto");
			$(this.element).append(this._inputNumero2);

			this._operations = $("<select>");
			this._operations.css = $("width","200px");

			var operaciones1 = document.createElement("option");

			operaciones1.text = "Choose one operation...";
			operaciones1.value = "";

			var operaciones2 = document.createElement("option");
			operaciones2.text = "Sum";
			operaciones2.value = "1";

			var operaciones3 = document.createElement("option");
			operaciones3.text = "Rest";
			operaciones3.value = "2";

			var operaciones4 = document.createElement("option");
			operaciones4.text = "Multiplication";
			operaciones4.value = "3";

			var operaciones5 = document.createElement("option");
			operaciones5.text = "Division";
			operaciones5.value = "4";

			
			this._operations.append(operaciones1);
			this._operations.append(operaciones2);
			this._operations.append(operaciones3);
			this._operations.append(operaciones4);
			this._operations.append(operaciones5);

			$(this.element).append(this._operations);
		},

		calcular: function(){
			if (this.validar) {

				var opcion = parseInt(this._operations.val());
				var result;
				var number1;
				var number2;

				switch(opcion){
					case 1:
					number1 = parseInt(this._inputNumero1.val());
					number2 = parseInt(this._inputNumero2.val()); 

					result = number1 + number2;
					alert("The result is: " + result);
					break;

					case 2:
					number1 = parseInt(this._inputNumero1.val());
					number2 = parseInt(this._inputNumero2.val()); 

					result = number1 - number2;
					alert("The result is: " + result);
					break;

					case 3:
					number1 = parseInt(this._inputNumero1.val());
					number2 = parseInt(this._inputNumero2.val()); 

					result = number1 * number2;
					alert("The result is: " + result);
					break;

					case 4:
					number1 = parseInt(this._inputNumero1.val());
					number2 = parseInt(this._inputNumero2.val()); 

					result = number1 / number2;
					alert("The result is: " + result);
					break;
				}
			}
		},

		validar: function(){
				var input1 = this._inputNumero1.val().trim().length;
				var input2 = this._inputNumero2.val().trim().length;

				if (input1 == 0 || input2 == 0) {
					alert('Please, fill the space in')

					$("#miDiv").addClass("style2",1000,"easeOutExpo");
					return false;
				}else{
					$("#miDiv").removeClass("style2",1000,"easeOutBounce");
				}
			}
	});

	$("#btn1").click(()=>{
		$("#miDiv").miWidget();
	});

	$("#btn2").click(()=>{
		$("#miDiv").miWidget("calcular");
	});
});