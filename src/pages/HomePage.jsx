import React from 'react';
import Toolbar from '../comps/Toolbar.jsx';
import Navbar from '../comps/Navbar.jsx';
import AccessDeniedPage from "./AccessDeniedPage.jsx";
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserDataService } from '../services/GetUserDataViaMailService.js';


const HomePage = ({access, mail}) => {
  if (!access) {
    return <AccessDeniedPage />
  }


  const [userData, setUserData] = useState({
    "id": "",
    "mail": "",
    "firstName": "",
    "lastName": "",
    "password" : ""}
  )

  const [fetch, setFetch] = useState(false)

  useEffect(() => {
    getUserDataService(mail).then((response) => {
      setUserData(response.data);
      setFetch(true)
    }).catch((error) => {
      console.error(error);
    })
  }, [])
  
  if (!fetch) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-800">
        <Navbar data={userData} />
        <Toolbar userId={userData.id}/>
    </div>

  )
}

export default HomePage;