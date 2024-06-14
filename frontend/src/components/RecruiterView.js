import React, { useState } from 'react';
import axios from 'axios';

export default function RecruiterView() {
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/recruiter/addCompany', { companyName });
      if (res.status === 201) {
        alert('Company added');
      }
    } catch (error) {
      console.error('Error adding company', error);
    }
  };

  return (
    <div>
      <h2>Recruiter View</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
