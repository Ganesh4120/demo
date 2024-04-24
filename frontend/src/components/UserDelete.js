import React from 'react';
import axios from 'axios';

function UserDelete({ userId, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      onDelete(); // Call the onDelete function passed from the parent component
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default UserDelete;
