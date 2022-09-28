import * as React from "react";

export interface MessageBoxProps {
  type: 'sent'|'received',
  content: string,
}

const MessageBox = ({ type, content, ...props }: MessageBoxProps) => {

  return (
    <p className={type === 'sent'? 'self message' : 'other message'}>
        <pre>{content}</pre>
    </p>
  );
};

export default MessageBox;