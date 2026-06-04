import { useRef } from 'react';

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input type="text" className="border" ref={inputEl} />
      <button onClick={onButtonClick}>Focuslan</button>
    </div>
  );
};

export default TextInputWithFocusButton;
