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

const MyCalendar = () => {
  const schedulerData = [
    {
      startDate: "2021-10-13T09:45",
      endDate: "2021-10-17T11:00",
      title: "WE castor",
    },
    {
      startDate: "2021-10-13T12:00",
      endDate: "2021-11-04T13:30",
      title: "Théatre",
    },
  ];

  return (
    <div>
      <Paper>
        <Scheduler data={schedulerData}>
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
