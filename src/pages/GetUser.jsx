import axios from "axios";
import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("userToken");

  const fetchUser = async () => {
    await axios
      .get("http://192.168.1.22:5555/api/get-all-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <div>GetUser</div>;
};

export default GetUser;
