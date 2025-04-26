import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setEmail,
  setPassword,
} from '../../slice/slice.jsx';

const RegistrationForm =()=>{
  const { name, email, password } = useSelector(state => state.registration);
  const dispatch = useDispatch();


  const handleNameChange=(e)=>{
    dispatch(setName(e.target.value))
  }
  const handleEmailChange=(e)=>{
    dispatch(setEmail(e.target.value))
  }
  const handlePasswordChange=(e)=>{
    dispatch(setPassword(e.target.value))
    
  }
 

  return (
    <div>
      <h2>Register</h2>
    
      <form >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
      <div>
        <h1>user Details </h1>
     
        <h2 >
            Hello {name}
          </h2>
         
        <h2 >
            email Id: {email}
          </h2>
        
      </div>
    </div>
  
  );
}

export default RegistrationForm;