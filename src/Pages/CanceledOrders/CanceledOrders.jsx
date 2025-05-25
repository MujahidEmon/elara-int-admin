import Swal from "sweetalert2";
import TableRow from "../../Components/TableRow/TableRow";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const CanceledOrders = () => {
  // const {orders} = useContext(AuthContext);
  const url = `https://elara-international-server.onrender.com/orders?status=Cancel`;
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  // console.log(orders);
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // setLoading(true);
        setOrders(data);
        setLoading(false);
      })
  }, [])



  const handleDelete = _id => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://elara-international-server.onrender.com/orders/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = orders.filter(o => o._id !== _id)
              setOrders(remaining)
            }
          })
      }
    });
  }



  return (
    <div className="overflow-x-auto mt-7">
      {
        loading ?
          <div className="min-h-screen flex items-center justify-center">
            <HashLoader color="#FCAB35" size={60} />
          </div>
          :
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
              {orders.map((order) => <TableRow key={order._id} order={order} handleDelete={handleDelete}></TableRow>)}
            </tbody>
          </table>
      }
    </div>
  );
};

export default CanceledOrders;
