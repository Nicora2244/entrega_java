function dulcesTotal(){
    let barras = parseInt(document.getElementById('dulces').value);
    const precio = 450;
    const subtotal = barras*precio;
    const descuento = subtotal*0.5;
    const total = subtotal - descuento;
    document.getElementById('dulcesVal') .innerHTML =`Precio habitual ${precio}, subtotal: ${subtotal}, descuento: ${descuento}, total a pagar ${total}`;
}