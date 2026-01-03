import React from "react";
import { FaBullhorn } from "react-icons/fa";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Cumque lorem at expe",
      message: "Accusantium enim dol",
      date: "Fri, Aug 1, 2025, 7:25 PM",
    },
    {
      id: 2,
      title: "Office Relocation",
      message:
        "Our office will relocate to a new address from August 10.",
      date: "Mon, Jul 28, 2025, 9:00 PM",
    },
    {
      id: 3,
      title: "Policy Update",
      message:
        "Updated privacy policy effective from August 1.",
      date: "Fri, Jul 25, 2025, 1:15 PM",
    },
    {
      id: 4,
      title: "Dolorem veniam labo",
      message: "Vel repellendus Bla",
      date: "Thu, Jul 24, 2025, 1:00 PM",
    },
    {
      id: 5,
      title: "Training Session",
      message:
        "Mandatory training session on new software on July 22.",
      date: "Sun, Jul 20, 2025, 4:30 PM",
    },
    {
      id: 6,
      title: "Server Maintenance 2.0",
      message:
        "Our servers will be down for maintenance on Sunday.",
      date: "Fri, Jul 18, 2025, 6:28 PM",
    },
    {
      id: 7,
      title: "Customer Support",
      message:
        "Customer support hours extended from 9 AM to 9 PM.",
      date: "Thu, Jul 17, 2025, 1:30 PM",
    },
    {
      id: 8,
      title: "Security Update",
      message:
        "Please update your passwords as a security precaution.",
      date: "Sat, Jul 12, 2025, 10:15 PM",
    },
    {
      id: 9,
      title: "Holiday Notice",
      message:
        "Office will remain closed on 21st July due to public holiday.",
      date: "Thu, Jul 10, 2025, 3:45 PM",
    },
    {
      id: 10,
      title: "System Upgrade",
      message:
        "System upgrade scheduled for next weekend.",
      date: "Tue, Jul 8, 2025, 2:30 PM",
    },
  ];

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <h2 className="text-2xl font-bold flex items-center gap-2 text-yellow-500">
        <FaBullhorn /> All Announcements
      </h2>

      {/* TABLE CARD */}
      <div className="bg-white rounded-xl shadow overflow-hidden border border-yellow-400">

        {/* TABLE */}
        <table className="w-full text-left text-sm">
          <thead className="bg-yellow-400 text-black font-bold">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Posted At</th>
            </tr>
          </thead>

          <tbody>
            {announcements.map((item, index) => (
              <tr
                key={item.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-semibold">
                  {item.title}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {item.message}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Announcements;
