import React from "react";
import { auth } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Image from "next/image";
import ChatImage from "../../public/Chat.jpg";
import GoogleSignInWhite from "../../public/GoogleSignInWhite.png";
import GoogleSignInBlack from "../../public/GoogleSignInBlack.png";

function Chat() {
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <Image src={ChatImage} alt="Chat Image" className="w-100 h-100" />
      <p>Sign in with Google to message me. </p>
      <button>
        <Image
          onClick={googleSignin}
          src={GoogleSignInWhite}
          alt="GoogleSignInImage"
          type="button"
          className="w-50 h-10"
        />
      </button>
    </div>
  );
}

export default Chat;
