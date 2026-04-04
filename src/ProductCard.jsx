import './ProductCard.css';

// component'in ilk parametresi sana bir obje {} verir. sen bunu 
// istediğin isimle adlandırabilirsin 
function ProductCard(props) {

    console.log(props);
    


  return (
    <div className="product-card">
      <span>{props.fullName}</span>
     {/*  <img className="product-image" src={image} alt="Image" />
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
      </div> */}
    </div>
  );
}

export default ProductCard;
