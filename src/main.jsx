// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom"; // Change this
// import router from "./Router/Routes"; // Apne router file ka sahi path dein
// import "./index.css";
// import { Toaster } from "react-hot-toast"; // Toast dikhane ke liye
// import { AuthProvider } from "./Contexts/AuthContext"; // Auth context provider

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* BrowserRouter hata kar RouterProvider lagayein */}
//     <AuthProvider> {/* <--- Ye poore router ko wrap karna chahiye */}
//       <RouterProvider router={router} />
//     </AuthProvider>
//     <Toaster /> 
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
