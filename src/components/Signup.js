import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, password }));
    alert('Signup successful! Please login.');
    navigate('/');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f9fc',
      fontFamily: '"Roboto", sans-serif',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    heading: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #cccccc',
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
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#16a085',
    },
    errorMessage: {
      color: 'red',
      fontSize: '0.875rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    footerText: {
      textAlign: 'center',
      marginTop: '1rem',
      fontSize: '0.875rem',
    },
    loginLink: {
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={styles.input}
          />
          {error && <p style={styles.errorMessage}>{error}</p>}
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p style={styles.footerText}>
          Already have an account?{' '}
          <span
            style={styles.loginLink}
            onClick={() => navigate('/')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
