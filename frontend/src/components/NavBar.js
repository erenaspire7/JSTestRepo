import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar my-nav is-fixed-top">
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            <img
              src="https://res.cloudinary.com/erenaspire7/image/upload/v1618382088/Project/logo512_bh9s9v.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
