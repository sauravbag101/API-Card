import React from 'react';
import { TbEdit } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import  { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonalProfile() {

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
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      {userData ? (
      <div className="container py-5">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Left Section */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 text-white text-center p-6 md:w-1/3">
                <img
                  src={userData.picture.large}
                  alt="Avatar"
                  className="rounded-full w-20 h-20 mb-4"
                />
                <h5 className="text-lg font-bold">{`${userData.name.first} ${userData.name.last}`}</h5>
                <p className="text-sm">Web Designer</p>
                {/* <button className="mt-4 text-white bg-opacity-25 hover:bg-opacity-50 px-3 py-1 rounded-md">
                  Edit Profile
                </button> */}
                <TbEdit  className='text-lg'/>
              </div>

              {/* Right Section */}
              <div className="p-6 flex-1">
                <h6 className="text-xl font-normal mb-4">Information</h6>
                <hr className="border-gray-300 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-200 p-3 rounded-lg">
                  <div>
                    <h6 className="text-gray-600">Email</h6>
                    <p className="text-sm font-normal">{userData.email}</p>
                  </div>
                  <div>
                    <h6 className="text-gray-600">Phone</h6>
                    <p className="text-sm font-normal">{userData.phone}</p>
                  </div>
                  <div>
                    <h6 className="text-gray-600">Age</h6>
                    <p className="text-sm font-normal">{userData.dob.age}</p>
                  </div>
                  <div>
                  <h6 className="text-gray-600">DOB</h6>
                   <p className="text-sm font-normal">{userData.dob.date.slice(0, 10)}</p>
                 </div>
                </div>
               
                <hr className="border-gray-300 mb-6" />
                <div className="flex space-x-6">
                  <a href="" className="text-gray-500 ">
                  <FaFacebookF />
                  </a>
                  <a href="" className="text-gray-500 ">
                  <BsInstagram/>
                  </a>
                  <a href="" className="text-gray-500 ">
                  <FaTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
