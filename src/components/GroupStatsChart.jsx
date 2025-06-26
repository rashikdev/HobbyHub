import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const GroupGrowthChart = ({ data }) => {
  const chartData = data || [
    { month: "Jan", groups: 12, members: 50, newGroups: 0 },
    { month: "Feb", groups: 90, members: 120, newGroups: 90 - 12 },
    { month: "Mar", groups: 205, members: 100, newGroups: 205 - 90 },
    { month: "Apr", groups: 180, members: 200, newGroups: 0 },
    { month: "May", groups: 210, members: 250, newGroups: 210 - 180 },
    { month: "Jun", groups: 170, members: 210, newGroups: 0 },
    { month: "Jun", groups: 300, members: 520, newGroups: 300 - 170 },
  ];

  return (
    <div className="md:p-8 p-7 rounded-xl shadow-md h-[400px] border-l-2 border-t-2 border-indigo-500">
      <h2 className="text-2xl font-bold text-center mb-4">
        📈 Group Growth Over Time
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />

          {/* Smooth member growth */}
          <Area
            type="monotone"
            dataKey="members"
            fill="#c084fc"
            stroke="#a855f7"
            name="Members"
          />

          {/* Total group count bar */}
          <Bar
            dataKey="groups"
            barSize={20}
            fill="#4f46e5"
            name="Total Groups"
          />

          {/* Group line trend */}
          <Line
            type="monotone"
            dataKey="groups"
            stroke="#f97316"
            name="Groups Trend"
          />

          {/* New groups added as dots */}
          <Scatter dataKey="newGroups" fill="#10b981" name="New Groups" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GroupGrowthChart;
