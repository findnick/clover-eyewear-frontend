import { Button } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar z-50 shadow-md">
      <div className="logo">
        <Link to="/">
          <img src="/logo.jpg" alt="Clover Eyewear" />
        </Link>
      </div> 

      <div className="login-button">
        <Button type="text">
          <FaRegUserCircle size={20} />
        </Button>
      </div>
    </div>
  );
}
