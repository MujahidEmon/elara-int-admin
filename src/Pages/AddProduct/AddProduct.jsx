import React from "react";

const AddProduct = () => {




  return (
    <form className="max-w-4xl mx-auto px-6 my-6 mt-8 lg:mt-16">
      <div className="grid sm:grid-cols-2 gap-10">
        {/* Product Name */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* Category */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* Price */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Price (BDT)
          </label>
          <input
            type="text"
            placeholder="Enter price"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* Stock Quantity */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Stock Quantity
          </label>
          <input
            type="number"
            placeholder="Enter stock quantity"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* SKU */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Product Code (SKU)
          </label>
          <input
            type="text"
            placeholder="Enter product code"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* Image URL */}
        <div className="relative flex items-center">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Image URL
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
          />
        </div>

        {/* Description */}
        <div className="relative flex items-start sm:col-span-2">
          <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
            Description
          </label>
          <textarea
            placeholder="Enter product description"
            className="px-2 pt-5 pb-2 pr-8 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none resize-none"
            rows={4}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="mt-12 px-2 py-2.5 w-full rounded-sm text-sm font-medium bg-[#FCAB35] cursor-pointer hover:bg-[#222] text-white"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
