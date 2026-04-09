import './Button.css';

function Button({ variant, size, title, addClass }) {
  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ""}`;


  return <button className={classNames}>{title}</button>;
}

export default Button;
