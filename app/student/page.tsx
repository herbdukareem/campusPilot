'use client'
import React, { useState } from 'react';
import StudentBioData from '@/app/student/components/StudentBioData';
import PaymentPage from '@/app/student/components/PaymentPage';

const StudentHomePage = () => {
  const [stage, setStage] = useState('biodata');
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const handleBiodataUpdateSuccess = () => {
    setStage('payment');
  };

  return (
    <div className="flex">
      <div className="flex-grow  p-6">
        {stage === 'biodata' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Student Biodata Update</h2>
            <div className=" p-4 bg-whitebg rounded-lg shadow-lg  md:p-[20px]">
              <StudentBioData onSuccess={handleBiodataUpdateSuccess} />
            </div>
          </div>
        )}
        {stage === 'payment' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Proceed to Payment</h2>
            <div className=" p-4 rounded-lg shadow-lg">
              <PaymentPage />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentHomePage;
