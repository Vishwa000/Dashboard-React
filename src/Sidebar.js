import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAltAverage,
  faLaughWink,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <ul
      class="navbar-nav bg-gradient-info sidebar  sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon
            style={{ height: "35px", color: "smokewhite" }}
            icon={faLaughWink}
          />
        </div>
        <div class="sidebar-brand-text mx-3 ">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to={"/portal/dashboard"}>
          <FontAwesomeIcon
            style={{ height: "18px" }}
            icon={faTachometerAltAverage}
          />
          <span> Dashboard</span>
        </Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to={"/portal/user-list"}>
          <FontAwesomeIcon style={{ height: "15px" }} icon={faUsers} />
          <span> Users</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
