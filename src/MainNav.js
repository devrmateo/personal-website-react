import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "./App";

export default function MainNav() {
  const drawerState = useContext(context);

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
