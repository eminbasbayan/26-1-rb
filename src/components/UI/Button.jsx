import './Button.css';

function Button({ variant, size, title, addClass, onClick, children }) {
  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ''}`;

  return (
    <button className={classNames} onClick={onClick}>
      {title ? title : children}
    </button>
  );
}

export default Button;
