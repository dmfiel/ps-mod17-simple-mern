import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-center items-center p-5">
      <Link to="/">
        <img src="/vine-logo.png" alt="vine logo" className="h-20" />
      </Link>

      <div className="space-x-4 ml-auto text-lg font-semibold">
        <NavLink to="/" className={({ isActive }) => isActive && "underline"}>
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => isActive && "underline"}
        >
          Register
        </NavLink>
        <NavLink
          to="/signin"
          className={({ isActive }) => isActive && "underline"}
        >
          {" "}
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
