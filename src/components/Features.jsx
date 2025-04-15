import React from 'react';

const features = [
  {
    title: 'Recycled Plastic',
    desc: 'Give water bottles a fashionable second chance with frames made from rPET.',
    image: 'https://i.pinimg.com/474x/86/58/38/8658389121dc48ac71b2426f0689bc2c.jpg',
  },
  {
    title: 'Recycled Metal',
    desc: 'Premium frames crafted from repurposed stainless steel—lightweight strength with a lighter footprint.',
    image: 'https://i.pinimg.com/474x/06/6f/a7/066fa7356271660571e7338e8c81168a.jpg',
  },
  {
    title: 'Bio-Based Acetate',
    desc: 'Nature-derived, made-to-last frames made from renewable plant-based sources.',
    image: 'https://i.pinimg.com/474x/e5/0a/28/e50a283592587e96d3bdf49e0dff92db.jpg',
  },
];

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold">Feel Good, Do Good Materials</h2>
        <p className="text-lg text-gray-600 mt-2">
          Made to last with Earth’s future in mind from renewable and recycled resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {features.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-xl bg-white">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <span className="absolute bottom-2 right-2 bg-white text-black text-xs px-2 py-1 rounded-full shadow">
                Frames
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;