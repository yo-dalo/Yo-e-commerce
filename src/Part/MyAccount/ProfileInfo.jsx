import React from "react";

const ProfileInfo = () => {
  const data = [
    { label: "Name", value: "Adarsh" },
    { label: "Surname", value: "Adarsh" },
    { label: "Email", value: "kumaradarsh00572@gmail.com" },
    { label: "Phone", value: "" },
  ];

  return (
    <div className="max-w-md  mx-auto mt-0 p-6 bg-white rounded-2xl shadow-md">
      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="text-sm text-gray-500 uppercase">{item.label}</div>
          <div className="text-lg text-gray-800">{item.value || "-"}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfileInfo;