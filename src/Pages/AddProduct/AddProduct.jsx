import axios from "axios";
import React from "react";

const AddProduct = () => {
// Post Request
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const productName = form.get('ProductName')
        const category = form.get('category')
        const price = form.get('price')
        const image = form.get('image')
        const sku = form.get('sku')
        const description = form.get('description')
        const stock = form.get('stock')

        console.log(productName, category, price, image,sku, stock,description);
        axios({
            method: 'post',
            url: 'http://localhost:5000/products',
            data: {
              productName,
              category,
              price,
              image,
              sku,
              stock,
              description
            }
          })
          .then(function(response){
            console.log(response);
          })
    }


  return (
    <div>
        <h1 className="font-bold text-3xl mt-12 text-center">Add Product</h1>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-6 my-6 mt-8 lg:mt-16">
        <div className="grid sm:grid-cols-2 gap-10">
            {/* Product Name */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Product Name
            </label>
            <input
                type="text"
                name="ProductName"
                placeholder="Enter product name"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* Category */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Category
            </label>
            <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* Price */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Price (BDT)
            </label>
            <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* Stock Quantity */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Stock Quantity
            </label>
            <input
                type="number"
                name="stock"
                placeholder="Enter stock quantity"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* SKU */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Product Code (SKU)
            </label>
            <input
                type="text"
                name="sku"
                placeholder="Enter product code"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* Image URL */}
            <div className="relative flex items-center">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Image URL
            </label>
            <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none"
            />
            </div>

            {/* Description */}
            <div className="relative flex items-start sm:col-span-2">
            <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                Description
            </label>
            <textarea
                placeholder="Enter product description"
                name="description"
                className="px-2 pt-5 pb-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none resize-none"
                rows={2}
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
    </div>
  );
};

export default AddProduct;
