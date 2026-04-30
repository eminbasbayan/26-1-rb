import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Button.css';

function Button({ variant, size, title, addClass, onClick, children }) {
  const value = useContext(CartContext)
  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ''}`;

  console.log(value);
  

  return (
    <button className={classNames} onClick={onClick}>
      {title ? title : children} - {value.fullName}
    </button>
  );
}

export default Button;
