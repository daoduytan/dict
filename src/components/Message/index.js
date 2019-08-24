import React from 'react';
import { MessageWrap } from './style';

const Message = ({ children }) => {
  return <MessageWrap>{children}</MessageWrap>;
};

export default Message;
