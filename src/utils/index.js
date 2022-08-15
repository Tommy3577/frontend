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
    // console.log(data.savedUser.userName);
    console.log(data)
    setter(data.msg.username);
  }
  catch(error)
  {
    console.log(error);
  }
}

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
    console.log(data.user);
    setter(data.user);
  } 
  catch (error) {
    console.log(error);
  }
}

export const getAllUsers = async (setList) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      // headers: {"Content-Type": "application/json"},
      method: "GET",
    });
    const data = await response.json()
    setList(data.allUsers)
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

export const updateU = async (username, password, newUsername, newEmail, newPassword, setter) => {
  let params = {
    "username" : username,
    "password" : password,
    "newUsername" : newUsername,
    "newEmail" : newEmail,
    "newPassword" : newPassword
  }
  console.log(params)
  Object.keys(params).forEach(key => {
    if (params[key] === '' || params[key] === null) {
      delete params[key];
    }
  });

  console.log(params)
  try {
    console.log("updateU function called")
    const response = await fetch("http://localhost:5001/user", {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify({
        params
      })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log("updateU function ended")
  } catch (error) {
    console.log(error);
  }
}

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
    console.log("User Deleted")
  } catch (error) {
    console.log(error);
  }
}