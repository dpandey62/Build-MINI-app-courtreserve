import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaBullhorn,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const menuItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
     ${
       isActive
         ? "bg-[#fccb06] text-black"
         : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
     }`;

  return (
    <aside className="h-screen w-64 bg-black flex flex-col justify-between border-r border-[#222]">

      {/* 🔝 TOP */}
      <div>
        <div className="px-6 py-5 border-b border-[#222]">
          <h1 className="text-2xl font-extrabold text-[#fccb06] tracking-wide">
            CourtReserve
          </h1>
          <p className="text-xs text-gray-400 tracking-widest">
            MANAGE • PLAY • EXCEL
          </p>
        </div>

        {/* 📌 MENU */}
        <nav className="mt-6 px-3 space-y-2">

          <NavLink to="/dashboard" className={menuItemClass}>
            <FaHome />
            Overview
          </NavLink>

          <NavLink to="/dashboard/profile" className={menuItemClass}>
            <FaUser />
            My Profile
          </NavLink>

          <NavLink to="/dashboard/bookings" className={menuItemClass}>
            <FaCalendarAlt />
            Pending Bookings
          </NavLink>

          <NavLink to="/dashboard/announcements" className={menuItemClass}>
            <FaBullhorn />
            Announcements
          </NavLink>

          {/* ✅ BACK TO HOME (NO 404) */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
                       text-gray-300 hover:bg-[#1a1a1a] hover:text-white w-full"
          >
            <FaHome />
            Back To Home
          </button>

        </nav>
      </div>

      {/* 🚪 LOGOUT */}
      <div className="px-4 pb-6">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-[#fccb06]
                     text-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
        >
          <FaSignOutAlt />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
