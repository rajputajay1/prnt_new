import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About PrintPro</h1>
          <p className="text-xl">Your trusted partner in printing solutions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Company Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              PrintPro was founded in 2010 with a simple mission: to provide high-quality printing services to businesses and individuals. What started as a small printing shop has now grown into a leading printing service provider, serving thousands of satisfied customers across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey has been marked by continuous innovation, quality service, and customer satisfaction. We've expanded our services to include t-shirt printing, cup printing, card printing, and various custom printing solutions to meet the diverse needs of our clients.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional printing services with the highest quality standards, innovative solutions, and outstanding customer service. We aim to be the go-to printing partner for businesses and individuals seeking reliable and creative printing solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">👁️</div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize the printing industry by combining cutting-edge technology with traditional craftsmanship. We envision a future where every printed product tells a unique story and leaves a lasting impression.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PrintPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We use only the finest materials and state-of-the-art printing technology to ensure the highest quality results.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Our efficient processes and dedicated team ensure quick delivery without compromising on quality.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
              <p className="text-gray-600">Our team of experts provides innovative printing solutions tailored to your specific needs.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 