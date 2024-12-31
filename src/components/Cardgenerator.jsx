import React, { useState } from "react";

function Cardgenerator({ onAddProfile }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newProfile = {
      name,
      email,
      age,
      image,
    };
    onAddProfile(newProfile);
    setName("");
    setEmail("");
    setAge("");
    setImage("");
  }
  return (
        <>
        {/* <form onSubmit={handleSubmit}>
            <div className="w-[400px] h-[500px] bg-gray-800 text-black ml-[450px]">
            <div className="py-6 text-black">
                <label>Name:</label>
                <input
                className="border rounded-md"
                type="text"
                value={name}
                required
                onChange={(e) => {
                    setName(e.target.value);
                }}
                />
            </div>
            <div className="py-6">
                <label>Email:</label>
                <input
                className="border rounded-md"
                type="text"
                value={email}
                required
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                />
            </div>
            <div className="py-6">
                <label>Age:</label>
                <input
                className="border rounded-md"
                type="text"
                value={age}
                required
                onChange={(e) => {
                    setAge(e.target.value);
                }}
                />
            </div>
            <div className="py-6">
                <label>image:</label>
                <input
                className="border rounded-md"
                type="file"
                value={image}
                required
                onChange={(e) => {
                    setImage(e.target.value);
                }}
                />
            </div>
            <button type="submit " className="bg-white p-2 ">
                submit
            </button>
            </div>
        </form> */}
        <form onSubmit={handleSubmit}>
  <div className="w-full max-w-md mx-auto bg-gray-800  p-6 rounded-lg text-black">
    <div className="py-4">
      <label className="block text-sm font-semibold">Name:</label>
      <input
        className="border rounded-md w-full p-2 mt-1"
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    
    <div className="py-4">
      <label className="block text-sm font-semibold">Email:</label>
      <input
        className="border rounded-md w-full p-2 mt-1"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    
    <div className="py-4">
      <label className="block text-sm font-semibold">Age:</label>
      <input
        className="border rounded-md w-full p-2 mt-1"
        type="number"
        value={age}
        required
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
    
    <div className="py-4">
      <label className="block text-sm font-semibold">Image:</label>
      <input
        className="border rounded-md w-full p-2 mt-1"
        type="file"
        required
        onChange={(e) => setImage(e.target.files[0])}
      />
    </div>
    
    <button type="submit" className="bg-white text-black py-2 px-4 mt-4 w-full rounded-lg">
      Submit
    </button>
  </div>
</form>

        </>
  );
}

export default Cardgenerator;
