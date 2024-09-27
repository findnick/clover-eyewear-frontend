import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useEffect, useState } from "react";

export default function HomeLayout() {
  const location = useLocation();
  const [homeClass, setHomeClass] = useState();

  useEffect(() => {
    if ((location.pathname = "/")) {
      setHomeClass("home");
    } else {
      setHomeClass("");
    }
  }, [location]);

  return (
    <div className={`flex flex-col ${homeClass}`}>
      <Navbar />
      <Outlet />
    </div>
  );
}
