import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const { login } = useContext(AuthContext);

  const handleSubmit = () => {
    let email = emailRef.current.value;
    let password = passRef.current.value;
    if(!email ){
      emailRef.current.className= "red"
    }
    else if (!password){
      passRef.current.className="red";
    }
    else login();
  };
  return (
    <div className="loginForm">
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        ref={emailRef}
      />
      <input type="text" placeholder="Password" name="password" ref={passRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
