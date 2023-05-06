const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  
  validarFormulario();
});

function validarFormulario() {
    const nombre = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensaje = document.querySelector("#message").value.trim();
  
    const valEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    if (nombre === "") {
      alert("Por favor ingrese su nombre.");
      return;
    }
  
    if (!valEmail.test(email)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return;
    }
  
    if (mensaje === "") {
      alert("Por favor ingrese un mensaje.");
      return;
    }
  
    enviarFormulario(nombre, email, mensaje);
}
 
  function enviarFormulario(nombre, email, mensaje) {
    const datos = {
      nombre,
      email,
      mensaje,
    };
  
    localStorage.setItem("contacto", JSON.stringify(datos));
  
    alert("Su mensaje ha sido enviado.");
  
    window.location.href = "confirmacion.html";
  }
  
  