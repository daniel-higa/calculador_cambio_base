function pulsacion(n) {
	
	var DIG = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','.');
	
	switch(n) {
		case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 16:
		
		
		document.getElementById('Entrada').innerHTML += DIG[n];
		
		break;
		
		case 18:
		
		break;
		
		case 19:
		//document.getElementById('bOCT').style.opacity="0.2";
		break;
		
		case 20:
		
		break;
		
		case 21:
		
		break;
		
	}
	
}

function resizeEntrada() {
	
	//alert("Me cambiaste el tamaño");
	var aux = document.getElementById('Entrada');
	var aux2 = document.getElementById('cEntrada');
	
	if (aux.innerHTML !="") {
		
		var fontSize = 10;
		
			do {
				fontSize++; 
				aux.style.font='bold '+fontSize+'px "Courier New", Courier, monospace';
			} while (aux2.scrollHeight <= aux2.clientHeight && aux2.scrollWidth <= aux2.clientWidth);
		
			do {
				fontSize--; 
				aux.style.font='bold '+fontSize+'px "Courier New", Courier, monospace';
			} while (aux2.scrollHeight > aux2.clientHeight && aux2.scrollWidth > aux2.clientWidth);
			fontSize -=2;
			aux.style.font='bold '+fontSize+'px "Courier New", Courier, monospace';
			aux.style.top=(aux2.clientHeight - aux.clientHeight)/2 + 'px';
		}		
	}
	
	


window.onresize = function() {
	
	resizeEntrada();
	
}







//alert(n); //Dispara un popup con lo que se le ponga