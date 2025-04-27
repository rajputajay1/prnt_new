import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { categoryId, productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // This would typically come from an API or database
  const categories = [
    {
      id: 1,
      name: 'T-Shirt Printing',
      products: [
        {
          id: 1,
          name: 'Classic Cotton T-Shirt',
          price: '₹499',
          description: 'High-quality cotton t-shirt with custom printing. Perfect for everyday wear and special occasions.',
          features: [
            '100% Premium Cotton',
            'Soft and Comfortable',
            'Durable Printing',
            'Available in Multiple Colors',
            'Various Size Options'
          ],
          images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['White', 'Black', 'Navy', 'Gray', 'Red']
        },
        {
          id: 2,
          name: 'Premium Polo T-Shirt',
          price: '₹799',
          description: 'Premium quality polo t-shirt with custom embroidery. Perfect for formal and casual occasions.',
          features: [
            'Premium Cotton Blend',
            'Classic Polo Design',
            'Custom Embroidery',
            'Multiple Color Options',
            'Various Size Options'
          ],
          images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['White', 'Black', 'Navy', 'Gray', 'Red']
        }
      ]
    },
    {
      id: 2,
      name: 'Cup Printing',
      products: [
        {
          id: 4,
          name: 'Ceramic Coffee Mug',
          price: '₹299',
          description: 'High-quality ceramic coffee mug with custom printing. Perfect for gifting and personal use.',
          features: [
            'Premium Ceramic Material',
            'Microwave Safe',
            'Dishwasher Safe',
            'Custom Printing',
            'Comfortable Handle'
          ],
          images: [
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['Small', 'Medium', 'Large'],
          colors: ['White', 'Black', 'Blue', 'Red', 'Green']
        },
        {
          id: 5,
          name: 'Travel Mug',
          price: '₹399',
          description: 'Premium travel mug with custom printing. Perfect for on-the-go coffee lovers.',
          features: [
            'Stainless Steel Construction',
            'Leak-Proof Lid',
            'Insulated Design',
            'Custom Printing',
            'Easy to Clean'
          ],
          images: [
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['12 oz', '16 oz', '20 oz'],
          colors: ['Silver', 'Black', 'Blue', 'Red', 'Green']
        }
      ]
    },
    {
      id: 3,
      name: 'Card Printing',
      products: [
        {
          id: 7,
          name: 'Business Cards',
          price: '₹199',
          description: 'Professional business cards with high-quality printing and premium paper.',
          features: [
            'Premium Card Stock',
            'Full Color Printing',
            'Glossy/Matte Finish',
            'Custom Design',
            'Quick Turnaround'
          ],
          images: [
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['Standard', 'Premium', 'Luxury'],
          colors: ['White', 'Cream', 'Gray']
        }
      ]
    },
    {
      id: 4,
      name: 'Banner Printing',
      products: [
        {
          id: 10,
          name: 'Vinyl Banner',
          price: '₹999',
          description: 'High-quality vinyl banners for indoor and outdoor use.',
          features: [
            'Durable Vinyl Material',
            'Weather Resistant',
            'Full Color Printing',
            'Custom Sizes',
            'Grommet Holes'
          ],
          images: [
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['3x6 ft', '4x8 ft', '5x10 ft'],
          colors: ['White', 'Black', 'Blue', 'Red', 'Green']
        },
        {
          id: 11,
          name: 'Fabric Banner',
          price: '₹1299',
          description: 'Premium fabric banners with high-quality printing and durability.',
          features: [
            'Premium Fabric Material',
            'Eco-Friendly',
            'Wrinkle Resistant',
            'Custom Sizes',
            'Easy to Install'
          ],
          images: [
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['3x6 ft', '4x8 ft', '5x10 ft', '6x12 ft'],
          colors: ['White', 'Black', 'Blue', 'Red', 'Green']
        },
        {
          id: 12,
          name: 'Backdrop Banner',
          price: '₹1499',
          description: 'Professional backdrop banners for events and photography.',
          features: [
            'High-Resolution Printing',
            'Portable Design',
            'Easy Setup',
            'Custom Sizes',
            'Multiple Mounting Options'
          ],
          images: [
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['6x8 ft', '8x10 ft', '10x12 ft'],
          colors: ['White', 'Black', 'Blue', 'Red', 'Green']
        }
      ]
    },
    {
      id: 5,
      name: 'Custom Printing',
      products: [
        {
          id: 13,
          name: 'Custom Stickers',
          price: '₹99',
          description: 'High-quality custom stickers for any purpose.',
          features: [
            'Premium Vinyl Material',
            'Waterproof',
            'UV Resistant',
            'Custom Shapes',
            'Multiple Finishes'
          ],
          images: [
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['2x2 inch', '3x3 inch', '4x4 inch', 'Custom'],
          colors: ['White', 'Clear', 'Metallic', 'Glossy', 'Matte']
        },
        {
          id: 14,
          name: 'Custom Labels',
          price: '₹149',
          description: 'Professional custom labels for products and packaging.',
          features: [
            'Premium Paper/Plastic',
            'Water Resistant',
            'Custom Shapes',
            'Multiple Finishes',
            'Bulk Ordering'
          ],
          images: [
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['2x1 inch', '3x2 inch', '4x3 inch', 'Custom'],
          colors: ['White', 'Clear', 'Silver', 'Gold']
        },
        {
          id: 15,
          name: 'Custom Packaging',
          price: '₹299',
          description: 'Custom packaging solutions for your products.',
          features: [
            'Premium Materials',
            'Custom Sizes',
            'Branding Options',
            'Eco-Friendly',
            'Bulk Ordering'
          ],
          images: [
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
          ],
          sizes: ['Small', 'Medium', 'Large', 'Custom'],
          colors: ['White', 'Brown', 'Black', 'Custom']
        }
      ]
    }
  ];

  // Find the selected category and product
  const selectedCategory = categories.find(cat => cat.id === parseInt(categoryId));
  const product = selectedCategory?.products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <Link to="/products" className="text-blue-600 hover:text-blue-800">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to={`/products/${categoryId}`} className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to {selectedCategory.name}
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-6">
              <div className="mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Size</h2>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 border rounded-md flex items-center justify-center transition duration-300 ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Color</h2>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 border rounded-md flex items-center justify-center transition duration-300 ${
                        selectedColor === color
                          ? 'border-blue-500 ring-2 ring-blue-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-4 py-2 hover:bg-gray-100 transition duration-300"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    className="px-4 py-2 hover:bg-gray-100 transition duration-300"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Delivery Time</span>
                  <span className="font-medium">3-5 Business Days</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Return Policy</span>
                  <span className="font-medium">7 Days Return</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Warranty</span>
                  <span className="font-medium">1 Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 