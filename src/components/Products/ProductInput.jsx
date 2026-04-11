const ProductInput = ({ label, type, placeholder, name, handleChange }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </label>
  );
};

export default ProductInput;
