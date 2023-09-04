import React, { useState } from "react";

export const Footer = () => {
  const [clicks, setClicks] = useState(0);
  
  
  const year = new Date().getFullYear();
  const companyName = "Star Services";

  const handleClicks = () => {
    console.log("Click")
    setClicks(clicks+1)
  };
  return (
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="contClicked"> 
          <p className="text-body-secondary">
            &copy; {year} - {companyName} 
          </p>
          </div>
          <div className="Ruedadog"
            onClick={handleClicks}
          >

          <img className="App-logo"
              height="4"
              src="dogLogo.png"
              alt="Dog Logo"
            />
<p>- Clicks ={clicks}  </p>
          </div>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="#1" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#2" className="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#3" className="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#4" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#5" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </footer>
      
      <footer>
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button
            className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (auto)"
          >
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
              <use href="#circle-half"></use>
            </svg>
            <span className="visually-hidden" id="bd-theme-text">
              Toggle theme
            </span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="bd-theme-text"
          >
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="light"
                aria-pressed="false"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#sun-fill"></use>
                </svg>
                Light
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="dark"
                aria-pressed="false"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#moon-stars-fill"></use>
                </svg>
                Dark
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center active"
                data-bs-theme-value="auto"
                aria-pressed="true"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#circle-half"></use>
                </svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
