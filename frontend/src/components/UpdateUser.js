import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [newData, setNewData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, newData);
      // Redirect or handle success as needed
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="username" placeholder="Username" value={newData.username || user.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={newData.email || user.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={newData.password || user.password} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
