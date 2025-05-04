import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <Link to="/" className="text-lg">Create Menu</Link>
    <Link to="/menu" className="text-lg">View Menu</Link>
  </nav>
);

export default Navbar;
