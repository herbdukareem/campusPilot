'use client'
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import InputField from '@/components/inputs/InputField'; 

const StudentBioData = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    surname: 'Doe',
    firstName: 'John',
    otherName: 'Smith',
    dateOfBirth: '',
    phone: '',
    email: '',
    passport: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // handle file upload logic here
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert('Biodata updated successfully!');
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          readOnly
        />
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          readOnly
        />
        <InputField
          label="Other Name"
          name="otherName"
          value={formData.otherName}
          onChange={handleChange}
          readOnly
        />
        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          type="date"
          required
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <div>
          <label className="block mb-2 font-medium">Upload Passport Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-gray-300 p-2"
            required
          />
        </div>
        <Button type="submit" color="primary" variant="solid" disabled={loading}>
          {loading ? 'Updating...' : 'Update Biodata'}
        </Button>
      </form>
    </div>
  );
};

export default StudentBioData;
