import React from "react";
import { Link } from "react-router-dom";
import menus from "../menus2";

function Header({ handleScroll }: { handleScroll: any }) {
  return (
    <header>
      <div className="site-navigation main_menu" id="mainmenu-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src="assets/images/logo-dark.png"
                alt="Bookhunt"
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMenu"
              aria-controls="navbarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav mr-auto">
                {menus.map((menu) => (
                  <li className="nav-item " key={menu.id}>
                    <Link
                      to={menu.tomenu}
                      className="nav-link js-scroll-trigger"
                      onClick={() => {
                        handleScroll(menu.id);
                      }}
                    >
                      {menu.namemenu}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="header-right-info d-none d-lg-block">
              <Link to="#" className="btn btn-main-tp btn-small">
                <i className="fa fa-shopping-cart mr-2"></i>Get it Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
