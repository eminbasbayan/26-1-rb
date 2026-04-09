import { Fragment, useState } from 'react';
import Products from './components/Products/Products';
import Counter from './components/Counter';
import Button from './components/UI/Button';

function App() {
  return (
    <Fragment>
      <h1>App Component</h1>
      <Button title="1. Component" variant="primary" /> {/* 1. Component */}
      <Button title="2. Component" variant="secondary" /> {/* 2. Component */}
      <Button title="3. Component" variant="success" /> {/* 3. Component */}
      <Button title="Sil" variant="danger" size="sm" />
      <Button title="Ürün Ekle" variant="primary" size="lg" addClass="hidden" />
      <Button variant="secondary" size="lg">
        <b>Deneme Button</b>
      </Button>
      {/* <Counter /> */}
      {/*    <button onClick={()=> setProductTitle("Kırmızı Ayakkabı")}>Başlığı Değiştir</button> {/* Kırmızı Ayakkabı */}
      <Products />
    </Fragment>
  );
}

export default App;
