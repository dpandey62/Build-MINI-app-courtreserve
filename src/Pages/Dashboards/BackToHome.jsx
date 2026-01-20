import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 flex items-center gap-2 text-white"
    >
      <FaHome />
      Back To Home
    </Link>
  );
};

export default BackToHome;
