import React from 'react';

function ProductPreview({ product }) {
  return (
    <div style={{ flex: 1, paddingLeft: '40px' }}>
      <h2>Live Preview</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        width: '300px'
      }}>
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            alt="Product"
            style={{ width: '100%', marginBottom: '10px' }}
          />
        )}
        <h3>{product.name || 'Product Name'}</h3>
        <p>Price: {product.price || '0'}</p>
        <p>Category: {product.category || 'No category'}</p>
        <p>Description: {product.description || 'No description'}</p>
      </div>
    </div>
  );
}

export default ProductPreview;
