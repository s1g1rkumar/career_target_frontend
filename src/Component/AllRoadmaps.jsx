import React from "react";
import frontend from "../Images/roadmap/frontend.png";
import backend from "../Images/roadmap/backend.png";
import reactjs from "../Images/roadmap/react.png";
import java from "../Images/roadmap/java.png";
import dotnet from "../Images/roadmap/dotnet.png";
import android from "../Images/roadmap/android.png";
import game1 from "../Images/roadmap/game development 1.png";
import game2 from "../Images/roadmap/game development 2.png";
import ios from "../Images/roadmap/ios.png";
import node from "../Images/roadmap/node.png";
const Frontend = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={frontend} alt="frontend" />
      </div>
    </>
  );
};

const Backend = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={backend} alt="backend" />
      </div>
    </>
  );
};

const ReactJS = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={reactjs} alt="reactjs" width="1200px" />
      </div>
    </>
  );
};

const Java = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={java} alt="java" width="1200px" />
      </div>
    </>
  );
};

const Dotnet = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={dotnet} alt="dotnet" width="1200px" />
      </div>
    </>
  );
};

const Android = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={android} alt="android" />
      </div>
    </>
  );
};
const Game = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={game1} alt="game1" width="1200px" />
        <hr />
        <img src={game2} alt="game2" className="mt-5" width="1200px" />
      </div>
    </>
  );
};

const Ios = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={ios} alt="ios" />
      </div>
    </>
  );
};

const Node = () => {
  return (
    <>
      <div className="container-fluid mt-5 pb-5 pl-5 pr-5">
        <img src={node} alt="node" width="1200px" />
      </div>
    </>
  );
};
export { Frontend, Backend, ReactJS, Java, Dotnet, Android, Game, Ios, Node };
