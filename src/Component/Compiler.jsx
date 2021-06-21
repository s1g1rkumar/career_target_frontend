import React, { useState, useEffect } from "react";
import {} from "react-router-dom";

function Compiler() {
  const [lang, setLang] = useState("https://replit.com/@Deep1063/JavaPrograms");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const handleInputs = (e) => {
    setCode(e.target.value);
  };
  const setJava = (e) => {
    setLang("https://replit.com/@Deep1063/JavaPrograms");
  };
  const setPython = (e) => {
    setLang("https://replit.com/@Deep1063/PythonPrograms");
  };
  const setNode = (e) => {
    setLang("https://replit.com/@Deep1063/NodePrograms");
  };
  const setCplus = (e) => {
    setLang("https://replit.com/@Deep1063/CPrograms");
  };
  const setCsharp = (e) => {
    setLang("https://replit.com/@Deep1063/CsharpPrograms");
  };
  const setJS = (e) => {
    setLang("https://replit.com/@Deep1063/JsPrograms");
  };
  const setC = (e) => {
    setLang("https://replit.com/@Deep1063/cprograms");
  };
  const setHTML = (e) => {
    setLang("https://replit.com/@Deep1063/HTMLprograms");
  };
  const setSwift = (e) => {
    setLang("https://replit.com/@Deep1063/SwiftPrograms");
  };

  const postCode = async (e) => {
    // e.preventDefault();
    const result = await fetch("/compiler", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(code),
    }); //fetch close
    const res = await result.json();
    console.log(res, result.status);
    if (result.status === 200) {
      window.alert(res);
      setOutput(res);
    } else {
      window.alert("fail to load data");
    }
  };
  useEffect(() => {
    postCode();
  }, []);
  return (
    <>
      {/* <div className="container">
        <div className="col-12 border" id="editor">
          <form method="post">
            <textarea
              name="plainEditor"
              id="plainEditor"
              cols="155"
              rows="11"
              onChange={handleInputs}
              placeholder="write your code here"
            ></textarea>
            <button className="btn btn-info btn-lg offset-5 pl-5 pr-5">
              Run
            </button>
          </form>
        </div>
        <div className="col-12 border" id="output">
          <form>
            <textarea
              name="plainEditor"
              id="plainEditor"
              cols="155"
              rows="11"
              placeholder="your result"
              value={output}
            ></textarea>
          </form>
        </div>
      </div> */}
      {/* https://replit.com/@Deep1063/JavaPrograms#Main.java */}
      {/* https://repl.it/@zyvxn/DeveloperComEmbeddedRepl?lite=true */}
      <div className="container-fluid">
        <div className="col-sm-12 col-md-12">
          <button class="btn border" onClick={setJava}>
            <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" />
            Java
          </button>
          <button class="btn border" onClick={setPython}>
            <img src="https://img.icons8.com/color/48/000000/python.png" />
            Python
          </button>
          <button class="btn border" onClick={setJS}>
            <img src="https://img.icons8.com/color/48/000000/javascript.png" />
            JavaScript
          </button>
          <button class="btn border" onClick={setCsharp}>
            <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
            C#
          </button>
          <button class="btn border" onClick={setCplus}>
            <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
            c++
          </button>
          <button class="btn border" onClick={setC}>
            <img src="https://img.icons8.com/color/48/000000/c-programming.png" />
            C
          </button>
          <button class="btn border" onClick={setHTML}>
            <img src="https://img.icons8.com/color/48/000000/html-5.png" />
            HTML
          </button>
          <button class="btn border" onClick={setSwift}>
            <img src="https://img.icons8.com/color/48/000000/swift.png" />
            Swift
          </button>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <iframe
          height="600"
          width="1200"
          src={`${lang}?lite=true`}
          scrolling="no"
          frameborder="no"
          allowtransparency={true}
          allowfullscreen={true}
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          // style={{height="90vh",width="100vw"}}
        ></iframe>
      </div>
    </>
  );
}

export default Compiler;
