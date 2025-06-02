import React from 'react';

function ProductForm({ product, setProduct }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <h2>Product Registration</h2>

      <label>Product Name:</label><br />
      <input type="text" name="name" value={product.name} onChange={handleChange} /><br />

      <label>Price:</label><br />
      <input type="number" name="price" value={product.price} onChange={handleChange} /><br />

      <label>Category:</label><br />
      <input type="text" name="category" value={product.category} onChange={handleChange} /><br />

      <label>Description:</label><br />
      <textarea name="description" value={product.description} onChange={handleChange} /><br />
    </div>
  );
}

export default ProductForm;
