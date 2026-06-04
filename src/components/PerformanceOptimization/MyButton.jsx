import React from 'react';

const MyButton = ({ children, onClick }) => {
  console.log('MyButton re-render oldu!');

  return <button onClick={onClick}>{children}</button>;
};

const MyButtonMemo = React.memo(MyButton)

export default MyButtonMemo;
