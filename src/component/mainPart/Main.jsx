import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Item from "../items/item";
import "./main.css";

const Main = () => {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/good-sellers?populate=*",
          {
            headers: {
              Authorization: "bearer" + process.env.API_TOKEN,
            },
          }
        );

        setBestSeller(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <div>Best Seller</div>
        <div className="toflex">
          {bestSeller.map((item, key) => {
            return <Item item={item.attributes} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
