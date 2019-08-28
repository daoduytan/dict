import React, { type Node } from 'react';
import { MessageWrap } from './style';

const Message = ({ children }: { children: Node }) => {
  return <MessageWrap>{children}</MessageWrap>;
};

export default Message;
