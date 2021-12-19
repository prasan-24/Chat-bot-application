import React from "react"
import firebase from "firebase";
import { GoogleOutlined , FacebookOutline } from '@ant-design/icons';
import "firebase/app";

import { auth } from "./firebase";

const Login = () => {

    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Chat Engine Application</h2>
            </div>
            <div className="login-button google" onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} >
                <GoogleOutlined /> Sign In With Google
            </div><br /> <br />
            <div className="login-button facebook">
                <GoogleOutlined /> Sign In With facebook
            </div>
        </div>
    )

}

export default Login;