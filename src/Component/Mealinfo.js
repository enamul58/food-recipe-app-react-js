import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Mealinfo() {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  console.log(mealid);

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    console.log(jsonData);
    setInfo(jsonData.meals[0]);
  };

  if (info !== "") {
    console.log("i");
    getInfo();
  }
  console.log(info);
  return (
    <div>
      {!info ? (
        "Data Not Found"
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt="" />
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mealinfo;
