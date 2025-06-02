import React, { useState } from 'react';

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
    <div>
      <h1>Product Form Preview App</h1>
    </div>
  );
}

export default App;