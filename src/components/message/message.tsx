import React from 'react'
import classes from './message.module.scss'

const Message: React.FC<{ message: string; type?: string }> = ({
  message,
  type,
}) => {
  const cls = [classes.Message];
  type && cls.push(classes[type]);
  return <div className={cls.join(" ")}>{message}</div>;
};
export default Message