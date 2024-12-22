import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "../App.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import axios from "axios";

const Responsive = () => {
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="page shadow">
        <div className="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            {userData ? (
              <MDBRow>
                <MDBCol sm={12} md={4}>
                  <div className="container text-center">
                    <img
                      src={userData.picture.large}
                      alt={`${userData.name.first} ${userData.name.last}`}
                      style={{ borderRadius: "100%", width: "150px", height: "150px" }}
                    />
                    <br />
                    <a href="#" className="mx-2">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="mx-2">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#" className="mx-2">
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </MDBCol>

                <MDBCol>
                  <div className="container">
                    <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
                    <p>{userData.location.city}</p>
                    <p>{`${userData.location.state}, ${userData.location.country}`}</p>
                  </div>

                  <hr />

                  <MDBContainer>
                    <MDBRow>
                      <MDBCol sm={2} lg={2} md={2}>
                        <h6 className="m-4">Bio</h6>
                      </MDBCol>
                      <MDBCol>
                        <p className="bio">
                          Hello, I am a tech enthusiast exploring new technologies. I enjoy
                          building projects and learning about the latest in the tech world.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                  <br />
                  <br />
                </MDBCol>
              </MDBRow>
            ) : (
              <p>Loading...</p>
            )}
          </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
