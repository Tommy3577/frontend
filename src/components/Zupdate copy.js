import { useState } from "react"
import { updateU } from "../utils"

//------------------------------------------------------------------------------------------------------------
const UpdateUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
//-------------------------------------- 
  const updateHandler = async (event) => {
    event.preventDefault();
    await updateU(username, email, password, newUsername, newEmail, newPassword, setter)
  }
//------------------------------------------------------------------------------------------------------------
return (
  <form onSubmit ={updateHandler}>
    <br></br>
    <h3>Enter User Credentials to Update</h3>
    <label>Username:
      <br></br>
      <input onChange = {(event) => setUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>Email:
      <br></br>
      <input onChange = {(event) => setEmail(event.target.value)}/>
    </label>
    <br></br>
    <label>Password:
      <br></br>
      <input onChange = {(event) => setPassword(event.target.value)}/>
    </label>
    <br></br>
    <br></br>
{/* ---------------------------------------------- */}
    <h3>Please only enter one of the following fields</h3>
    <label>New Username:
      <br></br>
      <input onChange = {(event) => setNewUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>New Email:
      <br></br>
      <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
    </label>
    <br></br>
    <label>New Password:
      <br></br>
      <input onChange = {(event) => setNewPassword(event.target.value)}/>
    </label>
    <br></br>
    <button type="submit">Click here to Update user!</button>
  </form>
)
//------------------------------------------------------------------------------------------------------------
}

export default UpdateUser;