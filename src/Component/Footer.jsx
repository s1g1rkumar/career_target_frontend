import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Footer.css";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";
import validator from "validator";

function Footer() {
  const subs_mail = useRef(null);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const emailID = subs_mail.current.value;
  //   emailID === "" ? alert("please pass an email") : setShow(true);
  //   if (show) {
  //     setEmail(emailID);
  //   }
  // };
  const handleInputs = (e) => {
    setEmail(e.target.value);
  };
  console.log("eamil is ", email);
  const sendMail = async (e) => {
    const ismail = validator.isEmail(email);
    const subs = document.getElementById("subs_mail");
    if (ismail) {
      e.preventDefault();
      const res = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      }); //fetch close

      // const data = await res.json();
      // console.log(data);
      console.log(res.status);
      if (res.status === 200) {
        // dispatch({ type: "USER", payload: true });
        // window.alert("welcome : " + data.message.email);
        window.alert("subscribed sucessfully");
        subs.innerHTML = " ";
        history.push("/");
      } else {
        window.alert("unable to subscribe");
      }
    } else {
      window.alert("please enter a valid emial");
    }
  };

  return (
    <>
      <div className="container-fluid pt-5 pb-3 bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <Router> */}
              <div className="row">
                <div className="col-md-2 col-sm-12">
                  <NavLink to="/">Home</NavLink>
                </div>
                <div className="col-md-2 col-sm-12">
                  <NavLink to="/services">Services</NavLink>
                </div>
                <div className="col-md-2 col-sm-12">
                  <NavLink to="/about">About Us</NavLink>
                </div>
                <div className="col-md-3 col-sm-12">
                  <NavLink to="/contact">Contact Us</NavLink>
                </div>
              </div>
              {/* </Router> */}
            </div>

            <div className="col-md-6 col-sm-12">
              <form class="row g-3">
                <div class="col-auto">
                  <input
                    type="text"
                    class="form-control border rounded-pill"
                    placeholder="Email"
                    id="subs_mail"
                    // ref={subs_mail}
                    onChange={handleInputs}
                  />
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-danger mb-3 border rounded-pill"
                    onClick={sendMail}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="row pt-2">
          <p className="text-center">&#169;Career Target 2021</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
