import {useState,useEffect} from 'react';
import SignUpOrLogin from './components/signupOrLogin';
import {getAllUsers} from './utils/index';
import UpdateUser from './components/DBUpdate';
import DeleteUser from './components/DBDelete';

import './App.css';


function App() {
  const [user, setUser] = useState();
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);
  const [displayUsers, setUserDisp] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);

  const [userList, setUserList] = useState([]);

  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)   //--- myPics = data
    console.log(data)
  }

  useEffect(()=> {
    getAllUsers(setUserList);

    fetchPics();
    console.log(myPics)
  },[])

  return (
    <div className="App">
      <SignUpOrLogin setter = {setUser}/>
      <br></br>
      <div className='LoggedUser'>
        <h1>Instacrap.com</h1>
        {user ? <h1>{user} logged in</h1> : <h1>No user logged in</h1>}
      </div>
        {user 
        ?
          <div>
            <button onClick={(event) => setUser()}>Sign Out</button>
            <br></br>
            <br></br>
            <br></br>
            <div className='controls'>
              <button className='ctrlbtn' onClick={(event) => setDisplay(!displayImages)}>Toggle Images</button>
              <button className='ctrlbtn' onClick={(event) => setUserDisp(!displayUsers)}>Toggle Users</button>
              <button className='ctrlbtn' onClick={(event) => setUpdateForm(!updateForm)}>Update User</button>
              <button className='ctrlbtn' onClick={(event) => setDeleteForm(!deleteForm)}>Delete User</button>
              
            </div>
          </div>
        :
        <h2>Log in to see Dashboard!</h2>}
        <div className='hiddenSections'>
          <div className='dispImages'>
          {displayImages &&
          myPics.map((item,index) => {
            return (
              <div>
              <h2>{item.author}</h2>
              <img src={item.download_url} alt="Lorem Picsum" />
              </div>
            )
          })}
          </div>
          <div className='dispUsers'>
          {displayUsers &&
          userList.map((item,index) => {
            return (
              <div>
              <h2>{item}</h2>
              </div>
            )
          })}
          </div>
          <div className='dispUpdate'>
          {updateForm &&
            <UpdateUser setter = {setUser}/>
          }
          </div>
          <div className='dispDelete'>        
          {deleteForm &&
            <DeleteUser setter = {setUser}/>
          }
          </div>
        </div>
    </div>
  );
}

export default App;
