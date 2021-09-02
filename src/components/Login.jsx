import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth, googleAuthProvider, facebookAuthProvider } from "../firebase";

function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Neo Chat!</h2>
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(googleAuthProvider)}
        >
          <GoogleOutlined /> Sign in with Google
        </div>
        {/* <br /> <br />
        <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(facebookAuthProvider)}
        >
          <FacebookOutlined /> Sign in with Facebook
        </div> */}
      </div>
    </div>
  );
}

export default Login;
