import React from 'react';

const ItemSize = () => {
  return (
    <div className="w-full font-semibold flex flex-col gap-3 text-black py-2 bg-white">
      <h3 className="text-xl">Classes</h3>

      <div className="jstart gap-2 flex-row flex">
        {[20, 2, 30, 4, 50].map((num) => (
          <div key={num} className="w-12 h-12 rounded-[0.3rem] border  flex items-center justify-center">
            <label className="relative w-full h-full flex items-center justify-center">
              <input type="checkbox" className="absolute opacity-0 peer" />
              <span className="text-black full font-light peer-checked:text-white peer-checked:bg-black w-full h-full flex items-center justify-center rounded-[0.3rem] ">
                {num}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSize;
