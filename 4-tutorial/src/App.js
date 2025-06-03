import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductPreview from './ProductPreview';

function App() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null,
    imageUrl: ''
  });

  return (
    <div style={{ display: 'flex', padding: '40px' }}>
      <ProductForm product={product} setProduct={setProduct} />
      <ProductPreview product={product} />
    </div>
  );
}

export default App;
