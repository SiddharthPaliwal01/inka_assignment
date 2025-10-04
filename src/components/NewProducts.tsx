import React, { useState, useEffect } from 'react';
import guitar1 from '../../images/1.png';
import guitar2 from '../../images/2.png';
import guitar3 from '../../images/3.png';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colorsAvailable: number;
}

const NewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Local image mapping
  const localImages = [guitar1, guitar2, guitar3];

  useEffect(() => {
    // Fetch products from MockAPI
    const fetchProducts = async () => {
      try {
        // MockAPI endpoint for products
        const response = await fetch('https://68e17c6e8943bf6bb3c450ba.mockapi.io/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        
        // Map MockAPI data but use local images
        const productsWithLocalImages = data.map((product: Product, index: number) => ({
          ...product,
          image: localImages[index] || guitar1 // Fallback to guitar1 if index out of range
        }));
        
        setProducts(productsWithLocalImages);
        setLoading(false);
      } catch (err) {
        // Fallback to local guitar images if API fails
        setLoading(false);
        setProducts([
          {
            id: '1',
            name: 'Fender Stratocaster',
            description: 'Classic electric guitar with versatile tone',
            price: 129900,
            image: guitar1,
            colorsAvailable: 3
          },
          {
            id: '2',
            name: 'Gibson Les Paul',
            description: 'Legendary rock guitar with powerful sound',
            price: 249900,
            image: guitar2,
            colorsAvailable: 5
          },
          {
            id: '3',
            name: 'Taylor Acoustic',
            description: 'Premium acoustic guitar for professionals',
            price: 189900,
            image: guitar3,
            colorsAvailable: 2
          }
        ]);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">New Products</h2>
          <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Products Grid - 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-200/70"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-b from-gray-100 to-gray-50 h-[320px] sm:h-[340px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.08),transparent_60%)]" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[260px] sm:max-h-[280px] w-auto object-contain drop-shadow-md transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 bg-white flex flex-col gap-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">{product.name}</h3>
                  <p className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">
                    ${(product.price / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </p>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{product.description}</p>
                <div className="mt-1">
                  <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-gray-600 tracking-wide">
                    {product.colorsAvailable} colors available
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default NewProducts;
