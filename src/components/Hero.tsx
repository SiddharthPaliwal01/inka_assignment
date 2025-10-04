import React from 'react';
import heroImage from '../../images/4bb7e99b627b235261763e91f2c444d02c1d2d0e.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden h-[500px] sm:h-[600px] lg:h-[808px]">
      {/* Background Image - Full Width - Flipped Horizontally */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Guitar Player Background" 
          className="w-full h-full object-cover scale-x-[-1]"
          style={{ objectPosition: '50% center' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center sm:items-start">
        {/* Main Title */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="font-bold text-white text-center sm:text-left text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            style={{
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontFamily: 'Work Sans, sans-serif'
            }}
          >
            Fullfilling dreams<br />
            with strings<br />
            attached
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
