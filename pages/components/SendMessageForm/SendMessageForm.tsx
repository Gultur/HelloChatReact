import * as React from "react";
import Message from "../../interface/Message";
import User from "../../interface/User";


export interface SendMessageFormProps {
  user: User,
  onSubmit: (message: Message) => void;
}

const SendMessageForm = ({ onSubmit, user, ...props }: SendMessageFormProps) => {

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target);

    const target = event.target as typeof event.target & {
      message: { value: string };
    };

    const newMessage: Message = {
      content: target.message.value,
      sender: user,
    };

    onSubmit(newMessage);

    (event.target as HTMLFormElement).reset();
  };

  return (
      <form className='input-message' onSubmit={handleSubmit}>
        <textarea placeholder="WriteMessage" name="message" required/>
        <button type="submit">OK</button>
      </form>
  );
};

export default SendMessageForm;
