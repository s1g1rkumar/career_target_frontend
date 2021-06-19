import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Dashboard.css";
import { UserContext } from "../App";
function Dashboard() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const Dboard = () => {
    if (state) {
      return (
        <>
          <div class="container mt-3 mb-3">
            <div class="d-flex flex-row align-items-center"></div>
            <div class="heading mt-2">
              {" "}
              <span>
                High-impact Marketing <br />
                Services
              </span>{" "}
            </div>
            <div class="row mt-1 g-4">
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square">
                      <img
                        src=" https://i.imgur.com/6YiLBAv.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>Email Marketing</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Email Newsletter setup</span>{" "}
                    </div>
                    <div class="icons">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Email Sequence</span>{" "}
                    </div>
                    <div class="icons">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Email Monitization</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square1">
                      <img
                        src="https://i.imgur.com/Fk9PCm4.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>Paid Advertising</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons1">
                      {" "}
                      <i class="fa fa-check-circle"></i> <span>Google Ads</span>{" "}
                    </div>
                    <div class="icons1">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Facebook Ads</span>{" "}
                    </div>
                    <div class="icons1">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Linkedin & Twitter Ads</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square2">
                      <img
                        src=" https://i.imgur.com/oDTv0SF.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>SEO</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons2">
                      {" "}
                      <i class="fa fa-check-circle"></i> <span>SEO audits</span>{" "}
                    </div>
                    <div class="icons2">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>On-Page audits</span>{" "}
                    </div>
                    <div class="icons2">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Off-Page audits</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square3">
                      <img
                        src="https://i.imgur.com/eSSe3Js.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>Content Marketing</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons3">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Article & Written Content</span>{" "}
                    </div>
                    <div class="icons3">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Video Content</span>{" "}
                    </div>
                    <div class="icons3">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Infographics</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square4">
                      <img
                        src="https://i.imgur.com/npLuTGY.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>Funnel Optimization</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons4">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Analytical Analysis</span>{" "}
                    </div>
                    <div class="icons4">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>A/B Testing</span>{" "}
                    </div>
                    <div class="icons4">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Conversion Optimization</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card p-2">
                  <div class="d-flex p-1 px-4 align-items-center">
                    {" "}
                    <span class="square5">
                      <img
                        src="https://i.imgur.com/81k0KRp.png"
                        height="20"
                        width="20"
                      />
                    </span>{" "}
                  </div>
                  <div class="email mt-1">
                    {" "}
                    <span>Social Media</span>
                    <div class="dummytext mt-1">
                      {" "}
                      <span>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry.
                      </span>{" "}
                    </div>
                  </div>
                  <div class="d-flex flex row align-items-center mr-2 mt-2">
                    <div class="icons5">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Content Creation</span>{" "}
                    </div>
                    <div class="icons5">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Community Management</span>{" "}
                    </div>
                    <div class="icons5">
                      {" "}
                      <i class="fa fa-check-circle"></i>{" "}
                      <span>Social Media Growth</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ;
        </>
      );
    } else {
      history.push("/");
      return <></>;
    }
  };
  return (
    <>
      <Dboard />
    </>
  );
}

export default Dashboard;
