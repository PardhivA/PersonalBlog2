import React from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import Message from "./Message";
import ChatSpace from "./ChatSpace";
import { useState } from "react";
import { useEffect, useRef } from "react";
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const _query = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(_query, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <>
      <div>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <ChatSpace scroll={scroll} />
    </>
  );
}

export default ChatBox;
