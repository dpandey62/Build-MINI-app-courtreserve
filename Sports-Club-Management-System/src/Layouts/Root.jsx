import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Pages/Loading/Loader";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
};

export default Root;
