import React from 'react';

const MyParagraph = ({ children }) => {
  console.log('MyParagraph re-render oldu!');
  return <p>{children}</p>;
};

const MyParagraphMemo = React.memo(MyParagraph);

export default MyParagraphMemo;
