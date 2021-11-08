import { useDispatch, useSelector } from "react-redux";
import ButtonKids from "../components/ButtonKids";
import { isEmpty } from "../utils/isEmpty";
import Button from "@material-ui/core/Button";
import { useContext, useEffect, useState } from "react";
import { UidContext } from "../../src/UidContext";
import FormActivities from "../components/activities/FormActivitie";
import { getActivities } from "../redux/actions/activities.action";
import DisplayActivities from "../components/activities/DisplayActivities";
import MyCalendar from "../components/activities/MyCalendar";

const ActivitiesPage = () => {
  const uid = useContext(UidContext);

  const selectedKid = useSelector((state) => state.selectedKidsReducer);
  const activities = useSelector((state) => state.activityReducer);

  const dispatch = useDispatch();

  const [buttonPop, setButtonPop] = useState(false);

  useEffect(() => {
    dispatch(getActivities(uid, selectedKid));
  }, [uid, selectedKid, dispatch]);

  const handleButton = () => {
    if (!isEmpty(selectedKid)) {
      setButtonPop(!buttonPop);
    }
  };

  return (
    <div className="container-activities">
      <h1>Activities</h1>

      <ButtonKids />
      <Button
        variant="contained"
        color="primary"
        className="button-delete"
        onClick={handleButton}
      >
        New activity
      </Button>
      <div className="grid-activities">
        <div className="calendar">
          <MyCalendar items={activities} />
        </div>
        <div className="activities">
          {!isEmpty(activities) &&
            activities.map((elem) => <DisplayActivities item={elem} />)}
        </div>
      </div>
      {buttonPop && (
        <div className="show-form-pop">
          <div className="form-content">
            <FormActivities />
            <Button
              className="button-exit"
              onClick={handleButton}
              variant="outlined"
              color="primary"
              component="label"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;
