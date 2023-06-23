import Header from "./Header"

function Contacto() {

function handleSubmit(e) {
  e.preventDefault()

  let contacto = {
    nombreCompleto: e.target.fullName.value,
    motivo: e.target.reason.value,
    mensaje: e.target.mensaje.value
  }

  console.log(contacto);
}

    return (
      <>
      <Header/>
      <h3>contacto</h3>
      <form onSubmit={handleSubmit}  className="contactForm">
      
      <label htmlFor="fullName">Nombre Completo</label>
      <input type="text" name="fullName" id="fullName" required />

      <label htmlFor="reason">Razón del contacto</label>
      <select name="reason" id="reason" required>
      <option value="compras">Compras & Servicios</option>
      <option value="inconveniente">Inconveniente</option>
      <option value="trabajo">Trabajar con nosotros</option>
      </select>

      <label htmlFor="mensaje">Escriba su mensaje</label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="10" required></textarea>

      <button type="submit">Enviar</button>
      </form>
      </>
    )
  }
  
  export default Contacto