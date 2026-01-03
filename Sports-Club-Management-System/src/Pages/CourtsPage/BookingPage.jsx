import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import { PiCourtBasketballBold } from "react-icons/pi";

export default function BookingPage() {
  const { courtId } = useParams();
  const navigate = useNavigate();

  const [selectedSlot, setSelectedSlot] = useState("6:00 AM");
  const [date, setDate] = useState("");

  // 🔹 Dummy court data (later API se aayega)
  const court = {
    name: "Tennis Court East",
    type: "Tennis",
    location: "Green Sports Arena - Dhaka",
    price: 1100,
  };

  const slots = ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative bg-black w-full max-w-md rounded-xl p-6 text-white">
        {/* ❌ Close Button */}
        <button
          onClick={() => navigate("/courts")}
          className="absolute top-4 right-4 text-white text-xl"
        >
          <FaTimes />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#FFE733] mb-6">
          Book {court.name}
        </h2>

        {/* Court Name */}
        <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
          <PiCourtBasketballBold /> Court Name
        </label>
        <input
          value={court.name}
          disabled
          className="w-full bg-[#FFE733] text-black p-2 rounded mb-4 font-medium"
        />

        {/* Court Type */}
        <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
          <PiCourtBasketballBold /> Court Type
        </label>
        <input
          value={court.type}
          disabled
          className="w-full bg-[#FFE733] text-black p-2 rounded mb-4 font-medium"
        />

        {/* Location */}
        <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
          <FaMapMarkerAlt /> Location
        </label>
        <input
          value={court.location}
          disabled
          className="w-full bg-[#FFE733] text-black p-2 rounded mb-4 font-medium"
        />

        {/* Price */}
        <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
          <FaDollarSign /> Price Per Session
        </label>
        <input
          value={`₹${court.price}`}
          disabled
          className="w-full bg-[#FFE733] text-black p-2 rounded mb-4 font-medium"
        />

        {/* Date */}
        <label className="text-sm text-gray-400 flex items-center gap-2 mb-1">
          <FaCalendarAlt /> Select Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded mb-4 text-white"
        />

        {/* Slots */}
        <label className="text-sm text-gray-400 mb-2 block">
          Select Session Slots
        </label>
        <div className="flex flex-wrap gap-2 mb-4">
          {slots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`px-4 py-2 rounded border ${
                selectedSlot === slot
                  ? "bg-[#FFE733] text-black border-[#FFE733]"
                  : "bg-gray-700 border-gray-500"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Total Price */}
        <label className="text-sm text-gray-400 mb-1 block">
          Total Price
        </label>
        <input
          value={`₹${court.price}`}
          disabled
          className="w-full bg-[#FFE733] text-black p-2 rounded mb-6 font-medium"
        />

        {/* Confirm Button */}
        <button className="w-full bg-[#FFE733] text-black py-3 rounded font-bold hover:opacity-90 transition">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
