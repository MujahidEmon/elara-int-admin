import { useContext } from "react";
import TableRow from "../../Components/TableRow/TableRow";
import { AuthContext } from "../../Provider/AuthProvider";

const PendingOrder = () => {
  const {orders} = useContext(AuthContext);
  return (
    <div className="overflow-x-auto mt-7">
      <table className="min-w-full bg-white">
      <thead className="bg-[#FCAB35] whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">Name</th>
            <th className="p-4 text-left text-sm font-medium text-white">Email</th>
            <th className="p-4 text-left text-sm font-medium text-white">Phone</th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Products
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Total Price
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          {orders.map((order) => <TableRow key={order._id} order={order}></TableRow>)}
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrder;
