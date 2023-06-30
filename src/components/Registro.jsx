import Header from './Header';
function Registro() {
    const urlBase = "https://648b137217f1536d65ea4c77.mockapi.io/api/users";

    async function addOne(user) {

        try {
            const response = await fetch(urlBase, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(user),
            });
          
            if (!response.ok) {
              throw new Error("Error en la solicitud");
            }
          
            const data = await response.json();
            console.log(data);
          } catch (error) {
            postError.innerText = error;
          }

    }
    function sendUser(e) {
        e.preventDefault();
        let newUser = {
            name: e.target[0].value,
        }
        addOne(newUser)
    }

    return (
    <><Header/>
       <h1>Registro</h1>

       <form onSubmit={sendUser}>
      
      <label htmlFor="name">Nombre</label>
      <input type="text" name='name' id='name' />

      <button type="submit">Enviar</button>
       </form>
    </>
    )
}

export default Registro