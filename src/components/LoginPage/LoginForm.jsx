// components/LoginPage/LoginForm.js

import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'userpass') {
      onLogin('user');
    } else if (username === 'admin' && password === 'adminpass') {
      onLogin('admin');
    } else if (username === 'manager' && password === 'managerpass') {
      onLogin('manager');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
