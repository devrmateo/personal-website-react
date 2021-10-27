import { NavLink } from "react-router-dom";
export default function MainNav({ drawerState }) {
  return (
    <section className="mainNavPanel">
      <nav className={drawerState}>
        <NavLink to="/" className="mainNavLink">
          Home
        </NavLink>
        <NavLink to="/resume" className="mainNavLink">
          Resume
        </NavLink>
        <NavLink to="/story" className="mainNavLink">
          My Story
        </NavLink>
      </nav>
    </section>
  );
}
