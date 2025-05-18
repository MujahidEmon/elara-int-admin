import { useContext } from "react";
import { GiConfirmed } from "react-icons/gi";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const OrderEditPage = () => {
const {orders} = useContext(AuthContext)

const order = useLoaderData()
console.log(order);

  return (
    <div>
      <section className="bg-[url('https://i.ibb.co.com/fNtQhMV/1.png')] bg-no-repeat bg-cover font-raleway py-8 antialiased md:py-16">
        <form
          action="#"
        //   onSubmit={handlePlaceOrder}
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 flex lg:flex-row flex-col-reverse lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      name="name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Your email*
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      name="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone-input-3"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Phone Number*
                    </label>
                    <div className="flex items-center">
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          name="phone"
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                          pattern="[0-9]{11}"
                          placeholder="01700000000"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="full_address"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Full Address
                    </label>
                    <input
                      type="text"
                      id="full-address"
                      name="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter Your Full Address"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="full_address"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Total Price
                    </label>
                    <input
                      type="text"
                      id="full-address"
                      name="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter Your Full Address"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="note"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Any Note?
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      name="note"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Leave a note"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                    >
                      <GiConfirmed></GiConfirmed>
                      Place Order
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Payment</h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value="selected"
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                        />
                      </div>
                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900"
                        >
                          Payment on delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="sticky top-0 ms-0  w-full max-w-md lg:block">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h2 className="mb-5 text-lg font-semibold text-gray-900">
                  Order summary
                </h2>
                <ul className="mb-5 space-y-3">
                  {cartCoffees.map((c, idx) => (
                    <CartCard coffee={c} key={idx}></CartCard>
                  ))}
                </ul>

                <ul className="mt-4 space-y-1 text-gray-600">
                  <li className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="text-gray-900">BDT {totalPrice}</span>
                  </li>

                  <li className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span className="text-gray-900">BDT {50}</span>
                  </li>
                </ul>

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                    <span>Total</span>
                    <span className="text-xl">BDT {grandTotal}</span>
                  </div>

                  <p className="mt-1 text-xs text-gray-500">
                    Shipping costs are calculated during checkout.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </form>
      </section>
    </div>
  );
};

export default OrderEditPage;
