
//esta funcion es la que agrega el usuario
function addOne(user) {
    // 1° parametro es la url base
    // 2° parametro un objeto, que lleva el metodo (post)
    //en cabecera va el tipo de contenido
    // body

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

//metodo que trabaja con formulario
postUser.addEventListener("click", () => {
    const newUser = {
        name: inputName.value,
        lastName: inputLastName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
      }
      addOne(newUser)
})

// put

let putUser = document.getElementById("putUser");

let editId = document.getElementById("editId")
let editName = document.getElementById("editName");
let editLastName = document.getElementById("editLastname");
let editEmail = document.getElementById("editEmail");
let editPhone = document.getElementById("editPhone");

function updateOne(id, user) {
  fetch(urlBase + `/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

putUser.addEventListener("click", () => {
    const editUser = {
        name: editName.value,
        lastName: editLastName.value,
        email: editEmail.value,
        phone: editPhone.value,
      }
      console.log(editUser);
      updateOne(editId.value, editUser)
})

// delete
let deleteUser = document.getElementById("deleteUser");
let deleteId = document.getElementById("deleteId")
//comunicacion con la api
function deleteOne(id) {
  fetch(urlBase + `/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

deleteUser.addEventListener("click", () => {
    deleteOne(deleteId.value)
})
