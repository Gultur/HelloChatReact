import * as React from "react";
import Message from "../../interface/Message";
import User from "../../interface/User";


export interface SendMessageFormProps {
  user: User,
  onSubmit: (message: Message) => void;
}

const SendMessageForm = ({ onSubmit, user, ...props }: SendMessageFormProps) => {

  const [inputValue, setInputValue] = React.useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newMessage: Message = {
      content: inputValue,
      sender: user,
    };

    onSubmit(newMessage); // this semi-colon is required , the ( from the new line messed up

    (event.target as HTMLFormElement).reset(); // we need to reset the input
    setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
  {
    setInputValue(event.target.value)
  }

  return (
      <form className='input-message' onSubmit={handleSubmit}>
        <textarea placeholder="Ecrivez votre message" name="message" onChange={handleInputChange} required/>
        <button type="submit" disabled = {inputValue === ''}>OK</button>
      </form>
  );
};

export default SendMessageForm;
