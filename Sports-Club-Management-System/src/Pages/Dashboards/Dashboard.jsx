import Navbar from "./Navbar";



const Dashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    
      
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: 30 }}>
          <h2>Dashboard Overview</h2>

          <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
            <Card title="Total Users" value="56" />
            <Card title="Total Bookings" value="0" />
            <Card title="Payments" value="$0" />
            <Card title="Ratings" value="4.8/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div style={{
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    width: 200,
    boxShadow: "0 0 10px rgba(0,0,0,.1)"
  }}>
    <p>{title}</p>
    <h2>{value}</h2>
  </div>
);

export default Dashboard;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: 100 }}>
//       <h1>Dashboard 🎉</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
