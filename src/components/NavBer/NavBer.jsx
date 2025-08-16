import { Link } from "react-router";

const NavBer = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Visa Service Portal</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/services" className="hover:text-gray-300">
          Visa Services
        </Link>
        <Link to="/application" className="hover:text-gray-300">
          My Application
        </Link>
      </div>
    </nav>
  );
};

export default NavBer;
