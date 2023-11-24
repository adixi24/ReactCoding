import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../util/chatSlice";
import { generateRandomName, generateRandomMessage } from "../util/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i); //when we set interval it is very important to do garbage collection
  }, []);
  return (
    <>
      <div
        className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg 
    overflow-y-scroll flex flex-col-reverse"
      >
        <div>
          {
            //Dont use index as keys
            chatMessages.map((chat, index) => (
              <ChatMessage
                name={chat.name}
                message={chat.message}
                key={index}
              />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("message" + liveMessage);
          dispatch(
            addMessage({
              name: "Anjali Dixit",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
