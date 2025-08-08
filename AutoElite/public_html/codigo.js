/* ReqJ10 */ /*ReqF7*/
function mostrarResumen(nombre, tipo, ciudad, email, telefono) {
  const telefonoFormateado = telefono.replace(/[^0-9+]/g, '');

  const nuevaVentana = window.open("", "_blank");

  if (nuevaVentana) {
    nuevaVentana.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Resumen de solicitud</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f8f8f8;
            color: #333;
          }
          h1 {
            color: #0057b8;
          }
        </style>
      </head>
      <body>
        <h1>¡Gracias por tu solicitud, ${nombre}!</h1>
        <p>Has solicitado una prueba para un coche <strong>${tipo}</strong> en <strong>${ciudad}</strong>.</p>
        <p>Correo electrónico: <strong>${email}</strong></p>
        <p>Teléfono: <strong>${telefonoFormateado}</strong></p>
        <p>Nos pondremos en contacto contigo lo antes posible.</p>
      </body>
      </html>
    `);
    nuevaVentana.document.close();
  } else {
    alert("No se pudo abrir la nueva pestaña.");
  }
}

/* ReqJ14 */
function detectarTecla(e) {
  console.log(`Tecla pulsada: ${e.key}`);
}

/* ReqJ16 */
function resaltarBoton(e) {
  e.target.style.backgroundColor = "lightblue";
}

/* ReqJ18 */
function confirmarEnvio(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = document.querySelector("input[name='tipo']:checked").value;
  const ciudad = document.getElementById("origen").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  if (!nombre.trim()) {
    alert("Por favor, introduce tu nombre.");
    return;
  }

  if (!email.trim()) {
    alert("Por favor, introduce tu correo electrónico.");
    return;
  }

  const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!emailValido) {
    alert("El formato del correo electrónico no es válido.");
    return;
  }

  if (!ciudad.trim()) {
    alert("Por favor, selecciona una ciudad.");
    return;
  }

  if (!telefono.trim()) {
    alert("Por favor, introduce tu número de teléfono.");
    return;
  }

  const telefonoValido = /^[0-9+]+$/.test(telefono);
  if (!telefonoValido) {
    alert("El teléfono solo debe contener números y opcionalmente el símbolo +.");
    return;
  }

  mostrarResumen(nombre, tipo, ciudad, email, telefono); /* ReqJ10 */
}

function validarCampo(campo) {
  if (campo.value.trim() === "") {
    campo.style.border = "2px solid red"; /* ReqF8 */
    campo.title = "Este campo es obligatorio"; /* ReqF9 */
  } else {
    campo.style.border = "2px solid green";
    campo.title = "";
  }
}

/* ReqF12, ReqF13, ReqF15, ReqF17 */
window.addEventListener("DOMContentLoaded", () => {
  const form = document.forms["formularioContacto"];
  if (form) {
    /* ReqF1 */
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const ciudad = document.getElementById("origen");
    const botonEnviar = form.querySelector("input[type='submit']");

    nombre.addEventListener("focus", () => nombre.style.backgroundColor = "#ffffcc"); /* ReqF12 */
    nombre.addEventListener("blur", () => nombre.style.backgroundColor = "");

    nombre.addEventListener("keydown", detectarTecla); /* ReqJ14 */

    botonEnviar.addEventListener("mouseover", resaltarBoton); /* ReqJ16 */
    botonEnviar.addEventListener("click", confirmarEnvio);    /* ReqJ18 */

    [nombre, email, ciudad].forEach(campo => {
      campo.addEventListener("input", () => validarCampo(campo));
    });
  }
  
  const campoPrecio = document.getElementById('precioBase');
  if (campoPrecio) {
    document.querySelectorAll('.precio-click').forEach(celda => {
      celda.style.cursor = 'pointer';
      celda.title = 'Haz clic para usar este precio';
      celda.addEventListener('click', () => {
        const precioLimpio = celda.textContent.replace(/[.,]/g, match => match === '.' ? '' : '.');
        campoPrecio.value = parseFloat(precioLimpio);
      });
    });
  }
});