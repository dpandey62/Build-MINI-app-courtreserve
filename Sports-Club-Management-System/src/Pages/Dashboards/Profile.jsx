import React, { useState } from "react";
import { FaIdBadge } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Raw",
    email: "rawmchampion@gmail.com",
    phone: "",
    address: "",
    role: "user",
    image:
      "https://i.ibb.co/9y8ZQkX/profile.jpg", // sample image
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully (Demo)");
  };

  return (
    <div className="space-y-10">

      {/* PAGE TITLE */}
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaIdBadge /> My Profile
      </h2>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
        <img
          src={user.image}
          alt="profile"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover"
        />

        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Phone:</span> {user.phone || "N/A"}</p>
          <p><span className="font-semibold">Address:</span> {user.address || "N/A"}</p>
          <p><span className="font-semibold">Role:</span> {user.role}</p>
        </div>
      </div>

      {/* UPDATE FORM */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-6">Update Profile</h3>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full border rounded-lg px-4 py-3 mt-1 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="font-medium">Role</label>
            <input
              type="text"
              value={user.role}
              disabled
              className="w-full border rounded-lg px-4 py-3 mt-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium">Profile Image URL</label>
            <input
              type="text"
              name="image"
              value={user.image}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition"
            >
              Update Profile
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Profile;
