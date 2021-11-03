import React, { useContext, useEffect, useState } from "react";
import firebase from "../../utils/firebaseConfig";
import { UidContext } from "../../UidContext";
import { getKids } from "../../redux/actions/kids.action";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import "react-big-calendar/lib/css/react-big-calendar.css";
import MyCalendar from "./MyCalendar";
import { deleteActivity } from "../../redux/actions/activities.action";

const DisplayActivities = ({ item }) => {
  /* const [activities, setActivities] = useState([]); */
  /*   console.log(item);

  const dispatch = useDispatch();

  const uid = useContext(UidContext);
 */
  const timeParser = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };

  /*   useEffect(() => {
    let list = [];
    for (let id in item.Activities) {
      list.push({ id, ...item.Activities[id] });
    }
    setActivities(list);
  }, [item.Activities]);
 */
  /*   const handleDelete = (elemId) => {
    dispatch(deleteActivity(item.id, elemId));
  }; */

  return (
    <div className="container-display-activities">
      <h3>{item.id}</h3>
      <div className="grid-container">
        <div className="container-calendar">
          <MyCalendar />
        </div>
        <div className="element">
          <ul>
            <li>{item.activity}</li>
            <li>{item.description}</li>
            <li>{timeParser(item.dateRange[0].startDate)}</li>
            <li>{timeParser(item.dateRange[0].endDate)}</li>
            <Button
              variant="contained"
              color="primary"
              /* onClick={handleDelete(item.id)} */
            >
              Delete
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayActivities;
