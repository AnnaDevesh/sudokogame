import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('sudokuUser')) {
      navigate('/home');
    }
  }, []);

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #89f7fe, #66a6ff)', // Gradient background
    },
    screen: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px 0',
      width: '100%',
      maxWidth: '200px',
      transition: 'background-color 0.3s ease',
    },
    orText: {
      margin: '15px 0',
      fontSize: '18px',
      color: '#333',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.main}>
        <div style={styles.screen}>
          <button style={styles.button} onClick={() => navigate('/auth')}>
            Login
          </button>
          <div style={styles.orText}>or</div>
          <button style={styles.button} onClick={() => navigate('/home')}>
            Play as guest
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
