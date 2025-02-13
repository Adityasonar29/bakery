import React from 'react';

const Careers = () => {
  const positions = [
    {
      title: "Senior Baker",
      department: "Production",
      location: "Mumbai",
      type: "Full-time",
      description: "Looking for an experienced baker with expertise in artisanal bread making."
    },
    {
      title: "Pastry Chef",
      department: "Production",
      location: "Mumbai",
      type: "Full-time",
      description: "Seeking creative pastry chef with experience in creating custom desserts."
    },
    {
      title: "Store Manager",
      department: "Retail",
      location: "Mumbai",
      type: "Full-time",
      description: "Managing daily operations of our flagship store."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Join Our Team</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Growth Opportunities",
              description: "Continuous learning and career advancement possibilities"
            },
            {
              title: "Work Culture",
              description: "Collaborative environment with passionate professionals"
            },
            {
              title: "Benefits",
              description: "Competitive salary, health insurance, and product discounts"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                  <div className="text-gray-600 mt-1">
                    {position.department} • {position.location} • {position.type}
                  </div>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-600">{position.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Don't see a suitable position?</h2>
        <p className="text-gray-600 mb-6">
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Send Resume
        </button>
      </div>
    </div>
  );
};

export default Careers;