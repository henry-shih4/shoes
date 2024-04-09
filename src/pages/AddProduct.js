import React from 'react'
import axios from 'axios'

export default function AddProduct() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [color1, setColor1] = useState('');
  const [image1, setImage1] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API request to add product
      const response = await axios.post('/api/products', {
        name,
        price,
        description
      });
      // Handle successful product addition
      console.log('Product added successfully:', response.data);
      // Reset the form and error state
      setName('');
      setDescription('');
      setPrice('');
      setError('');
      setColor1('')
      setImage1('')
    } catch (error) {
      // Handle error
      console.error('Failed to add product:', error);
      setError('Failed to add product. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );

}
