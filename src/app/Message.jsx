import React from "react";
import { auth } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

function Message({ message }) {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Image src={message.avatar} alt="user avatar" width={20} height={20} />
      <div>
        <p> {message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
