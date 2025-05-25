import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import PendingOrder from "../PendingOrders/PendingOrder";
import ConfirmedOrders from "../ConfirmedOrders/ConfirmedOrders";
import CanceledOrders from "../CanceledOrders/CanceledOrders";

const Orders = () => {

    const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="p-4">
      <ul className="flex md:text-lg text-xs">
        <Link to={'pending'}
          id="homeTab"
          onClick={() => setActiveTab("home")}
          className={`tab font-semibold md:text-[15px] text-[12px] text-center py-3 md:px-6 px-4 border-b-2 cursor-pointer transition-all ${
            activeTab === "home"
              ? "text-blue-700 bg-gray-50 border-[#FCAB35]"
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Pending Orders
        </Link>
        <li
          id="contentTab"
          onClick={() => setActiveTab("content")}
          className={`tab font-semibold md:text-[15px] text-[12px] text-center py-3 md:px-6 px-4 border-b-2 cursor-pointer transition-all ${
            activeTab === "content"
              ? "text-blue-700 bg-gray-50 border-[#FCAB35]"
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Confirmed Orders
        </li>
        <li
          id="profileTab"
          onClick={() => setActiveTab("profile")}
          className={`tab font-semibold md:text-[15px] text-[12px] text-center py-3 md:px-6 px-4 border-b-2 cursor-pointer transition-all ${
            activeTab === "profile"
              ? "text-blue-700 bg-gray-50 border-[#FCAB35]"
              : "text-slate-600 hover:bg-gray-50 border-transparent"
          }`}
        >
          Cancelled Orders
        </li>
      </ul>

      {/* Home Content */}
      {activeTab === "home" &&<PendingOrder></PendingOrder>}

      {/* Content Content */}
      {activeTab === "content" && <ConfirmedOrders></ConfirmedOrders>}

      {/* Profile Content */}
      {activeTab === "profile" && <CanceledOrders></CanceledOrders>}
    </div>
  );
};

export default Orders;
