function Indice() {
let kilogramos =  parseInt(document.getElementById('kg').value);
let estatura = parseFloat(document.getElementById('estatura').value);
const indice_ = Math.round((kilogramos / (estatura)**2));
document.getElementById('indiceVal').innerHTML ="Su índice de masa corporal es: " + indice_;
}