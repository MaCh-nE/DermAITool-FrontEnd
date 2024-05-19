import logo from "../assets/images/logo.png";
import { useState } from "react";
import {Link} from "react-router-dom";


const Navbar = ({data}) => {
  const [pressState, setPressState] = useState(1);
  
  const pressedTheme = "shadow-lg shadow-slate-900/40 bg-black";
  const allTheme = "mt-8 cursor-pointer select-none font-mono text-white hover:bg-slate-300 hover:text-white rounded-md px-3 py-2";

  const updatePress = (button) => {
    setPressState(button);
  }

  return (
    <nav className="pb-8 bg-gradient-to-r from-cyan-900 to-green-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="-mr-80 flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link to="" className="flex flex-shrink-0 items-center mr-4">
              <img
                className="mt-2 absolute inset-0 w-100 h-24 object-cover transform transition-transform group-hover:scale-110 translate-x-10"
                src={logo}
                alt="DermAItool"
              />
            </Link>

            <div className="ml-auto flex space-x-8">
              <Link to="" className={pressState === 1 ? pressedTheme + " " + allTheme : allTheme} onClick={() => updatePress(1)}>
                Home
              </Link>
              <Link to="settings" className={pressState === 2 ? pressedTheme + " " + allTheme : allTheme} onClick={() => updatePress(2)}>
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;