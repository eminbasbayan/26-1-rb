const ProductInput = ({
  label,
  type,
  placeholder,
  name,
  handleChange,
  value,
}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </label>
  );
};

export default ProductInput;
