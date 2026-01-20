import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FAQPage from "./Pages/FAQPage/FAQPage";
import Support from "./Pages/Support/Support";
import CourtsPage from "./Pages/CourtsPage/CourtsPage";
import TermsOfUse from "./Pages/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
 import DashboardLayout from "./Layouts/DashboardLayout";

import PublicLayout from "./Layouts/PublicLayout";

 

 import Dashboards from "./Pages/Dashboards/Dashboard";
 import Profile from "./Pages/Dashboards/Profile";
 import Bookings from "./Pages/Dashboards/Bookings";
 import Announcements from "./Pages/Dashboards/Announcements";
import ProtectedRoute from "./Routes/PrivateRoutes";
import BookingPage from "./Pages/CourtsPage/BookingPage";
import BackToHome from "./Pages/Dashboards/BackToHome";

import "./App.css";
import "./index.css";

const App = () => {
 
  return (
    <Routes>

      {/* 🌍 PUBLIC ROUTES (Navbar + Footer SHOW) */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/courts" element={<CourtsPage />} />
         
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/backtohome" element={<BackToHome />} />
      </Route>

  {/* 🚫 BOOKING PAGE (NO NAVBAR / FOOTER) */}
      <Route path="/book/:courtId" element={<BookingPage />} />
      {/* 📊 DASHBOARD ROUTES (NO NAVBAR / FOOTER) */}
      {/* 🔐 PROTECTED DASHBOARD ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboards />} />
         <Route path="profile" element={<Profile />} />
          <Route path="bookings" element={<Bookings />} />
           <Route path="announcements" element={<Announcements />} />
      </Route>

      {/* ❌ 404 */}
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
};

export default App;
