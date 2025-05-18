import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
    // Post Request
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productName = form.get("ProductName");
        const category = form.get("category");
        const price = form.get("price");
        const imageFile = form.get("image");
        const sku = form.get("sku");
        const description = form.get("description");
        const stock = form.get("stock");

        const imgbbApiKey = "53db74273f733d00facae7fe86d074d0"; // Use your real key
        const imageData = new FormData();
        imageData.append("image", imageFile);

        try {
            // Step 1: Upload image to imgbb
            const imgbbRes = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
                imageData
            );

            const imageUrl = imgbbRes.data.data.url;

            // Step 2: Post product data to backend
            const productData = {
                productName,
                category,
                price,
                image: imageUrl,
                sku,
                stock,
                description,
            };

            const res = await axios.post("http://localhost:5000/products", productData);

            console.log("Product added:", res.data);

            Swal.fire({
                title: "Product Added",
                icon: "success",
                confirmButtonText: "Back",
            });

            e.target.reset(); // reset form
        } catch (error) {
            console.error("Error adding product:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to add product",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div>
            <h1 className="font-bold text-3xl mt-12 text-center">Add Product</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto px-6 my-6 mt-8 lg:mt-16"
            >
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="relative flex items-center">
                        <label className="text-slate-900 text-lg font-semibold absolute top-[-10px] left-0">
                            Product Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="pt-5 pb-2 px-2 pr-8 bg-base-100 w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none file:mr-4 file:py-1 file:px-2 file:border file:border-gray-300 file:rounded file:text-sm file:bg-white file:text-gray-700"
                            required
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
                            required
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
