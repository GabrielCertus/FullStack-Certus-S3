
var num1 = prompt("Ingrese un numero",'');
num1 = parseInt(num1);
var rpt = " es primo";

for(var p = num1 - 1; p != 1; p--){
	if( num1 % p == 0) {
		rpt = " no es primo";
		break;
	}
}
document.querySelector("body").innerHTML = "El numero "+ num1 + rpt;