import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let navigate = useNavigate();

  function setEmailFunction(e) {
    setEmail(e.target.value);
  }

  function setPasswordFunction(e) {
    setPassword(e.target.value);
  }

  // function alertVibes(data) {
  // //  data ?  alert('You are now logged in!') :
  //   console.log(data);
  // }

  function handleLogin(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");

    fetch("/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          window.location.href = "/my-tribes";
          alert(`Welcome ${email}  `);
          navigate("/my-tribes");
          return resp.json();
        }
        alert("Invalid credentials - try again ");
      })
      .then((data) => {
        console.log(data);
        setName(data.username);
      });
  }

  // understand the promise and error handling better - Brandon

  // fetch(url).then((response) => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   throw new Error('Something went wrong');
  // })
  // .then((responseJson) => {
  //   // Do something with the response
  // })
  // .catch((error) => {
  //   console.log(error)
  // });

  //   function handleErrors(response) {
  //     if (!response.ok) {
  //         throw Error(response.statusText);
  //     }
  //     return response;
  // }
  // fetch("http://httpstat.us/500")
  //     .then(handleErrors)
  //     .then(response => console.log("ok") )
  //     .catch(error => console.log(error) );

  return (
    <div className="LoginMaster">
      <div className="LoginHeadings">
        <h1 id="LoginTitle">Tribe</h1>
        <h2 id="LoginSubtitle">Stronger Together</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="LoginForm">
          <div id="loginbox">
            <div id="logins">
              <input
                className="logininput"
                placeholder="Email"
                value={email}
                onChange={setEmailFunction}
              ></input>
              <input
                type="password"
                className="logininput"
                placeholder="Password"
                value={password}
                onChange={setPasswordFunction}
              ></input>
              <button
                id="loginbutton"
                className="logininput"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div id="signup">
              <p className="NoAccount">Dont have an account?</p>
              <Link to="/signUp">
                {" "}
                <p id="sarea">Sign up!</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
