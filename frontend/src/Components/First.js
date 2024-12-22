import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { FaArrowRight, FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { TbArrowBack } from 'react-icons/tb';
import '../FirstUserCard.css';

const First = () => {
  const [userData, setUserData] = useState(null); // State for user data
  const [detailActive, setDetailActive] = useState(false); // State for toggling details

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
    <div className="bg-gradient-to-r from-[#2c5364] to-[#0f2027] h-screen flex items-center justify-center">
      {userData ? (
        <div className="main flex flex-col items-center justify-center">
          <div className="box center">
            <img
              src={userData.picture.large} // Dynamic image
              alt={`${userData.name.first} ${userData.name.last}`} // Dynamic alt text
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="text-center">
              <p className="user_name font-semibold  mt-2">{`${userData.name.first} ${userData.name.last}`}</p>
              <p className="skill text-md">{userData.email}</p> {/* Display email */}
              <div className="flex flex-col items-center text-center mt-2">
              <p className="skill text-md mt-[-15px]">{userData.phone}</p> {/* Display email */}
  
  <p className="skill text-md mt-[-15px]">{`${userData.location.city}, ${userData.location.state}`}</p>
</div>


            </div>
            <div className="arr_container center" onClick={() => setDetailActive(true)}>
              <FaArrowRight className="fas text-gray-600 w-6 h-6" />
            </div>
            <div className={detailActive ? 'left_container active' : 'left_container off'}>
              <p>Skills</p>
              <div className="skills">
                <div>React</div>
                <div>Node</div>
                <div>Express</div>
                <div>MongoDB</div>
              </div>
              <div className="icons flex mt-4">
                <FaFacebookF className="fab" />
                <BsInstagram className="fab" />
                <FaTwitterSquare className="fab" />
              </div>
              <div className="cancel center" onClick={() => setDetailActive(false)}>
                <TbArrowBack className="fas" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default First;
