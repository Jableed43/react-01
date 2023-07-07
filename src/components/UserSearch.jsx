import { useState, useEffect } from 'react';
import { fetchUsers } from '../usersApi.js';

const UserSearch = () => {
  //la palabra de la busqueda que escribo en el input
  const [searchTerm, setSearchTerm] = useState('');
  //guardamos los usuarios
  const [users, setUsers] = useState([]);
  //usuarios filtrados, que coinciden con el la palabra de busqueda
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  //busqueda
  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered.slice(0, 10)); // Limitar a los primeros 10 resultados
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by username"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>Nombre:{user.name}, Id: {user.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;





