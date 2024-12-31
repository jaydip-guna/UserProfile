import React, { useState } from "react";
import Cardgenerator from "./Cardgenerator";
import DisplayCard from "./DisplayCard";

function Main() {
  const [profile, setProfile] = useState([]);
  function addProfile(newProfile) {
    setProfile((prevProfiles) => [...prevProfiles, newProfile]);
  }
  function deleteProfile(email) {
    console.log("delete functtion call to email", email);
    setProfile((prevProfiles) =>
      prevProfiles.filter((profile) => profile.email !== email)
    );
    console.log("deleted profile with email", email);
  }
  return (
    <div>
    <h1 class="text-2xl font-semibold">User Profile</h1>
    <Cardgenerator onAddProfile={addProfile} />
    <h2 class="text-xl font-medium mt-4">Profile Cards</h2>
    <div className="profile-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 ml-2 ">
      {profile.map((profile, index) => (
        <DisplayCard key={index} profile={profile} onDelete={deleteProfile} />
      ))}
    </div>
  </div>
  );
}

export default Main;
