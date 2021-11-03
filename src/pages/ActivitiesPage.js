import { useDispatch, useSelector } from "react-redux";
import ButtonKids from "../components/ButtonKids";
import { isEmpty } from "../utils/isEmpty";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import FormActivities from "../components/activities/FormActivitie";
import DisplayActivities from "../components/activities/DisplayActivities";
import { getKids } from "../redux/actions/kids.action";
import { getActivities } from "../redux/actions/activities.action";

const ActivitiesPage = () => {
  const selectedKid = useSelector((state) => state.selectedKidsReducer);
  const kids = useSelector((state) => state.kidsReducer);
  const activities = useSelector((state) => state.activityReducer);

  const dispatch = useDispatch();

  const [kidsList, setKidsList] = useState([]);
  const [buttonPop, setButtonPop] = useState(false);

  useEffect(() => {
    let list = [];
    for (let id in kids) {
      list.push({ id, ...kids[id] });
    }
  }, [selectedKid]);

  const handleButton = () => {
    if (!isEmpty(selectedKid)) {
      setButtonPop(!buttonPop);
    }
    dispatch(getActivities(selectedKid));
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
      {/*       {kidsList.map((elem, index) =>
        selectedKid ? <DisplayActivities item={elem} /> : null
      )} */}

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
