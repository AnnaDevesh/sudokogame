import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  const seeProfile = () => {
    navigate('/myprofile');
  };

  const getUsername = () => {
    if (localStorage.getItem('sudokuUser')) {
      let token = JSON.parse(localStorage.getItem('sudokuUser')).token;
      return jwtDecode(token).username;
    }
    return undefined;
  };

  const styles = {
    nav: {
      backgroundColor: '#007bff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    logo: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      marginLeft: '15px',
    },
  };

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>
        {getUsername() ? `Welcome, ${getUsername()}` : 'Welcome to Sudoku online!'}
      </a>
      <div style={styles.iconsContainer}>
        {localStorage.getItem('sudokuUser') && (
          <img
            src={require('./userIcon.png')}
            alt="user"
            style={styles.icon}
            onClick={seeProfile}
          />
        )}
        <img
          src={require('./homeIcon.jpg')}
          alt="home"
          style={styles.icon}
          onClick={returnHome}
        />
      </div>
    </nav>
  );
};

export default Navbar;
