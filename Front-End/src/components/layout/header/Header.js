import React from "react";
import { Link } from "react-router-dom";
import "./Header.Scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header-h1">Y4IA</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/hh">
              <svg
                aria-label="Profile"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <g>
                  <path d="M24 27c-7.1 0-12.9-5.8-12.9-12.9s5.8-13 12.9-13c7.1 0 12.9 5.8 12.9 12.9S31.1 27 24 27zm0-22.9c-5.5 0-9.9 4.5-9.9 9.9s4.4 10 9.9 10 9.9-4.5 9.9-9.9-4.4-10-9.9-10zM44 46.9c-.8 0-1.5-.7-1.5-1.5V42c0-5-4-9-9-9h-19c-5 0-9 4-9 9v3.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V42c0-6.6 5.4-12 12-12h19c6.6 0 12 5.4 12 12v3.4c0 .8-.7 1.5-1.5 1.5z"></path>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
