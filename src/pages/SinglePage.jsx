import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchSingleData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSingleData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl font-bold text-center">{data.title}</h1>
      <p className="text-justify font-bold">{data.body}</p>
    </div>
  );
};

export default SinglePage;
