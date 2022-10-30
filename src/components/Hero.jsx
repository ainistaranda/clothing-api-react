import React, { useState } from "react";

function Hero() {
  const [clothingList, setClothingList] = useState();
  const getClothing = () => {
    fetch(`https://cloud-api-clothing-at.web.app/clothing`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClothingList(data);
      })
      .catch(console.error);
  };
  return (
    <>
      <button onClick={() => getClothing()}>Display Clothing</button>
      {clothingList &&
        clothingList.map((cloth) => {
          return <h1>{cloth.type}</h1>;
        })}
    </>
  );
}

export default Hero;
