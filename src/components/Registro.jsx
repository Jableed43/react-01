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
    
    //   fetch(urlBase, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(user),
    //   })
    //   //al recibir respuesta la convertimos en json
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    //     .catch((err) => postError.innerText=err);
    }
    function sendUser(e) {
        e.preventDefault();
        let newUser = {
            name: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            phone: e.target[3].value
        }
        addOne(newUser)
    }

    return (
    <><Header/>
       <h1>Registro</h1>

       <form onSubmit={sendUser}>
      <input type="text" name='name' id='name' />
      <input type="text" name='lastName' id='lastName' />
      <input type="email" name='email' id='email' />
      <input type="phone" name='phone' id='phone' />
      <button type="submit">Enviar</button>
       </form>
    </>
    )
}

export default Registro

