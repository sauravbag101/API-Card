import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';

const AnimationCard = () => {
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
    <div className="max-w-md my-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {userData ? (
      <div className="md:flex">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48" 
            src={userData.picture.large} 
            alt="Modern building architecture" 
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {`${userData.name.first} ${userData.name.last}`}
          </div>
          <a 
            href="#" 
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
       ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimationCard;
