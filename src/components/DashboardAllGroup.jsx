import { useNavigate, useOutletContext } from "react-router";

const DashboardAllGroup = () => {
  const allGroups = useOutletContext();
  const navigate = useNavigate();
  return (
    <div className="p-6 shadow-md rounded-xl -mx-8 md:mx-0">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">
        📋 All Groups Overview
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-indigo-100 text-indigo-700 font-semibold">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Group Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Members</th>
              <th className="px-4 py-2 border">Start Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {allGroups.map((group, index) => {
              const isPast = new Date(group.startDate) < new Date();
              return (
                <tr
                  key={group._id}
                  title="Click to see details"
                  onClick={() => navigate(`/group/${group._id}`)}
                  className="hover:bg-gray-100 cursor-pointer hover:text-gray-600"
                >
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{group.groupName}</td>
                  <td className="px-4 py-2 border">{group.hobbyCategory}</td>
                  <td className="px-4 py-2 border">{group.members}</td>
                  <td className="px-4 py-2 border">{group.startDate}</td>
                  <td className="px-4 py-2 border">
                    {isPast ? (
                      <span className="text-red-500 font-medium">Expired</span>
                    ) : (
                      <span className="text-green-600 font-medium">Active</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllGroup;
