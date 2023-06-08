import axios from "axios";

const fetchdata = async () => {
  try {
    const res = await fetch(
      "http://localhost:1337/api/good-sellers?populate=*"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const staticdata = await fetchdata();
export default staticdata;
