import './Button.css';

function Button({ variant, size, title, addClass, children }) {
  console.log(children);

  const classNames = `btn btn-${variant} btn-${size} ${addClass ? addClass : ''}`;

  return <button className={classNames}>{title ? title : children}</button>;
}

export default Button;
