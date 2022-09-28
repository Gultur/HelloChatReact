import * as React from "react";
import Message from "../../interface/Message";
import User from "../../interface/User";
import UserChatBox from "../UserChatBox";

export interface ChatProps {
}

const Chat = ({ ...props }: ChatProps) => {


  const onSubmit = (message:Message) => {
    setMessages([...messages, message])
    console.log(messages)
}

  const [messages, setMessages] = React.useState<Message[]>([]);
  const leftUser: User = {name: 'Chat A'};
  const rightUser: User = {name: 'Chat B'};

  return (
      <div className="chat-section">
        <UserChatBox user={leftUser} messages={messages} onSubmit={onSubmit} />
        <UserChatBox user={rightUser}  messages={messages} onSubmit={onSubmit} />
      </div>
  );
};

export default Chat;