import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in local storage");
        return navigate("/login");
      }
      console.log("Token fetched from localStorage:", token);
      const response = await axios.get("http://localhost:3000/auth/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 202) {
        navigate("/login");
      }
    } catch (err) {
      console.error(
        "Error fetching user data:",
        err.response?.data || err.message
      );
      navigate("/login"); // Navigasi ke login jika terjadi error
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <div className="text-3xl text-blue-500">Welcome to the Home Page</div>;
};

export default Home;
