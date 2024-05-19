import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import intro_webm from "../assets/vids/introLogo_webm.webm";
import { userAuthenticateService } from '../services/AuthentificationService';
import { userRegistrationService } from '../services/RegistrationService';
import { HiOutlineBan } from "react-icons/hi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { login, register } from '../jsFunctions/LoginToRegisterAnimation';
import VideoEndingHandler from '../jsFunctions/VideoEndingHandler';


const LoginPage = ({setAccess, setUserMail}) => {

    useEffect(() => {
        VideoEndingHandler();
      }, []);
    
    /* <-------------------------------------------------------------------------------------------------------------------------------> */
    /* <-------------------------------------------------------------------------------------------------------------------------------> */
    
    const [redirect, setRedirect] = useState(false);

    const [loginData, setLoginData] = useState("");
    const [registerData, setRegisterData] = useState("");

    const [userData, setUserData] = useState({
      "mail": "",
      "password": ""
    })

    const [newUserData, setNewUserData] = useState({
      "mail": "",
      "firstName": "",
      "lastName": "",
      "password": ""
    })

    
    const authenticateSBMT = (e) => {
      // Prevent refresh ;
      e.preventDefault();

      // Service ;
      userAuthenticateService(userData).then( (response) => {
        if (response.data === "Login failed, wrong password") {
          setLoginData(response.data);
        }
        else {
          setRedirect(true);
          setUserMail(userData.mail);
        }
      }).catch((error) => {
        setLoginData("User with given mail is not found.");
      })
    }

    const registerSBMT = (e) => {
      // Prevent refresh ;
      e.preventDefault();

      // Service ;
      userRegistrationService(newUserData).then( (response) => {
        setRegisterData("User created successfuly !");
      }).catch((error) => {
        setRegisterData("User with given mail already exists.");
      })
    }

    if (redirect === true) {
      setAccess(true);
      return <Navigate to={`/${userData.mail}/home`} />;
    }
 
    return (
      <div className="NTVbackground">
        <video id="intro-vid" autoPlay muted className="NTVvideo">
          <source src={intro_webm} type="video/webm" />
          <source src="../vids/introLogo_hevc.hevc" type="video/hevc" />
        </video>
  
        <div className="NTVcontainer">
          <img id="image" src={logo} />
          <div id="form-box">
            <div className="NTVbutton-box">
              <div id="btn-color"></div>
              <button type="button" id="loginButton" onClick={login}>Log-In</button>
              <button type="button" id="registerButton" onClick={register}>Register</button>
            </div>
            <form id="logIn" onSubmit={authenticateSBMT} className="NTVinputGrp">
              <input type="email" value={userData.mail} onChange={(e) => {setUserData({ ...userData, mail: e.target.value }) }} className="NTVinputField" placeholder="E-mail" required />
              <input type="password" value={userData.password} onChange={(e) => {setUserData({ ...userData, password: e.target.value }) }} className="NTVinputField" placeholder="Password" required />
              <button type="submit" className="NTVsubmitBtn">Log In</button>
              {loginData && (
                  <div className="NTVlogStatus">
                    <HiOutlineBan className="NTVerrorIcon" />
                    <span id="NTVloginErr">
                      {loginData}
                    </span>
                  </div>
                )
              }
            </form>
            <form id="register" onSubmit={registerSBMT} className="NTVinputGrp">
              <input type="text" value={newUserData.firstName} onChange={(e) => {setNewUserData({ ...newUserData, firstName: e.target.value }) }} className="NTVinputField" placeholder="First name" required />
              <input type="text" value={newUserData.lastName} onChange={(e) => {setNewUserData({ ...newUserData, lastName: e.target.value }) }} className="NTVinputField" placeholder="Last name" required />
              <input type="email" value={newUserData.mail} onChange={(e) => {setNewUserData({ ...newUserData, mail: e.target.value }) }} className="NTVinputField" placeholder="E-mail" required />
              <input type="password" value={newUserData.password} onChange={(e) => {setNewUserData({ ...newUserData, password: e.target.value }) }} className="NTVinputField" placeholder="Password" required />
              <button type="submit" className="NTVsubmitBtn">Register</button>
              {registerData && 
                (registerData === "User created successfuly !" ? (
                  <div className="NTVlogStatus">
                    <HiOutlineBadgeCheck className='NTVsuccessIcon' />
                    <span id="NTVregisterSucc">{registerData}</span>
                  </div>
                  ) : (
                    <div className="NTVlogStatus">
                      <HiOutlineBan className='NTVerrorIcon'/>
                      <span id="NTVregisterErr">{registerData}</span>
                    </div>
                    )
                )
              }
            </form>
          </div>
        </div>
      </div>
    );
  };

export default LoginPage;