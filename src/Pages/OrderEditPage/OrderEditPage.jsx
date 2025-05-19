import { useContext } from "react";
import { GiConfirmed } from "react-icons/gi";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import OrderCard from "../../Components/OrderCard/OrderCard";
import Swal from "sweetalert2";

const OrderEditPage = () => {
  const { orders } = useContext(AuthContext)
  const navigate = useNavigate()
  const order = useLoaderData()
  console.log(order);
  const handleUpdateOrder = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const address = form.get("address");
    const note = form.get("note");
    const status = form.get('status')

    const updatedOrder = { name, note, status, phone, email }
    console.log(updatedOrder);


    // Sending data to Server
    fetch(`https://elara-international-server.onrender.com/orders/${order._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedOrder)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Order Details Updated Successfully',
            // text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Back'
          })
            .then(result => {
              if (result.isConfirmed) {
                navigate(-1)
              }
            })
        }
      })
  }

  return (
    <div>
      <section
        className="relative bg-no-repeat bg-cover font-raleway  antialiased min-h-screen"

      >
        {/* Dark overlay on background image */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}

        <form
          onSubmit={handleUpdateOrder}
          className="relative mx-auto max-w-screen-xl px-6 sm:px-10"
        >
          <div className="rounded-2xl  bg-opacity-70 backdrop-blur-md shadow-lg  sm:p-12">
            <h1 className="text-center text-base-400 text-4xl  mb-8">
              Order for {order.name}
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side - Delivery details */}
              <div className="flex-1 space-y-8 text-base-400">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Delivery Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="your_name"
                        className="block mb-2 text-sm font-medium"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="your_name"
                        name="name"
                        defaultValue={order.name}
                        placeholder="Bonnie Green"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="your_email"
                        className="block mb-2 text-sm font-medium"
                      >
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="your_email"
                        defaultValue={order.email}
                        name="email"
                        placeholder="name@example.com"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone-input"
                        className="block mb-2 text-sm font-medium"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        defaultValue={order.phone}
                        id="phone-input"
                        name="phone"
                        pattern="[0-9]{11}"
                        placeholder="01700000000"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="full_address"
                        className="block mb-2 text-sm font-medium"
                      >
                        Full Address
                      </label>
                      <input
                        type="text"
                        id="full_address"
                        name="address"
                        defaultValue={order.address}
                        placeholder="Enter Your Full Address"
                        required
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>

                    <div className="">
                      <label
                        htmlFor="note"
                        className="block mb-2 text-sm font-medium"
                      >
                        Any Note?
                      </label>
                      <input
                        type="text"
                        defaultValue={order.note}
                        id="note"
                        name="note"
                        placeholder="Leave a note"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="note"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Change Status
                      </label>
                      <select name="status" defaultValue={order.status} className="select block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                        <option disabled={true}>Select Status</option>
                        <option >Pending</option>
                        <option>Confirm</option>
                        <option >Cancel</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-3 rounded-lg bg-[#FCAB35] px-6 py-3 text-white text-lg font-semibold hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
                      >
                        <GiConfirmed size={22} />
                        Update Order
                      </button>
                    </div>
                  </div>
                </div>


              </div>

              {/* Right side - Order summary */}
              <div className="w-full max-w-md rounded-2xl p-8 shadow-lg bg-opacity-70 text-base-400">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                <ul className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                  {order.cartProducts.map((product) => (
                    <OrderCard product={product} key={product.id} />
                  ))}
                </ul>

                <div className="space-y-3 text-base-400 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>BDT {order.totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>BDT 50</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-5 text-base-400">
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total</span>
                    <span>BDT {order.grandTotal}</span>
                  </div>
                  <p className="mt-2 text-sm text-base-400">
                    Shipping costs are calculated during checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default OrderEditPage;
