const BASE_URL = "https://648b137217f1536d65ea4c77.mockapi.io/api/users/";


export const fetchUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error fetching users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
