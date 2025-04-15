import React from "react";

const HeroSection = () => {
  return (
    <section id="Home" className="bg-gray-100 min-h-screen w-full flex items-center justify-center px-4">
      <div
        className="w-full max-w-7xl h-[85vh] rounded-[30px] overflow-hidden bg-cover bg-center flex items-center justify-between p-10 shadow-2xl"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/blue-background-with-sunglasses-blue-background_916191-266685.jpg')",
        }}
      >
        {/* Text Box */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eco-Friendly Glasses</h1>
          <p className="text-lg mb-6">
            Effortlessly sustainable frames for endlessly stylish everyday wear.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Shop now →
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;