const datos = JSON.parse(localStorage.getItem("contacto"));
  
  if (datos) {
    document.querySelector("#nombre").textContent = datos.nombre;
    document.querySelector("#email").textContent = datos.email;
    document.querySelector("#mensaje").textContent = datos.mensaje;
  
    localStorage.removeItem("contacto");
  }

function volverInicio() {
    localStorage.removeItem("contacto");
    window.location.href = "producto.html"
}


  
  
  
  