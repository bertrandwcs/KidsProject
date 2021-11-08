import React, { useContext, useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import * as locales from "react-date-range/dist/locale";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils/isEmpty";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { addActivity } from "../../redux/actions/activities.action";
import { UidContext } from "../../UidContext";

const FormActivities = () => {
  const uid = useContext(UidContext);

  const dispatch = useDispatch();

  const selectedKid = useSelector((state) => state.selectedKidsReducer);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const data = {
      dateRange,
      activity,
      description,
      postTime: Date.now(),
    };

    alert("Activity added");
    dispatch(addActivity(data, uid, selectedKid));
  };

  return (
    <div className="form-container">
      <h4>New activity for {!isEmpty(selectedKid) && selectedKid}</h4>
      <div className="form-grid">
        <DateRange
          onChange={(item) => setDateRange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={dateRange}
          direction="vertical"
          preventSnapRefocus={true}
          calendarFocus="backwards"
          locale={locales["fr"]}
        />
        <form>
          <TextField
            id="outlined-basic"
            label="Activity"
            variant="outlined"
            type="text"
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
          />
          <br />
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormActivities;
