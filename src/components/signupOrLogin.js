import { useState } from "react";
import { login, signUp } from "../utils";

import '../App.css';

const SignupOrLogin = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const signUpHandler = async (event) => {
    event.preventDefault();
    await signUp(username, email, password, firstname, lastname, setter)
  }

  const logInHandler = async (event) => {
    event.preventDefault();
    await login(username, password, setter)
  }

return (
  <div className="SUorLI">
    <form className="SU" onSubmit ={signUpHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Email:
        <input type="email" onChange = {(event) => setEmail(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <label>Firstname:
        <input onChange = {(event) => setFirstname(event.target.value)}/>
      </label>
      <br></br>
      <label>Lastname:
        <input onChange = {(event) => setLastname(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Signup</button>
    </form>


    <br></br>
    <form className="LI" onSubmit ={logInHandler}>
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">LogIn</button>
    </form>
  </div>
  
)

}

export default SignupOrLogin;