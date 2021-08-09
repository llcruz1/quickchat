import React from "react";
import firebase from "firebase/app";

function SignIn({ auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p id="guidelines-msg">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

export default SignIn;
