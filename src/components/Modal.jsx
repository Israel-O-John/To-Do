import avatar from "../assets/Avatar.png";
import notificationIcon from "../assets/nav-bell-01.svg";
import settingsIcon from "../assets/settings-01.svg";
import closeIcon from "../assets/x-close.svg";

function Modal({ handleClick }) {
  return (
    <div className="absolute right-0 top-0 w-screen bg-slate-300/50 h-dvh ">
      <div className="flex flex-col gap-10 bg-white w-[70%] p-4  h-dvh ml-auto">
        <div className="ml-auto w-[40px]" onClick={handleClick}>
          <img src={closeIcon} alt="Close Icon" className="w-full" />
        </div>

        <div className="mr-auto ml-auto p-4 space-y-6">
          <div className="mobile-nav">
            <img src={avatar} alt="Avatar" />
            <p>Username</p>
          </div>
          <div className="mobile-nav">
            <img
              src={notificationIcon}
              alt="Notification Icon"
              className="w-[40px]"
            />
            <p>Notification</p>
          </div>
          <div className="mobile-nav">
            <img src={settingsIcon} alt="Settings Icon" className="w-[40px]" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
