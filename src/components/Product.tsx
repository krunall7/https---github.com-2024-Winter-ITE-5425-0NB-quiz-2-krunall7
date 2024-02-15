import  { useState } from 'react';

const Product = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const addProduct = async () => {
      const response = await fetch('https://product-app-74q6.onrender.com/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, price, category }),
      });
      // Handle response as needed
  };

  return (
      <div>
          <h1>All Products</h1>
          {/* Display all products here */}
          
          <h2>Add New Product</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
          <button onClick={addProduct}>Add Product</button>
      </div>
  );
};

export default Product;