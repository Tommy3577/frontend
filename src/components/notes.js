//UPDATE
import { useState } from "react"
import { read, updateU } from "../utils"

const UpdateUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newFirstname, setNewFirstname] = useState();
  const [newLastname, setNewLastname] = useState();


  const updateHandler = async (event) => {
    event.preventDefault();
    await updateU(username, password, newUsername, newEmail, newPassword, setter)
  }

return (
  <form onSubmit ={updateHandler}>
    <br></br>
    <h3>Enter User Credentials to Update</h3>
    <label>Username:
      <input onChange = {(event) => setUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>Password:
      <input onChange = {(event) => setPassword(event.target.value)}/>
    </label>
    <br></br>
    <label>Email:
      <input onChange = {(event) => setEmail(event.target.value)}/>
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

    <br></br>
    <h3>Please only enter one of the following fields</h3>
    <label>New Username:
      <input onChange = {(event) => setNewUsername(event.target.value)}/>
    </label>
    <br></br>
    <label>New Email:
      <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
    </label>
    <br></br>
    <label>New Password:
      <input onChange = {(event) => setNewPassword(event.target.value)}/>
    </label>
    <br></br>
    <label>New First name:
      <input onChange = {(event) => setNewFirstname(event.target.value)}/>
    </label>
    <br></br>
    <label>New Last name:
      <input onChange = {(event) => setNewLastname(event.target.value)}/>
    </label>
    <br></br>
    <button type="submit">Click here to Update user!</button>
  </form>
)

}

export default UpdateUser;
//DELETE

import { useState } from "react"
import { read, deleteU } from "../utils"

const DeleteUser = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const deleteHandler = async (event) => {
    event.preventDefault();
    await deleteU(username, password, setter)
  }

return (
  <div>
    <form onSubmit ={deleteHandler}>
    <br></br>
    <h3>Enter credentials of user to delete</h3>      
      <label>Username:
        <input onChange = {(event) => setUsername(event.target.value)}/>
      </label>
      <br></br>
      <label>Password:
        <input onChange = {(event) => setPassword(event.target.value)}/>
      </label>
      <br></br>
      <button type="submit">Click here to Delete User</button>
    </form>
  </div>
)

}

exports.DeleteUser;





//UPDATE
// import { useState } from "react"
// import { updateU } from "../utils"

// //------------------------------------------------------------------------------------------------------------
// const UpdateUser = ({setter}) => {
//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [newUsername, setNewUsername] = useState();
//   const [newEmail, setNewEmail] = useState();
//   const [newPassword, setNewPassword] = useState();
// //-------------------------------------- 
//   const updateHandler = async (event) => {
//     event.preventDefault();
//     await updateU(username, email, password, newUsername, newEmail, newPassword, setter)
//   }
// //------------------------------------------------------------------------------------------------------------
// return (
//   <form onSubmit ={updateHandler}>
//     <br></br>
//     <h3>Enter User Credentials to Update</h3>
//     <label>Username:
//       <br></br>
//       <input onChange = {(event) => setUsername(event.target.value)}/>
//     </label>
//     <br></br>
//     <label>Email:
//       <br></br>
//       <input onChange = {(event) => setEmail(event.target.value)}/>
//     </label>
//     <br></br>
//     <label>Password:
//       <br></br>
//       <input onChange = {(event) => setPassword(event.target.value)}/>
//     </label>
//     <br></br>
//     <br></br>
// {/* ---------------------------------------------- */}
//     <h3>Please only enter one of the following fields</h3>
//     <label>New Username:
//       <br></br>
//       <input onChange = {(event) => setNewUsername(event.target.value)}/>
//     </label>
//     <br></br>
//     <label>New Email:
//       <br></br>
//       <input type="email" onChange = {(event) => setNewEmail(event.target.value)}/>
//     </label>
//     <br></br>
//     <label>New Password:
//       <br></br>
//       <input onChange = {(event) => setNewPassword(event.target.value)}/>
//     </label>
//     <br></br>
//     <button type="submit">Click here to Update user!</button>
//   </form>
// )
// //------------------------------------------------------------------------------------------------------------
// }

// export default UpdateUser;