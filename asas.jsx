import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    // initialize form data state
    name: '',
    email: '',
    // add other form fields as needed
  });

  const handleChange = (e) => {
    // handle form input changes
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // send POST request to the API
      const response = await fetch('https://example.com/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // add any additional headers as needed
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        // handle success, e.g., show a success message to the user
      } else {
        console.error('Failed to send data');
        // handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error sending data:', error);
      // handle error, e.g., show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      {/* Add other form fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
