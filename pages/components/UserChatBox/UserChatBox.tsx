import * as React from "react";
import Message from "../../interface/Message";
import User from "../../interface/User";
import MessagesBox from "../MessagesBox";
import SendMessageForm from "../SendMessageForm";

export interface UserChatBoxProps {
  user: User,
  messages: Message[],
  onSubmit: (message: Message) => void;
}

const UserChatBox = ({ user, messages, onSubmit, ...props }: UserChatBoxProps) => {

  return (
      <div className="chat-box">
        <div className="chat-header">{user.name}</div>
        <MessagesBox messages={messages} user={user} />
        <SendMessageForm onSubmit={onSubmit} user={user} />
      </div>
  );
};

export default UserChatBox;