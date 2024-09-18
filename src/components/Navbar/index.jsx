import logo from "../../assets/logo.svg";
import chat from "../../assets/chat.png";
import "./index.css";

function Navbar() {
  return (
    <nav className="nav container">
      <div className="logo">
        <img className="" src={logo} alt="" />
      </div>
      <ul className="nav-item-card navbar-nav">
        <li className="nav-item item-nav item-nav1">HOME</li>
        <li className="nav-item  item-nav">ABOUT US</li>
        <li className="nav-item  item-nav">SERVICES</li>
        <li className="nav-item  item-nav">PROJECTS</li>
        <li className="nav-item  item-nav">BLOG</li>
      </ul>
      <div className="nav-chat">
        <img className="" src={chat} alt="" />
        <span>
          <p className="nav-chat-phone">Need help?</p>
          <h6 className="nav-chat_phone">(307) 555-0133</h6>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
