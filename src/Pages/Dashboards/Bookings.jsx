import React, { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";

const Bookings = () => {
  const [bookings] = useState([
    {
      id: 1,
      court: "Football Turf A",
      date: "12 Jan 2026",
      time: "6:00 PM - 7:00 PM",
      status: "Pending",
      amount: 800,
    },
    {
      id: 2,
      court: "Badminton Court 2",
      date: "14 Jan 2026",
      time: "8:00 AM - 9:00 AM",
      status: "Confirmed",
      amount: 400,
    },
    {
      id: 3,
      court: "Cricket Ground",
      date: "16 Jan 2026",
      time: "5:00 PM - 7:00 PM",
      status: "Completed",
      amount: 1500,
    },
  ]);

  const statusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-600";
      case "Confirmed":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaCalendarCheck /> My Bookings
      </h2>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-6 py-4">Court</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {booking.court}
                </td>
                <td className="px-6 py-4">{booking.date}</td>
                <td className="px-6 py-4">{booking.time}</td>
                <td className="px-6 py-4 font-semibold">
                  ₹{booking.amount}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* EMPTY STATE (future use) */}
        {bookings.length === 0 && (
          <p className="text-center text-gray-500 py-10">
            No bookings found
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
