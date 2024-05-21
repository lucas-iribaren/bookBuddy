import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user/me');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user', error);
      }
    };
    fetchUser();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/me', { password: newPassword });
      alert('Password updated successfully!');
    } catch (error) {
      console.error('Error updating password', error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <form onSubmit={handlePasswordChange}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default Profile;
