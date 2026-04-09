import { Fragment, useState } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';

function App() {
    const [productTitle, setProductTitle] = useState("Title");
  return (
    <Fragment>
      <h1>App Component</h1>
      {/* <Counter /> */}
      <button onClick={()=> setProductTitle("Kırmızı Ayakkabı")}>Başlığı Değiştir</button> {/* Kırmızı Ayakkabı */}
      <Products productTitle={productTitle} setProductTitle={setProductTitle} />
   
    </Fragment>
  );
}

export default App;
