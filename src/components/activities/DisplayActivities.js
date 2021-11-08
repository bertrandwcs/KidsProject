import React, { useContext } from "react";

import Button from "@material-ui/core/Button";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { UidContext } from "../../UidContext";
import { deleteActivity } from "../../redux/actions/activities.action";
import { useDispatch, useSelector } from "react-redux";
/* import MyCalendar from "./MyCalendar"; */

const DisplayActivities = ({ item }) => {
  const selectedKid = useSelector((state) => state.selectedKidsReducer);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const timeParser = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  const handleDelete = (itemId) => {
    dispatch(deleteActivity(uid, selectedKid, itemId));
  };

  return (
    <div className="container-display-activities">
      <div className="element">
        <ul>
          <li>{item.activity}</li>
          <li>{item.description}</li>
          <li>{timeParser(item.dateRange[0].startDate)}</li>
          <li>{timeParser(item.dateRange[0].endDate)}</li>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(deleteActivity(uid, selectedKid, item.id))}
          >
            Delete
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default DisplayActivities;
