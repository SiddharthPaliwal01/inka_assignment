import React from 'react';
import guitarImage from '../../images/edc52e7816131ac0f7be6351a4aee2f41778d806.jpg';

const PromoSection: React.FC = () => {
  return (
    <section className="relative z-20 -mt-20 sm:-mt-32 md:-mt-40 lg:-mt-48 mb-12 sm:mb-14 lg:mb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div 
            className="relative overflow-hidden w-full rounded-lg sm:rounded-xl"
            style={{
              backgroundColor: '#AB0433',
              maxWidth: '1264px',
              boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Guitar Image Background */}
            <div className="absolute inset-0" style={{ opacity: 0.31, mixBlendMode: 'darken' }}>
              <img 
                src={guitarImage} 
                alt="Guitar" 
                className="h-full w-full object-cover object-right"
              />
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 text-center flex flex-col justify-center py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white leading-tight">
                FREE GUITAR LESSONS!
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white px-2">
                Purchase any guitar over $499.99 and recieve<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>a one-hour guitar lesson free.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase text-xs tracking-wide mx-auto mt-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
