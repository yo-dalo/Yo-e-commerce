import React from 'react'
import { useState, useEffect } from 'react';

const ItemColor = ({colors}) => {
      const [selectedSize, setSelectedSize] = useState(null);
  
    const handleSizeChange = (size) => {
        // Agar already selected size par click kiya to uncheck karo
        if (selectedSize === size) {
            setSelectedSize(null);
        } 
        // Nahi to naya size select karo
        else {
            setSelectedSize(size);
        }
    }
  
  
  
  
  
  
  
  
  
    useEffect(() => {
        console.log("Selected Size:", selectedSize);
    }, [selectedSize]);
  
  return (
        <div className="w-full font-semibold flex flex-col gap-3 text-black py-2 bg-white">
            <h3 className="text-xl">Colors</h3>
            <div className="jstart gap-2 flex-row flex">
                {colors?.map((num, i) => (
                    <div key={i} className="w-12 h-12 rounded-[0.3rem] border flex items-center justify-center">
                        <label className="relative w-full h-full flex items-center justify-center">
                            <input 
                                value={num}
                                checked={selectedSize === num}
                                onChange={() => handleSizeChange(num)}
                                type="checkbox" 
                                className="absolute opacity-0 peer" 
                            />
                            <span className={`text-black full font-light w-full h-full flex items-center justify-center rounded-[0.3rem] 
                                ${selectedSize === num ? 'bg-black text-white' : ''}`}>
                                {num}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemColor