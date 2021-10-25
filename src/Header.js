import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleDrawer } from "./utils";

export default function Header({ setDrawerState, drawerState }) {
  return (
    <header>
      <FontAwesomeIcon
        icon={faBars}
        className="fa fa-bars fa-2x"
        aria-label="menu"
        aria-hidden="true"
        onClick={() => {
          toggleDrawer(drawerState, setDrawerState);
        }}
      />
      <h1>
        <NavLink to="/" className="headerLink">
          Matthew Smith
        </NavLink>
      </h1>
    </header>
  );
}
