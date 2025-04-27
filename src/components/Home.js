import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Premium Custom Printing',
      description: 'High-quality printing services for all your needs',
      buttonText: 'Explore Products'
    },
    {
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Bulk Order Discounts',
      description: 'Special discounts on bulk orders',
      buttonText: 'View Offers'
    },
    {
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      title: 'Fast Delivery',
      description: 'Quick turnaround time with reliable shipping',
      buttonText: 'Learn More'
    }
  ];

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: 1,
      name: 'T-Shirt Printing',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Custom t-shirt printing with high-quality materials',
      products: [
        { id: 1, name: 'Classic Cotton T-Shirt', price: '₹499' },
        { id: 2, name: 'Premium Polo T-Shirt', price: '₹799' },
        { id: 3, name: 'V-Neck T-Shirt', price: '₹599' }
      ]
    },
    {
      id: 2,
      name: 'Cup Printing',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Personalized cup printing for all occasions',
      products: [
        { id: 4, name: 'Ceramic Coffee Mug', price: '₹299' },
        { id: 5, name: 'Travel Mug', price: '₹399' },
        { id: 6, name: 'Glass Tumbler', price: '₹349' }
      ]
    }
  ];

  const features = [
    {
      title: 'High Quality Printing',
      description: 'Premium quality materials and printing techniques',
      icon: '🎨'
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround time with reliable shipping',
      icon: '🚚'
    },
    {
      title: 'Custom Designs',
      description: 'Create your own unique designs',
      icon: '✏️'
    },
    {
      title: 'Bulk Orders',
      description: 'Special discounts on bulk orders',
      icon: '📦'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-[80vh] bg-gray-100">
        <div className="container mx-auto px-4 h-full py-8">
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentSlide
                      ? 'translate-x-0'
                      : index < currentSlide
                      ? '-translate-x-full'
                      : 'translate-x-full'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                      <div className="max-w-2xl transform transition-all duration-1000 ease-in-out">
                        <h1 className="text-5xl font-bold text-white mb-6">{slide.title}</h1>
                        <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
                        <Link
                          to="/products"
                          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
                        >
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0">
              <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSlideDirection(index > currentSlide ? 'right' : 'left');
                        setCurrentSlide(index);
                      }}
                      className="flex items-center space-x-2 group"
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white scale-150' : 'bg-white/50 group-hover:bg-white/75'
                      }`}></div>
                      <span className={`text-white text-sm transition-opacity duration-300 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Special Offers</h2>
          <p className="text-gray-200 text-center mb-12">Limited time offers on our premium services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 transform hover:scale-105 transition duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">HOT DEAL</span>
                  <span className="text-3xl font-bold text-yellow-400">50% OFF</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Bulk T-Shirt Printing</h3>
                <p className="text-gray-200 mb-6">Order 50+ t-shirts and get 50% discount on printing</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">Valid until: 30th June</span>
                  </div>
                  <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg">
                    Grab Offer
                  </button>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 transform hover:scale-105 transition duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-400 rounded-full opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">NEW</span>
                  <span className="text-3xl font-bold text-green-400">30% OFF</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Custom Mug Printing</h3>
                <p className="text-gray-200 mb-6">Get 30% off on your first order of custom mugs</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">Limited time offer</span>
                  </div>
                  <button className="bg-green-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition duration-300 shadow-lg">
                    Grab Offer
                  </button>
                </div>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-6 transform hover:scale-105 transition duration-300">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-400 rounded-full opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">FLASH SALE</span>
                  <span className="text-3xl font-bold text-red-400">40% OFF</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Business Card Printing</h3>
                <p className="text-gray-200 mb-6">Premium business cards at 40% discount</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-300">Today only</span>
                  </div>
                  <button className="bg-red-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-red-300 transition duration-300 shadow-lg">
                    Grab Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Popular Categories</h2>
          <p className="text-gray-600 text-center mb-12">Explore our premium printing services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-200">{category.description}</p>
                  </div>
                </div>

                {/* Subcategories */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Available Products</h4>
                  <div className="space-y-4">
                    {category.products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${category.id}/${product.id}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition duration-300">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                              <img
                                src={category.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 group-hover:text-blue-600 transition duration-300">
                                {product.name}
                              </h5>
                              <p className="text-sm text-gray-500">Custom printing available</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="block font-bold text-gray-900">{product.price}</span>
                            <span className="text-xs text-gray-500">Starting from</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link
                      to={`/products/${category.id}`}
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Customer {index}</h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Amazing quality and service! The custom printing was exactly what I wanted."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Create your custom design today</p>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Start Designing
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">Simple steps to get your custom prints</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Product</h3>
              <p className="text-gray-600">Select from our wide range of products and customize your design</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Your Design</h3>
              <p className="text-gray-600">Upload your artwork or use our design tools to create something unique</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Review & Confirm</h3>
              <p className="text-gray-600">Preview your design and confirm your order details</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Prints</h3>
              <p className="text-gray-600">Sit back and relax while we deliver your custom prints to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 