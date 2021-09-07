function palindromo() {
    let palabra = document.getElementById('palabra').value;
    const strReversed = palabra.split("").reverse().join("")

 strReversed === palabra ? document.getElementById('palabrVal').innerHTML="es palindromo" : document.getElementById('palabrVal').innerHTML="No es palindromo"
}