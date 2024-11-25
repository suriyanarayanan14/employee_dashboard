import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.username !== username || storedUser.password !== password) {
      setError('Invalid username or password');
    } else {
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
      fontFamily: '"Roboto", sans-serif',
    },
    formContainer: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#007bff',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#16a085',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    errorMessage: {
      color: 'red',
      fontSize: '0.875rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    signUpText: {
      textAlign: 'center',
      marginTop: '1rem',
      fontSize: '0.875rem',
    },
    signUpLink: {
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={styles.errorMessage}>{error}</p>}
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.signUpText}>
          New user?{' '}
          <span
            style={styles.signUpLink}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
