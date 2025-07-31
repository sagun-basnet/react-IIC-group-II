import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const FetchAPI = () => {
  const [data, setData] = useState([]);

  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       setData(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const fetchDat = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDat();
  }, []);

  console.log(data);

  return (
    <>
      <div className="grid gap-4 grid-cols-4">
        {data.map((items, index) => {
          return (
            <Link to={`/single/${items.id}`}>
              <Card index={index} title={items.title} body={items.body} />;
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default FetchAPI;
