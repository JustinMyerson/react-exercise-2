import React from "react";

import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/profile">Profile</Link>
            <Link to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Admin;
