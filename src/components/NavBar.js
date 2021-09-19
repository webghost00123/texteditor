import React from 'react';
// import propTypes from 'prop-types';
import { useState } from 'react';

// #d0eeef
// aliceblue;

export default function NavBar(props) {
        // document.body.style.color = "black";

  const [navBarProp, setNavBarProp] = useState({
    bgcolor: "aliceblue",
    fontColor:'black',
  });

  const [toggleValue, setToggleValue] = useState('Activate Dark Mode');
  // const handleToggle = ()=>{

    if(props.mode === true){
      setToggleValue("Activate Dark Mode")
      document.body.style.backgroundColor = "#d0eeef";
      document.body.style.color = "black";
      setNavBarProp({
        bgcolor: "aliceblue",
        fontColor:'black',
      });
    }
    else{
      setToggleValue("Activate Light Mode");
      document.body.style.backgroundColor = "rgb(74 5 64)";
      document.body.style.color = "aliceblue";
      setNavBarProp({
        bgcolor: "rgb(109 4 98)",
        fontColor: "white",
      });
    }
  // }

    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${navBarProp.theme} `}
          style={{
            backgroundColor: navBarProp.bgcolor,
            color: navBarProp.fontColor,
          }}
        >
          <div
            className="container-fluid"
            style={{ color: navBarProp.fontColor }}
          >
            <a
              className="navbar-brand"
              href="/"
              style={{ color: navBarProp.fontColor }}
            >
              {props.logo}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                    style={{ color: navBarProp.fontColor }}
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggle}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {toggleValue}
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
}


// NavBar.propTypes = {logo:propTypes.string}

// NavBar.defaultProps = {
//     log:"TextUtils"
// }