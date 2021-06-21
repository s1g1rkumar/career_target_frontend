import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import "../CSS/Dashboard.css";
import { UserContext } from "../App";
function Dashboard() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const Dboard = () => {
    if (state) {
      return (
        <>
          <div className="container-fluid" style={{ backgroundColor: "#FFF" }}>
            <div className="container pt-5 pb-3" style={{}}>
              <div className="row">
                <div className="col-md-7 col-sm-12 offset-md-3 text-center">
                  <h1 className="">Grow with us.</h1>
                  <p className="">
                    Step by step guides and paths to learn different tools or
                    technologies
                  </p>
                </div>
              </div>
            </div>
            <div className="container pt-5">
              <div className="row">
                <NavLink
                  to="/webdevelopment"
                  className="col-md-3 col-sm-6 border  rounded  btn"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Tutorials</h2>
                  <p className="text-white  text-center mt-3">
                    A platform to learn new technologies in 2021
                  </p>
                </NavLink>
                <NavLink
                  to="/roadmap"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded "
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Roadmap</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern software developer
                    in 2021
                  </p>
                </NavLink>
                <NavLink
                  to="/quiz"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded "
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right,  #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Quiz</h2>
                  <p className="text-white text-center mt-3">
                    Attend online quiz to inhance your skills.
                  </p>
                </NavLink>
              </div>
              <div className="row mt-5 pb-5">
                <NavLink
                  to="/compiler"
                  className="col-md-3 col-sm-6 border  rounded "
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">IDE</h2>
                  <p className="text-white text-center mt-3">
                    Online IDE to code and learn without any sofware
                    configuration.
                  </p>
                </NavLink>
                <NavLink
                  to="/rdotnet"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded "
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right,  #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">...</h2>
                  <p className="text-white text-center mt-3">
                    ..................................
                  </p>
                </NavLink>
                <NavLink
                  to="/randroid"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right,  #40E0D0, #6495ED)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">....</h2>
                  <p className="text-white text-center mt-3">
                    ...................................
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="mt-5">
                    Gain and share your knowledge & skills with a variety of
                    learning platforms offered by Career Target.
                  </p>
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
