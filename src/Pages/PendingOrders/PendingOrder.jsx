import TableRow from "../../Components/TableRow/TableRow";

const PendingOrder = () => {
  return (
    <div class="overflow-x-auto mt-7">
      <table class="min-w-full bg-white">
      <thead class="bg-[#FCAB35] whitespace-nowrap">
          <tr>
            <th class="p-4 text-left text-sm font-medium text-white">Name</th>
            <th class="p-4 text-left text-sm font-medium text-white">Email</th>
            <th class="p-4 text-left text-sm font-medium text-white">Role</th>
            <th class="p-4 text-left text-sm font-medium text-white">
              Joined At
            </th>
            <th class="p-4 text-left text-sm font-medium text-white">
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

export default PendingOrder;
