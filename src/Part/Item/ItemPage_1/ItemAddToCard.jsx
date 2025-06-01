import React from 'react'

const ItemAddToCard = ({ variantId, isAvailable }) => {
  const handleAddToCart = () => {
    if (!isAvailable) return;
    console.log('Adding variant to cart:', variantId);
    // Add your cart logic here
  }

  return (
    <div className="w-full mt-4">
      <button
        onClick={handleAddToCart}
        disabled={!isAvailable}
        className={`w-full py-3 rounded-md font-medium text-white ${
          isAvailable ? 'bg-black hover:bg-gray-800' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isAvailable ? 'Add to Cart' : 'Select Options'}
      </button>
      {variantId && (
        <p className="text-xs text-gray-500 mt-2">Variant ID: {variantId}</p>
      )}
    </div>
  )
}

export default ItemAddToCard