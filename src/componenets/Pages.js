//npm install react-router@next react-router-dom@next
//This one is responsible for all the pages in our app

import React from "react";

//this is for navigation
//link for navigation
//useLocation to get path data
//Outlet to render sub components
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>

      <div className="nav_section">
        <h3>Navigations</h3>
        <Link to="/" style={{ padding: "5px" }}>
          Main
        </Link>
        <Link to="/colors" style={{ padding: "5px" }}>
          Colors
        </Link>
      </div>
    </div>
  );
}

export function Colors() {
  return (
    <div>
      <h1>[Company Colors]</h1>
      <Outlet />

      <div className="nav_section">
        <h3>Navigations</h3>
        <Link to="/" style={{ padding: "5px" }}>
          Main
        </Link>
        <Link to="/home" style={{ padding: "5px" }}>
          Home
        </Link>
        <Link to="blue" style={{ padding: "5px" }}>
          blue
        </Link>
        <Link to="red" style={{ padding: "5px" }}>
          red
        </Link>
      </div>
    </div>
  );
}

export function Red() {
  return (
    <div>
      <h1>[Red Color Page Content]</h1>
    </div>
  );
}

export function Blue() {
  return (
    <div>
      <h1>[Blue Color Page Content]</h1>
    </div>
  );
}

export function NotFound() {
  const location = useLocation();

  return (
    <div>
      <h1>[Page Not found!] {location.pathname}</h1>

      <div className="nav_section">
        <h3>Navigations</h3>
        <Link to="/" style={{ padding: "5px" }}>
          Main
        </Link>
        <Link to="colors" style={{ padding: "5px" }}>
          Colors
        </Link>
      </div>
    </div>
  );
}
