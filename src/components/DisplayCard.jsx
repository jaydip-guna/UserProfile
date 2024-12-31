import React from "react";

function DisplayCard({ profile, onDelete }) {
  const { name, email, age, image } = profile;
  const ageLessThan = age < 18;

  console.log(image);
  return (
    
    <div className="w-full sm:w-[400px] bg-gray-800 mx-auto text-white p-6 sm:p-8 rounded-lg grid grid-cols-1 gap-6">
  <span className="text-xl font-semibold">User's Profile:</span>
  <div className="flex justify-center items-center">
    <img src={image} alt={name} className="w-[120px] h-[30px] object-cover rounded-full mt-4" />
  </div>
  <div className="mt-6">
    <label className="block text-lg">User's Name:</label>
    <h3 className="text-xl">{name}</h3>
  </div>
  <div className="mt-4">
    <label className="block text-lg">User's Email:</label>
    <p>{email}</p>
  </div>
  <div className="mt-4">
    <p>{age} years old</p>
    {ageLessThan && <p className="text-red-700 mt-2">Age is less than 18</p>}
  </div>
  <div className="flex justify-center">
    <button
      onClick={() => onDelete(email)}
      className="delete-btn bg-slate-50 p-3 w-full sm:w-[140px] text-black text-2xl sm:text-xl mt-6 sm:mt-11 rounded-md"
    >
      Delete
    </button>
  </div>
</div>

  );
}

export default DisplayCard;
