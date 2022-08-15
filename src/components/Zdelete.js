import { useState } from "react"
import { deleteU } from "../utils"

const DeleteUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
//--------------------------------------   
  const deleteHandler = async (event) => {
    event.preventDefault();
    await deleteU(username, password, setter)
  }

  // delete account?
//------------------------------------------------------------------------------------------------------------
return (
  <div>
    <form onSubmit ={deleteHandler}>
    <br></br>
    <h3>Enter credentials of user to delete</h3>      
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
      <button type="submit">Click here to Delete User</button>
    </form>
  </div>
)
//------------------------------------------------------------------------------------------------------------
}
export default DeleteUser;