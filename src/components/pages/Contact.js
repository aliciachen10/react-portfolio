import React, { useEffect, useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // TODO: Create a password variable and a function "setPassword" using useState
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //       if (userName.length < 1) {
  //         setErrorMessage('Username is invalid.');
  //   }
  // }, [userName])

  // useEffect(() => {
  //       if (!validateEmail(email)) {
  //     setErrorMessage('Email is invalid.');
  //     return;
  //   }
  // }, [email])
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
      console.log(email)
      console.log(validateEmail(inputValue))
      if (!validateEmail(inputValue)) {
        setErrorMessage('Email is invalid.');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      } else {
        setErrorMessage('')
      }
    } else if (inputType === 'userName') {
      setUserName(inputValue);
      if (!inputValue) {
        setErrorMessage('Username is invalid.');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      } else {
        setErrorMessage('')
      }
    } else {
      setPassword(inputValue)
      if (!checkMessage(inputValue)) {
        setErrorMessage(
          `Please enter a message`
        );
      } else {
        setErrorMessage('')
      }
    }

    // // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if (!userName) {
    //   setErrorMessage('Username is invalid.');
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!validateEmail(email)) {
    //   setErrorMessage('Email is invalid.');
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!checkMessage(password)) {
    //   setErrorMessage(
    //     `Please enter a message`
    //   );
    //   return;
    // }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if (!userName) {
    //   setErrorMessage('Username is invalid.');
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkMessage(password)) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setPassword('');
    setEmail('');
    alert(`Hello ${userName}`);
  };

  return (
    <div>
      <p>Hello {userName}</p>
      <form className="form">
        <input
          defaultValue={userName}
          name="userName"
          onBlur={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          defaultValue={email}
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          defaultValue={password}
          name="password"
          onBlur={handleInputChange}
          type="text"
          placeholder="message"
        />
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
