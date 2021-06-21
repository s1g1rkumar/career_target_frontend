import React from "react";
import { NavLink } from "react-router-dom";
// import "../CSS/Roadmap.css";
function Roadmap() {
  return (
    <>
      <div className="container-fluid bg-light" style={{ backgroundColor: "" }}>
        <div className="container pt-5 pb-5" style={{}}>
          <div className="row">
            <div className="col-6 offset-3 text-center">
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
              to="/frontend"
              className="col-3 border  rounded shadow btn"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">Frontend</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern frontend developer in
                2021
              </p>
            </NavLink>
            <NavLink
              to="/backend"
              className="col-3 offset-1 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">Backend</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern frontend developer in
                2021
              </p>
            </NavLink>
            <NavLink
              to="/reactjs"
              className="col-3 offset-1 border  rounded shadow"
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
              to="/java"
              className="col-3 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">Java</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern Java developer in 2021
              </p>
            </NavLink>
            <NavLink
              to="/dotnet"
              className="col-3 offset-1 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">.Net</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern .Net developer in 2021
              </p>
            </NavLink>
            <NavLink
              to="/android"
              className="col-3 offset-1 border  rounded shadow"
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
              to="/game"
              className="col-3 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">Game</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern Game developer in 2021
              </p>
            </NavLink>
            <NavLink
              to="/ios"
              className="col-3 offset-1 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">iOS</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern iOS developer in 2021
              </p>
            </NavLink>
            <NavLink
              to="/node"
              className="col-3 offset-1 border  rounded shadow"
              style={{
                height: "200px",
                backgroundImage:
                  "linear-gradient(to bottom right, #4880EC, #019CAD)",
              }}
            >
              <h2 className="text-white text-center mt-3">Node JS</h2>
              <p className="text-white text-center mt-3">
                Step by step guide to becoming a modern Node developer in 2021
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
