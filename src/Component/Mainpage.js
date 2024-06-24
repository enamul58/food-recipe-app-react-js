import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const controlInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Food Name");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <>
      <h1 className="head">Food Recipe App</h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Dishe"
            onChange={controlInput}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <h3 className="msg">{msg}</h3>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
