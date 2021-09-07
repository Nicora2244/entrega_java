function salario(){
    var x = parseInt(document.getElementById('horas').value);
	var y = parseInt(document.getElementById('valor').value);
    document.getElementById('salaryValue').innerHTML ="Su salario es: $" +  x*y;
 }