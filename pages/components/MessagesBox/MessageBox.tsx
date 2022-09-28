import React, { useEffect, useRef } from "react";
import Message from "../../interface/Message";
import User from "../../interface/User";
import MessageBox from "../MessageBox/MessageBox";

export interface MessagesBoxProps {
  messages: Message[],
  user: User,
}

const MessagesBox = ({ messages, user, ...props }: MessagesBoxProps) => {

    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
      scrollToBottom()
    }, [messages]);

  return (
      <div className="messages-box">
        {messages.map((message, index) =>
            <MessageBox key={index} content={message.content} type={user === message.sender ? 'sent' : 'received'}/>
        )}
        <div ref={messagesEndRef} />
      </div>
  );
};

export default MessagesBox;