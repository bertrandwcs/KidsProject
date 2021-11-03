import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKidSelected } from "../redux/actions/kids.action";
import { isEmpty } from "../utils/isEmpty";

const ButtonKids = () => {
  const kids = useSelector((state) => state.kidsReducer);
  const selectedKid = useSelector((state) => state.selectedKidsReducer);
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(addKidSelected(data));
  };

  return (
    <div className="button-kids-container">
      {kids.map((item, index) => (
        <button
          className={
            !isEmpty(selectedKid) && selectedKid === item.id
              ? "button-style-selected"
              : "button-style-unselected"
          }
          onClick={() => handleClick(item.id)}
        >
          {!isEmpty(kids) && item.id}
        </button>
      ))}
    </div>
  );
};

export default ButtonKids;
