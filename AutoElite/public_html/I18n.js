/* ReqI2 */
const formateadorDecimal = document.documentElement.lang === "en"
  ? new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2 })
  : new Intl.NumberFormat('es-ES', { style: 'decimal', minimumFractionDigits: 2 });

/* ReqI3 */
const formateadorMoneda = document.documentElement.lang === "en"
  ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  : new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' });

/* ReqI4 */
const formateadorFechaCorta = document.documentElement.lang === "en"
  ? new Intl.DateTimeFormat('en-US')
  : new Intl.DateTimeFormat('es-ES');

/* ReqI5 */
const formateadorFechaLarga = document.documentElement.lang === "en"
  ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })
  : new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });

/* ReqI12 */
function actualizarPrecios(idBase, idImpuestos, idResultadoDecimal, idResultadoMoneda) {
  const base = parseFloat(document.getElementById(idBase).value);
  const impuestos = parseFloat(document.getElementById(idImpuestos).value);
  const total = base + (base * (impuestos / 100));

  /* ReqI13 */
  document.getElementById(idResultadoDecimal).textContent = formateadorDecimal.format(total);

  /* ReqI14 */
  document.getElementById(idResultadoMoneda).textContent = formateadorMoneda.format(total);
}

/* ReqI12 */
function actualizarFechas(idFechaInput, idFechaCorta, idFechaLarga) {
  const fecha = new Date(document.getElementById(idFechaInput).value);

  /* ReqI15 */
  document.getElementById(idFechaCorta).textContent = formateadorFechaCorta.format(fecha);

  /* ReqI16 */
  document.getElementById(idFechaLarga).textContent = formateadorFechaLarga.format(fecha);
}