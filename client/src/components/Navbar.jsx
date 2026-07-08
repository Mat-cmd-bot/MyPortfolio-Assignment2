import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">My Portfolio</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
