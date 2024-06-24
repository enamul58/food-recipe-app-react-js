import React from "react";
import { NavLink } from "react-router-dom";

function Mealcards({ detail }) {
  console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? "Data not found"
        : detail.map((singleElement) => {
            return (
              <div className="mealImg">
                <img src={singleElement.strMealThumb} alt="" />
                <p>{singleElement.strMeal}</p>
                <NavLink to={`/${singleElement.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
}

export default Mealcards;
