function arregloClc() {
    var arregloExt = document.getElementById('arreglo').value;
    var myArray = arregloExt.split(",");
    var suma = 0;
    for(var i = 0; myArray.length;i++) {
        suma +=myArray[i];
    }
   var tamano = myArray.length;
   var media = suma /tamano;
   var desviacion = ((suma - media)**2)/tamano;
   document.getElementById('arregloVal').innerHTML=`Media: ${media}. Desviación estándar: ${desviacion}`;
}