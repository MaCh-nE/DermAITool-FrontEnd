// @ts-ignore
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import { useState } from "react";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ConfirmEditComponent from "./comps/ConfirmEditComponent.jsx";
import ImageEditingInterface from "./comps/ImageEditingInterface.jsx";


const App = () => {

  const [access, setAccess] = useState(false);
  const [userMail, setUserMail] = useState("");

  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage setAccess={setAccess} setUserMail={setUserMail}/>} />
        <Route path="/:mail/home" element={<HomePage access={access} mail={userMail}/>} />
        <Route path="/:mail/home/settings" element={<ImageEditingInterface/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};


export default App;
