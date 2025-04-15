// components/ProductCard.jsx
import React from "react";
import img from "../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg";

const ProductCard = () => {
  return (
    <div className="bg-white max-w-md mx-auto p-4 font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">UBAC</h1>
        <div className="flex gap-4 items-center text-gray-700">
          <UserIcon />
          <CartIcon count={7} />
          <MenuIcon />
        </div>
      </div>

      <img
        src={img}
        alt="AXOLO R-SKIN Sneakers"
        className="w-full mt-4"
      />

      <div className="text-center mt-2">
        <div className="flex justify-center space-x-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === 1 ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <h2 className="text-xl font-bold">AXOLO R-SKIN® MONOCHROME SNEAKERS</h2>
        <p className="text-gray-500">Khaki</p>
        <div className="flex items-center gap-2">
          <div className="text-black text-lg">★★★★★</div>
          <span className="text-gray-700">41 Reviews</span>
        </div>
        <p className="text-2xl font-semibold">170.00€</p>
      </div>

      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-gray-800">Classic</span>
          <span className="font-medium text-gray-800">Limited</span>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            {["#eeeeee", "#7c7349", "#000"].map((color, idx) => (
              <span
                key={idx}
                className={`h-6 w-6 rounded-full border ${
                  color === "#7c7349" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            {["#006400", "#1d0070"].map((color, idx) => (
              <span
                key={idx}
                className="h-6 w-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center border-t pt-4">
        <button className="text-black font-semibold border-b-2 border-black px-4 pb-1">
          Men
        </button>
        <button className="text-gray-500 px-4">Women</button>
      </div>

      <div className="fixed bottom-6 right-6 bg-black rounded-full p-3">
        <ChatIcon />
      </div>
    </div>
  );
};

// Icons (you can replace with lucide-react or svg files)
const UserIcon = () => <div className="h-6 w-6 bg-gray-300 rounded-full" />;
const CartIcon = ({ count }) => (
  <div className="relative">
    <div className="h-6 w-6 bg-gray-300 rounded" />
    <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
      {count}
    </span>
  </div>
);
const MenuIcon = () => (
  <div className="space-y-1">
    <div className="h-1 w-6 bg-black"></div>
    <div className="h-1 w-6 bg-black"></div>
    <div className="h-1 w-6 bg-black"></div>
  </div>
);
const ChatIcon = () => <div className="h-6 w-6 bg-white rounded-full" />;

export default ProductCard;
