import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { isEmpty } from "../../utils/isEmpty";

const MyCalendar = ({ items }) => {
  console.log(items);

  const addSchedule = () => {
    let activityRange = [];
    if (!isEmpty(items)) {
      items.map((elem) => {
        activityRange.push({
          startDate: elem.dateRange[0].startDate,
          endDate: elem.dateRange[0].endDate,
          title: elem.activity,
        });
      });
    }
    return activityRange;
  };

  return (
    <div>
      <Paper variant="outlined">
        <Scheduler data={addSchedule()}>
          <ViewState />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default MyCalendar;
