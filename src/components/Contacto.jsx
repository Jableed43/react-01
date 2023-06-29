import Header from './Header';
function Contacto() {

    function handleSubmit (e){
        e.preventDefault()

        let mail = {
            fullname: e.target[0].value,
            asunto: e.target[1].value,
            mensaje: e.target[2].value,
        }

        console.log(mail);

    }

    return (
    <>
    <Header/>
    
    <form onSubmit={handleSubmit}>

        <label htmlFor="fullname">Nombre y Apellido</label>
        <input type="text" name='fullname' id='fullname' />

        <label htmlFor="asunto">Asunto</label>
        <select name="asunto" id="asunto">
            <option value="compras">Compras</option>
            <option value="inconveniente">Inconveniente</option>
            <option value="trabajo">Quiero trabajar con ustedes</option>
        </select>

        <label htmlFor="mensage">Mensaje</label>
        <textarea name="mensage" id="mensage" cols="30" rows="10" placeholder='Escriba su mensaje...'></textarea>

        <button type="submit">Enviar</button>

    </form>
    </>
    )
}

export default Contacto
