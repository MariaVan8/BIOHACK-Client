import { useState, useEffect } from "react";
import axios from "axios";
import Courses from "../../Components/Courses/Courses";

const baseUrl = "http://localhost:8080";
const profileUrl = `${baseUrl}/profile`;

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("JWTtoken");

    if (!token) {
      return;
    }

    axios
      .get(profileUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setUserInfo({ name: response.data.name });
      });
  }, []);

  return (
    <>
      {/* <h1 cl>Welcome {userInfo.name}!</h1> */}
      <Courses />
    </>
  );
}

export default Profile;
