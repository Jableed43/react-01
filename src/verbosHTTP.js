const urlBase = "https://648b137217f1536d65ea4c77.mockapi.io/api/users";

export function getUsers() {

const fetchUsers = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //Acá seteo los users como objeto de js
    //Guardo los users en 
    return data
  } catch (error) {
    console.log(error);
  }
}
}

//esta funcion es la que agrega el usuario
export function addOne(user) {

  fetch(urlBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
  //al recibir respuesta la convertimos en json
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => postError.innerText=err);

    const newUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    }
    addOne(newUser)
}

// put
export function updateOne(id, user) {
  fetch(urlBase + `/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// putUser.addEventListener("click", () => {
//     const editUser = {
//         name: editName.value,
//         lastName: editLastName.value,
//         email: editEmail.value,
//         phone: editPhone.value,
//       }
//       console.log(editUser);
//       updateOne(editId.value, editUser)
// })

// delete
let deleteUser = document.getElementById("deleteUser");
let deleteId = document.getElementById("deleteId")
//comunicacion con la api
export function deleteOne(id) {
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
