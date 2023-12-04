import React, { useState } from "react";
import { auth, db } from "../app/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
function ChatSpace() {
  const [message, setMessage] = useState("");

  const signOut = () => {
    auth.signOut();
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter Valid Message");
      return;
    }
    const { uid, displayName, photoURL, email } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      Useremail: email,
      createdAt: serverTimestamp(),
      uid,
    }),
      alert("message sent");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={(event) => sendMessage(event)}>
        <label htmlFor="messageInput" className="py-2 dark:text-white ">
          Enter Message
        </label>
        <div>
          <textarea
            id="messageInput"
            name="messageInput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type here..."
            className="block w-80 h-80 text-sm text-gray-900  bg-gray-50 rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex flex-row justify-start gap-2 mt-2">
          <button
            type="submit"
            className="px-2 py-2 bg-gradient-to-r  from-yellow-600 to-amber-400 rounded-xl text-white"
          >
            Send
          </button>
          <button
            onClick={signOut}
            className="px-2 py-2 bg-gradient-to-r from-red-600 to-pink-400 rounded-xl text-white"
          >
            SignOut
          </button>
        </div>
      </form>
    </>
  );
}

export default ChatSpace;
