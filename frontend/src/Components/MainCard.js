import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainCard = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {userData ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
          <div className="flex justify-center">
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
              className="rounded-full w-24 h-24 border-4 border-blue-500"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 text-center mt-4">
            {userData.name.first} {userData.name.last}
          </h2>
          <p className="text-gray-600 text-center">{userData.email}</p>
          <div className="mt-4">
            <p className="text-gray-700">
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {userData.location.city}, {userData.location.country}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div>
      
    </div>
    
    </div>
  );
};

export default MainCard
