import React, { createContext, useReducer } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Component/Home";
import Devtypes from "./Component/DevelopmentTypes";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Webdev from "./Component/Webdev";
import Frontend from "./Component/FrontendPanel";
import Dashboard from "./Component/Dashboard";
import Admin from "./Component/Admin";
import { SignIn, SignUp } from "./Component/SignInSignUp";
import { Profile } from "./Component/Profile";
import EditProfile from "./Component/EditProfile";
import Logout from "./Component/Logout";
import Quiz from "./Component/Quiz";
import Compiler from "./Component/Compiler";
import WebDevelopment from './Component/WebDevelopment.jsx'
import DesktopDevelopment from './Component/DesktopDevelopment.jsx';
import MobileDevelopment from './Component/MobileDevelopment.jsx'
import { initialState, reducer } from "../src/Reducer/UseReducer";
import QuizePageHtml from './Component/QuizPages/QuizePageHtml.jsx'
import QuizePageCss from  './Component/QuizPages/QuizePageCss.jsx'
import QuizePageJavascript from  './Component/QuizPages/QuizePageJavascript'
import QuizeAngular from  './Component/QuizPages/QuizeAngularjs'
import QuizeAjax from  './Component/QuizPages/QuizeAjax'
import QuizeSass from  './Component/QuizPages/QuizeSass'
import QuizeJson from  './Component/QuizPages/QuizeJson'
import QuizeBootstrap from './Component/QuizPages/QuizeBootstrap'
import QuizeCSharp  from './Component/QuizPages/QuizeCsharp'
import QuizeMongo from './Component/QuizPages/QuizeMongo';
import QuizeMySql from './Component/QuizPages/QuizeMySql';
import QuizeSql from './Component/QuizPages/QuizeSql';
import QuizePython from './Component/QuizPages/QuizePython';
import QuizeExpress from './Component/QuizPages/QuizeExpress';
import QuizeNode from './Component/QuizPages/QuizeNode';
import QuizeJava from './Component/QuizPages/QuizeJava';
import QuizeCplus from './Component/QuizPages/QuizeCplus'






export const UserContext = createContext();
// export const AdminContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [astate, adispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home/> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact /> */}
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/devtypes">
            <Devtypes />
          </Route>
          <Route exact path="/webdev">
            <Webdev />
          </Route>
          <Route exact path="/frontend">
            <Frontend />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/editProfile">
            <EditProfile />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/html">
            <QuizePageHtml />
          </Route>
          <Route exact path="/css">
            <QuizePageCss />
          </Route><Route exact path="/javascript">
            <QuizePageJavascript />
          </Route>
          <Route exact path="/ajax">
            <QuizeAjax />
          </Route>
          <Route exact path="/json">
            <QuizeJson />
          </Route>
          <Route exact path="/angular">
            <QuizeAngular />
          </Route>
          <Route exact path="/sass">
            <QuizeSass />
          </Route>
           <Route exact path="/bootsrap">
            <QuizeBootstrap />
          </Route>  <Route exact path="/csharp">
            <QuizeCSharp />
          </Route>  <Route exact path="/java">
            <QuizeJava />
          </Route>  <Route exact path="/mongo">
            <QuizeMongo />
          </Route>  <Route exact path="/mysql">
            <QuizeMySql />
          </Route>  <Route exact path="/node">
            <QuizeNode />
          </Route>  <Route exact path="/python">
            <QuizePython />
          </Route>  <Route exact path="/express">
            <QuizeExpress />
          </Route>  <Route exact path="/sql">
            <QuizeSql />
            </Route>
             <Route exact path="/cplus">
            <QuizeCplus />
            </Route>
          <Route exact path="/compiler">
            <Compiler />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route path="/webdevelopment">
              <WebDevelopment />
            </Route>
            <Route path="/desktopdevelopment">
              <DesktopDevelopment />
            </Route>
            <Route path="/mobiledevelopment">
              <MobileDevelopment />
            </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </UserContext.Provider>
      {/* <AdminContext.Provider value={{ astate, adispatch }}>
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </AdminContext.Provider> */}
    </div>
  );
};

export default App;
