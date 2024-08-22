import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import Navbar from '../Navbar/Navbar';
import Error from '../Error';

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [errorHandler, setErrorHandler] = useState({ hasError: false, message: '' });

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    usernameoremail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) dispatch(signup(formData, navigate, setErrorHandler));
    else dispatch(signin(formData, navigate, setErrorHandler));
  };

  const togglePassword = (e) => {
    let pwdElem = document.querySelector('#password');
    let type = pwdElem.getAttribute('type') === 'password' ? 'text' : 'password';
    pwdElem.setAttribute('type', type);

    e.target.classList.toggle('fa-eye-slash');
  };

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f9fc',
    },
    screen: {
      background: '#ffffff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: '600',
      color: '#333',
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginTop: '5px',
    },
    label: {
      fontSize: '14px',
      color: '#666',
    },
    submitBtn: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
    switchMode: {
      textAlign: 'center',
      marginTop: '15px',
      cursor: 'pointer',
      color: '#007bff',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.main}>
        <div style={styles.screen}>
          <div className='center-view active'>
            {isSignUp ? (
              <div className='signupForm'>
                <form className='form' onSubmit={handleSubmit}>
                  <h1 style={styles.title}>Sign up</h1>

                  <Error errorHandler={errorHandler} />

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='username'
                      name='username'
                      type='text'
                      placeholder='Username'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='username'>
                      Username
                    </label>
                  </div>

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='email'>
                      Email
                    </label>
                  </div>

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='password'>
                      Password
                    </label>
                  </div>

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='repeatPassword'
                      name='repeatPassword'
                      type='password'
                      placeholder='Repeat Password'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='repeatPassword'>
                      Repeat Password
                    </label>
                  </div>

                  <button style={styles.submitBtn} type='submit'>
                    Sign up
                  </button>
                  <p
                    style={styles.switchMode}
                    onClick={() => setIsSignUp((prev) => !prev)}
                  >
                    Already have an account? <span>Login</span>
                  </p>
                </form>
              </div>
            ) : (
              <div className='signupForm'>
                <form className='form' onSubmit={handleSubmit}>
                  <h1 style={styles.title}>Login</h1>

                  <Error errorHandler={errorHandler} />

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='usernameoremail'
                      name='usernameoremail'
                      type='text'
                      placeholder='Username or Email'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='usernameoremail'>
                      Username or Email
                    </label>
                  </div>

                  <div style={styles.inputContainer}>
                    <input
                      style={styles.input}
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                    />
                    <label style={styles.label} htmlFor='password'>
                      Password
                    </label>
                  </div>

                  <button style={styles.submitBtn} type='submit'>
                    Login
                  </button>

                  <p
                    style={styles.switchMode}
                    onClick={() => setIsSignUp((prev) => !prev)}
                  >
                    Don't have an account? <span>Sign up</span>
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
