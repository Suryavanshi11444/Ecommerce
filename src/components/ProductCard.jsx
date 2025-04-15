import { useState } from "react";
//import Heart, HeartFilled  from "lucide-react"; // You can customize this

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    // Optionally, update image based on color
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[100%] h-48 object-contain"
        />

        <button
          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
          onClick={toggleWishlist}
        >
          {isWishlisted ? (
            "❤️"
          ) : (
             "🤍"
          )}
        </button>
      </div>

      <h3 className="font-medium mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.brand}</p>
      <div className="flex items-center gap-1 text-sm text-yellow-500 mt-1">
        ⭐ {product.rating} ({product.reviews})
      </div>
      <p className="text-blue-600 font-bold text-lg mt-2">${product.price}</p>

      <div className="flex space-x-2 mt-3">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full border-2 ${
              selectedColor === color ? "border-black" : "border-white"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
