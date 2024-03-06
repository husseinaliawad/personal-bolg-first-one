import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import BlogSearchBar from "./BlogSearchBar";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo-and-search">
            <Link to="/" className="logo">
              LinkedIn
            </Link>
            <BlogSearchBar />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mynetwork">My Network</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/messaging">Messaging</Link>
            </li>
          </ul>
          <div className="profile">
            <a href="/" className="profile-link">
              <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                className="profile-picture"
              />
              <span className="profile-name">Hussein Awad</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
