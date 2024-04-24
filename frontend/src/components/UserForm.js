import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { username, email, password });
      onSubmit(); // Call the onSubmit function passed from the parent component
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default UserForm;
