import Header from "./Header"
function Registro() {

  function addOne(user) {
    const urlBase = "https://648b137217f1536d65ea4c77.mockapi.io/api/users";

    fetch(urlBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    //al recibir respuesta la convertimos en json
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => postError.innerText=err);
  }

function handleSubmit(e) {
  e.preventDefault()

  //objeto nuevo usuario con los datos del formulario
  let newUser = {
    name: e.target.nombre.value,
    password : e.target.password.value
  }

  //funcion que manda por post nuevo usuario
  addOne(newUser)

  //resetear los campos luego de enviar la data
  e.target.reset()
}

    return (
      <>
      <Header/>
      <h2>Registrar usuario</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password"/>

        <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
  
  export default Registro