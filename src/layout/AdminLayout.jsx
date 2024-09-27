import { Outlet } from "react-router-dom";
import "../assets/css/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-app">
      <Outlet />
    </div>
  );
}
