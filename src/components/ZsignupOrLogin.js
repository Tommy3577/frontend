import { useState } from "react";
import { login, signUp } from "../utils";

import '../App.css';

const SignupOrLogin = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
//-------------------------------------- 
  const signUpHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, setter)
  }
//-------------------------------------- 
  const logInHandler = async (event) => {
    event.preventDefault();
    await login(username, password, setter)
    
    // const ControlledForm = (event) => {
    //   const [formValue, setformValue] = React.useState({
    //     username: '',
    //     password: ''
    //   });
    
    //   // reset input values
    //   const handleClick = (event) => {
    //     setformValue({
    //       username: '',
    //       password: ''
    //     })
    //   };

  }
//------------------------------------------------------------------------------------------------------------
return (
  <div className="SUorLI">
    <form className="SU" onSubmit ={signUpHandler}>
      <h4>New Users Sign Up here</h4>
      <label>Username:
        <br></br>
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Email:
        <br></br>
        <input type="email" onChange = {(event) => setEmail(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <br></br>
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Sign Up</button>
    </form>
    <br></br>

    <h1>Instacrap logo</h1>
{/* ---------------------------------------------- */}
    <form className="LI" onSubmit ={logInHandler}>
      <h4>Existing Users Log In here</h4>
      <label>Username:
        <br></br>
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <br></br>
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <button type="submit">Log in</button>
      <br></br>
      <br></br>
    </form>
  </div>
  
)
//------------------------------------------------------------------------------------------------------------
}

export default SignupOrLogin;