import { useRef, useEffect, useState } from 'react'

const blankUser = {
  createdAt: "",
  name: "",
  email: "",
  phone: "",
  id: ""
};

const BASE_URL = "https://648b137217f1536d65ea4c77.mockapi.io/api/users/";

export default function Users() {
  const modalRef = useRef();
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(blankUser);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(blankUser);

  const fetchUsers = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      const data = await response.json();
      setUsers(data);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const deleteUser = async () => {
    try {
      await fetch(`${BASE_URL}${selectedUser.id}`, {
        method: "DELETE",
      });
      setSelectedUser(blankUser);
      modalRef.current.close();
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async () => {
    try {
      await fetch(`${BASE_URL}${selectedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedUser)
      });
      setSelectedUser(editedUser);
      setEditMode(false);
      modalRef.current.close();
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const selectUser = (id) => {
    const selected = users.find(user => user.id === id);
    setSelectedUser(selected);
    setEditedUser(selected);
    modalRef.current.show();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  
    return formattedDate;
  }

if (error) {
    return <h2>Error</h2>;
  }

return (
    <section className='crud'>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => selectUser(user.id)} className="card-container">
            <div className='card'>
              <img src={user.avatar} alt="Avatar" />
              <div>
                <h5>Name: {user.name}</h5>
                <p>Id: {user.id}</p>
                <p>Password: {user.password}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
  
      <dialog ref={modalRef} className='modal'>
        {editMode ? (
          <div>
            <label htmlFor="name">Nombre</label>
            <input
            name='name'
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="text"
              name='password'
              value={editedUser.password}
              onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
            />

            <button onClick={editUser}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <p>Usuario desde: {formatDate(selectedUser.createdAt)}</p>
            <p>Nombre: {selectedUser.name}</p>
            <p>Contraseña: {selectedUser.password}</p>
            <button onClick={() => setEditMode(true)}>Editar</button>
            <button onClick={deleteUser}>Borrar</button>
            <button onClick={() => modalRef.current.close()}>Cerrar</button>
          </div>
        )}
      </dialog>
    </section>
  );
        }