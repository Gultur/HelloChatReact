import * as React from "react";

export interface MessageBoxProps {
  type: 'sent'|'received',
  content: string,
}

const MessageBox = ({ type, content, ...props }: MessageBoxProps) => {

  return (
    <pre className={type === 'sent'? 'self message' : 'other message'}>
        {content}
    </pre>
  );
};

export default MessageBox;