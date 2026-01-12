import { useState } from "react";
import logo from "../assets/Logomark.svg";
import menuBar from "../assets/menu-bar.svg";
import Modal from "./Modal";

import avatar from "../assets/Avatar.png";
import notificationIcon from "../assets/nav-bell-01.svg";
import settingsIcon from "../assets/settings-01.svg";

function Header() {
  const [isMenuBar, setIsMenuBar] = useState(true);

  function handleClick() {
    setIsMenuBar(!isMenuBar);
  }
  return (
    <header className="border-b-2 border-b-gray-200 ">
      <div className="pt-8 pb-4 px-4 flex items-center justify-between  md:w-11/12 md:mx-auto">
        <div className=" flex gap-4 items-center">
          <img src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold text-black">ToDo</h1>
        </div>
        <div className="md:hidden">
          {isMenuBar ? (
            <img src={menuBar} alt="menu icon" onClick={handleClick} />
          ) : (
            <Modal handleClick={handleClick} />
          )}
        </div>
        <div className="hidden md:flex w-[140px] items-center justify-between">
          <img src={settingsIcon} alt="settings" />
          <img src={notificationIcon} alt="notification" />
          <img src={avatar} alt="user" />
        </div>
      </div>
    </header>
  );
}
export default Header;
