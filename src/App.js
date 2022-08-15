import {useState,useEffect} from 'react';
import SignUpOrLogin from './components/ZsignupOrLogin';
import {getAllUsers} from './utils';
import UpdateUser from './components/Zupdate';
import DeleteUser from './components/Zdelete';

import './App.css';

//------------------------------------------------------------------------------------------------------------
function App() {
  const [user, setUser] = useState();
  const [myPics, setMyPics] = useState([]);
  const [displayImages, setDisplay] = useState(false);
  const [displayUsers, setUserDisp] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [userList, setUserList] = useState([]);
//--------------------------------------    
  const fetchPics = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setMyPics(data)
  }
//--------------------------------------    
  useEffect(()=> {
    getAllUsers(setUserList);
    fetchPics();
  },[])
//------------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <SignUpOrLogin setter = {setUser}/>
      <br></br>
      <div className='LoggedUser'>
        <h1>Instacrap</h1>
        <br></br>
{/* ---------------------------------------------- */}
        {user ? <h2>{user} logged in</h2> : <h2>No user logged in</h2>}
      </div>
        {user 
        ?
          <div>
            <button onClick={(event) => setUser()}>Sign Out</button>
            <br></br>
            <br></br>
            <div className='controls'>
              <button className='buttontype1' onClick={(event) => setDisplay(!displayImages)}>Images</button>
              <button className='buttontype1' onClick={(event) => setUserDisp(!displayUsers)}>Display users</button>
              <button className='buttontype1' onClick={(event) => setUpdateForm(!updateForm)}>Update</button>
              <button className='buttontype1' onClick={(event) => setDeleteForm(!deleteForm)}>Delete</button>
            </div>
          </div>
        :
        <h2>Something</h2>}
        <div className='hiddenSections'>
{/* ---------------------------------------------- */}
          <div className='dispImages'>
          {displayImages &&
          myPics.map((item,index) => {
            return (
              <div>
              <h2>{item.author}</h2>
              <img src={item.download_url} alt="Lorem Picsum" />
              </div>)
          })}
          </div>
{/* ---------------------------------------------- */}
          <div className='dispUsers'>
          {displayUsers &&
          userList.map((item,index) => {
            return (
              <div>
              <h2>{item}</h2>
              </div>)
          })}
          </div>
{/* ---------------------------------------------- */}
          <div className='dispUpdate'>
          {updateForm &&
            <UpdateUser setter = {setUser}/>}
          </div>
          <div className='dispDelete'>        
          {deleteForm &&
            <DeleteUser setter = {setUser}/>}
          </div>
        </div>
    </div>
  );
//------------------------------------------------------------------------------------------------------------
}

export default App;