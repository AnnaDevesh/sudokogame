import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  const modes = ['easy', 'medium', 'hard', 'extreme'];
  const modeColors = [
    'rgb(0, 174, 239)', // easy
    'rgb(255, 200, 0)', // medium
    'rgb(255, 87, 34)', // hard
    'rgb(33, 33, 33)', // extreme
  ];

  const [mode, setMode] = useState(0);

  let resumeMode = JSON.parse(sessionStorage.getItem('currentSudoku'))?.mode;

  const changeMode = () => {
    setMode((prev) => (prev + 1) % modes.length);
  };

  const handleResumeButton = () => {
    let mode = JSON.parse(sessionStorage.getItem('currentSudoku')).mode;
    navigate('/game?mode=' + mode);
  };

  const handlePlayButton = () => {
    sessionStorage.removeItem('currentSudoku');
    navigate('/game?mode=' + modes[mode]);
  };

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f6d365, #fda085)',
    },
    screen: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    button: {
      padding: '15px 30px',
      margin: '10px 0',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      width: '100%',
      maxWidth: '300px',
    },
    resumeButton: {
      backgroundColor: '#424242',
      color: '#fff',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.main}>
        <div style={styles.screen}>
          <div
            style={{ ...styles.button, backgroundColor: modeColors[mode] }}
            onClick={changeMode}
          >
            Mode: {modes[mode]}
          </div>
          <div
            style={{ ...styles.button, backgroundColor: modeColors[mode] }}
            onClick={handlePlayButton}
          >
            Play!
          </div>
          {sessionStorage.getItem('currentSudoku') && (
            <div
              style={{ ...styles.button, ...styles.resumeButton }}
              onClick={handleResumeButton}
            >
              Resume ({resumeMode})
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
