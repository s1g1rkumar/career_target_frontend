import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import "../CSS/Roadmap.css";
import { UserContext } from "../App";
function Roadmap() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const Render = () => {
    if (state) {
      return (
        <>
          <div
            className="container-fluid bg-light"
            style={{ backgroundColor: "" }}
          >
            <div className="container pt-5 pb-5" style={{}}>
              <div className="row">
                <div className="col-md-6 col-sm-12 offset-md-3 text-center">
                  <h1 className="">Developement Roadmaps</h1>
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
                  to="/rfront"
                  className="col-md-3 col-sm-6 border  rounded shadow btn"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Frontend</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern frontend developer
                    in 2021
                  </p>
                </NavLink>
                <NavLink
                  to="/rbackend"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Backend</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern frontend developer
                    in 2021
                  </p>
                </NavLink>
                <NavLink
                  to="/rreactjs"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">React JS</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern backend developer in
                    2021
                  </p>
                </NavLink>
              </div>
              <div className="row mt-5 pb-5">
                <NavLink
                  to="/rjava"
                  className="col-md-3 col-sm-6 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Java</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern Java developer in
                    2021
                  </p>
                </NavLink>
                <NavLink
                  to="/rdotnet"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">.Net</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern .Net developer in
                    2021
                  </p>
                </NavLink>
                <NavLink
                  to="/randroid"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Android</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern Android developer in
                    2021
                  </p>
                </NavLink>
              </div>
              <div className="row mt-5 pb-5">
                <NavLink
                  to="/rgame"
                  className="col-md-3 col-sm-6 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Game</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern Game developer in
                    2021
                  </p>
                </NavLink>
                <NavLink
                  to="/rios"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">iOS</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern iOS developer in
                    2021
                  </p>
                </NavLink>
                <NavLink
                  to="/rnode"
                  className="col-md-3 col-sm-6 offset-md-1 border  rounded shadow"
                  style={{
                    height: "200px",
                    backgroundImage:
                      "linear-gradient(to bottom right, #4880EC, #019CAD)",
                  }}
                >
                  <h2 className="text-white text-center mt-3">Node JS</h2>
                  <p className="text-white text-center mt-3">
                    Step by step guide to becoming a modern Node developer in
                    2021
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      history.push("/");
      return <></>;
    }
  };
  return (
    <>
      <Render />
    </>
  );
}

export default Roadmap;
