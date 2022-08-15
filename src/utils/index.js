export const signUp = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "username" : username,
        "email" : email,
        "password" : password
      })
    });
    const data = await response.json();
    console.log(data)
    // setter(data.msg.username);
  }
//--------------------------------------    
  catch(error)
  {
    console.log(error);
  }
}
//------------------------------------------------------------------------------------------------------------
export const login = async (username, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "username" : username,
        "password" : password
      })
    });
    const data = await response.json();
    console.log(data)
    setter(data.user);
  } 
//--------------------------------------    
  catch (error) {
    console.log(error);
  }
}
//------------------------------------------------------------------------------------------------------------
export const getAllUsers = async (setList) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      headers: {"Content-Type": "application/json"}, // - you will need this line Tommy
      method: "GET",
    });
    const data = await response.json()
    setList(data.allUsers)
    console.log(data)
  } 
//--------------------------------------  
  catch (error) {
    console.log(error);
  }
}
//------------------------------------------------------------------------------------------------------------
export const deleteU = async (username, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      headers: {"Content-Type": "application/json"},
      method: "DELETE",
      body: JSON.stringify({
        "username" : username,
        "password" : password
      })
    });
    const data = await response.json();
    console.log(data.user);
  } 
//--------------------------------------  
  catch (error) {
    console.log(error);
  }
}
//------------------------------------------------------------------------------------------------------------
// export const updateU = async (username, password, email, newUsername, newEmail, newPassword, setter) => {
//   let updates = {
//     "username" : username,
//     "email" : email,
//     "password" : password,
//     "newUsername" : newUsername,
//     "newEmail" : newEmail,
//     "newPassword" : newPassword
//   }
//   // console.log(params)
//   Object.keys(updates).forEach(key => {
//     if (updates[key] === '' || updates[key] === null) {
//       delete updates[key];
//     }
//   });
//   // console.log(updates)
// //--------------------------------------  
//   try {
//     console.log("updateU function called")
//     const response = await fetch("http://localhost:5001/user", {
//       headers: {"Content-Type": "application/json"},
//       method: "PATCH",
//       body: JSON.stringify({
//         updates
//       })
//     });
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } 
// //--------------------------------------    
//   catch (error) {
//     console.log(error);
//   }
// }
//------------------------------------------------------------------------------------------------------------
export const updateU = async (username, password, email, newUsername, newEmail, newPassword, setter) => {
  let updates = {
    "username" : username,
    "email" : email,
    "password" : password,
    "newUsername" : newUsername,
    "newEmail" : newEmail,
    "newPassword" : newPassword
  }
  // console.log(params)
  Object.keys(updates).forEach(key => {
    if (updates[key] === '' || updates[key] === undefined || updates[key] === null) {
      delete updates[key];
    }
  });
  console.log(updates)
//--------------------------------------  
  try {
    console.log("updateU function called")
    const response = await fetch("http://localhost:5001/user", {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify({
        updates
      })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  } 
//--------------------------------------    
  catch (error) {
    console.log(error);
  }
}