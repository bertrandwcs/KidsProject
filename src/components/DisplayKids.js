import React from "react";

const DisplayKids = ({ item }) => {
  const calculateAge = (birth) => {
    const dateNow = Date.now();
    const date = new Date(birth);
    const ageMillis = dateNow - date.getTime();
    // const  age = new Date(ageMillis);
    return Math.floor(ageMillis / 31536000000);
  };

  return (
    <div className="container-kidsdisplay">
      <div className={item.Sex === "girl" ? "kids-card-girl" : "kids-card-boy"}>
        <p>
          {item.id} {item.Lastname}
        </p>
        <p>{calculateAge(item.Date_of_Birth)} ans</p>
        <p>{item.Sex}</p>
      </div>
    </div>
  );
};

export default DisplayKids;
