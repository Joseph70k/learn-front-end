import React from 'react';

function ProductForm({ product, setProduct }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({
        ...product,
        image: file,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div style={{ flex: 1 }}>
      <h2>Product Registration</h2>

      <label>Product Name:</label><br />
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      /><br />

      <label>Price:</label><br />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      /><br />

      <label>Category:</label><br />
      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      /><br />

      <label>Description:</label><br />
      <textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        style={{ marginBottom: '10px', width: '100%' }}
      /><br />

      <label>Image:</label><br />
      <input type="file" accept="image/*" onChange={handleImageChange} /><br />

      {product.imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => {
            setProduct({ ...product, image: null, imageUrl: '' });
          }}>
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductForm;
