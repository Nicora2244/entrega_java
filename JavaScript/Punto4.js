function sumaLista() {
    const n = parseInt(document.getElementById('tamano').value);
    let total=0;
    var arregloNumeros = new Array();
    var numero = 0
    for(var i = 0; i < n;i++) {
        numero = prompt("Digite número:","Captura datos");
        arregloNumeros.push(numero);
    }
    var suma = 0
    arregloNumeros.forEach (function(numero){
        suma += numero;
    });
    document.getElementById('listaSum').innerHTML =`Suma de la lista: ${suma} .`
}