import React from 'react';
import '../CSS/Header.css';
import {SignIn,SignUp}  from './SignInSignUp';
import logo from '../Images/career-target-logo-f.png'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#ct"><img src={logo} alt="logo" height={60} width={120}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-3  mt-3 ">
                            <li className="nav-item">
                            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#signinModal" id='sign-in' value='signin'>Sign In</button>
                            </li>
                            <li className="nav-item mx-2">
                            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#signinModal" id='sign-up' value='signup'>Sign Up</button>
                            </li>   
                        </ul>
    
                    {/* <!-- Modal --> */}
            <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                
                   
                    {/* Navs */}
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                          <button className={`nav-link active`} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign IN</button>

                          <button className={`nav-link`} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sign UP</button>
                        </div>
                    </nav>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><SignIn/></div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><SignUp/>
                          </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                      {/* model footer  */}
                  </div>
                </div>
              </div>
            </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
