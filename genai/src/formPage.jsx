// src/FormPage.js

import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    workEmail: '',
    companyName: '',
    companySize: '',
    companyIndustry: '',
    companyWebsite: ''
  });

  const [apiResponse, setApiResponse] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await fetch('https://api.example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      setApiResponse(result.message || 'Submission successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiResponse('Submission failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-8xl space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className='flex'>
                <label htmlFor="name" className=" text-gray-700 text-sm font-semibold text-center pt-3 pr-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className='flex'>
                <label htmlFor="designation" className=" text-gray-700 text-sm font-semibold text-center pt-3 pr-2">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className='flex'>
                <label htmlFor="workEmail" className="text-gray-700 text-sm font-semibold pt-1 pr-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className='flex'>
                <label htmlFor="companyName" className="text-gray-700 text-sm font-semibold pt-1 pr-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className='flex'>
                <label htmlFor="companySize" className="text-gray-700 text-sm font-semibold pt-1 pr-2">
                  Company Size
                </label>
                <input
                  type="text"
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className='flex'>
                <label htmlFor="companyIndustry" className="text-gray-700 text-sm font-semibold pt-1 pr-2">
                  Company Industry
                </label>
                <input
                  type="text"
                  id="companyIndustry"
                  name="companyIndustry"
                  value={formData.companyIndustry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className='flex'>
                <label htmlFor="companyWebsite" className="text-gray-700 text-sm font-semibold pt-1 pr-2">
                  Company Website
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Response Section */}
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg border border-gray-300">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Response</h3>
          <p className="text-gray-700">{apiResponse}</p>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
