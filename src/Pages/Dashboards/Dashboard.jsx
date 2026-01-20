import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FaUsers,
  FaCalendarCheck,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";

const stats = [
  { title: "Total Users", value: 56, icon: <FaUsers />, color: "text-yellow-500" },
  { title: "Total Bookings", value: 2, icon: <FaCalendarCheck />, color: "text-yellow-500" },
  { title: "Total Payments", value: "$0", icon: <FaDollarSign />, color: "text-yellow-500" },
  { title: "Ratings", value: "4.8/5", icon: <FaStar />, color: "text-yellow-500" },
];

const monthlyData = [
  { month: "Jan", bookings: 30 },
  { month: "Feb", bookings: 45 },
  { month: "Mar", bookings: 60 },
  { month: "Apr", bookings: 40 },
  { month: "May", bookings: 70 },
  { month: "Jun", bookings: 55 },
  { month: "Jul", bookings: 55 },
  { month: "Aug", bookings: 55 },
];

const bookingStatus = [
  { name: "Pending", value: 2, color: "#2563EB" },
  { name: "Paid", value: 0, color: "#FACC15" },
  { name: "Confirmed", value: 0, color: "#EF4444" },
  { name: "Approved", value: 0, color: "#22C55E" },
];

const Dashboard = () => {
  return (
     <div className="min-h-screen bg-gray-100 overflow-y-auto">

      {/* Header */}
      <h2 className="text-xl font-bold mb-6">📊 Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow flex items-center gap-4"
          >
            <div className={`text-3xl ${item.color}`}>{item.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Monthly Bookings */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Monthly Bookings</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#FDE047" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Booking Status */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Booking Status</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={bookingStatus}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
              >
                {bookingStatus.map((item, i) => (
                  <Cell key={i} fill={item.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-4 text-sm">
            {bookingStatus.map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <span
                  className="w-3 h-3 rounded"
                  style={{ background: item.color }}
                ></span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Recent Activities */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Recent Activities</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-green-600">● rawmchampion@gmail.com booked a court</li>
            <li className="text-yellow-600">● New user registered</li>
            <li className="text-blue-600">● Payment received successfully</li>
            <li className="text-red-600">● Court booking cancelled</li>
          </ul>
        </div>

        {/* Completion Rate */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Booking Completion Rate</h3>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-yellow-400 h-3 rounded-full w-[10%]"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">10% completed</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
