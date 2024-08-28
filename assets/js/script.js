document.querySelector ('.form__submit input').addEventListener('click', () => {
    const monto = parseFloat(document.getElementById('monto').value);
    const interes = parseFloat (document.getElementById('interes').value);
    const cuotas = parseFloat (document.getElementById('cuotas').value);
    const montoCuotas = calcularCuotas (monto,interes,cuotas);
    const montoFormateado = formatearMonto (montoCuotas);

    alert(`Debes pagar ${cuotas} cuotas de ${montoFormateado}`);
})
// funcion para calcular el valor de las cuotas 
const calcularCuotas = (monto, interes, cuotas) => {
  let montoConInteres = monto * (1 + interes / 100);
  return (montoConInteres / cuotas).toFixed(2);
}

// Función para calcular el valor del interés
 const calcularInteres = (monto, interes) => {
    return (monto * interes / 100).toFixed(2);
 }

 // Funcion para formatear el monto con puntos en lugar de miles
 const formatearMonto = (monto)=> {
    return monto.toString().replace (/\B(?=(\d{3})+(?!\d))/g, ".");

 }