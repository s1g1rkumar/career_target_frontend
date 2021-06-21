import React, { useContext, useEffect } from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";
import "../CSS/Header.css";
import { SignIn, SignUp } from "./SignInSignUp";
import Button from "@material-ui/core/Button";
import logo from "../Images/career-target-logo-f.png";
import { UserContext } from "../App";
function Header() {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li class="nav-item">
            <NavLink class="nav-link" to="/dashboard">
              <div type="button" class="btn" id="dashboard" value="dashboard">
                Home
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/roadmap">
              <div type="button" class="btn" id="profile" value="profile">
                Roadmap
              </div>
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink class="nav-link" to="/quiz">
              <div type="button" class="btn" id="quiz" value="quiz">
                Quiz
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/compiler">
              <div type="button" class="btn" id="compiler" value="compiler">
                Compiler
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/Profile">
              <div type="button" class="btn" id="profile" value="profile">
                Profile
              </div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="navlink" to="/logout">
              <div type="button" id="Log-out" value="logout">
                <Button variant="contained" color="secondary" className="btn">
                  Logout
                </Button>
              </div>
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item" style={{ border: "none" }}>
            <NavLink className="navlink" to="/login" style={{ border: "none" }}>
              <div type="button" id="sign-in" value="signin">
                <Button variant="contained" color="secondary" className="btn">
                  Sign In
                </Button>
              </div>
            </NavLink>
          </li>
        </>
      );
    }
  };

  useEffect(() => {
    RenderMenu();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" height={60} width={120} />
          </NavLink>

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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-3  mt-3 ">
              {/* <li className="nav-item">
                <NavLink class="nav-link" to="/login">
                  <div
                    type="button"
                    class="btn btn-outline-dark rounded-pill"
                    id="sign-in"
                    value="signin"
                  >
                    Sign In
                  </div>
                </NavLink>
              </li> */}
              <RenderMenu />
              {/* <li class="nav-item">
                <NavLink class="nav-link" to="/Profile">
                  <div type="button" class="btn" id="profile" value="profile">
                    Profile
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/quiz">
                  <div type="button" class="btn" id="quiz" value="quiz">
                    Quiz
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/compiler">
                  <div type="button" class="btn" id="compiler" value="compiler">
                    Compiler
                  </div>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/logout">
                  <div
                    type="button"
                    class="btn btn-outline-dark rounded-pill"
                    id="Log-out"
                    value="logout"
                  >
                    Logout
                  </div>
                </NavLink>
              </li> */}
            </ul>

            {/* <div
              className="modal fade"
              id="signupModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-light">
                    <div>
                      <img src={logo} alt="logo" height="100px" width="400px" />
                    </div>
          

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                   
                    <SignUp />
                  </div>
                  <div className="modal-footer bg-light">
                   
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
