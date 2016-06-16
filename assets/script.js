function raizCuadrada() {
	var raiz=prompt("Por favor ingrese el numero a calcular", "16")
	var resultado=0
	if (raiz!= -1) {
		resultado=Math.sqrt(raiz);
	}
	window.alert("La raiz cuadrada de " + raiz +" " +"es: " + resultado);
}