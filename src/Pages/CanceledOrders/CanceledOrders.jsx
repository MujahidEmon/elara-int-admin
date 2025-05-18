import TableRow from "../../Components/TableRow/TableRow";

const CanceledOrders = () => {
  return (
    <div class="overflow-x-auto mt-7">
      <table class="min-w-full bg-white">
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

        <tbody class="whitespace-nowrap">
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default CanceledOrders;
