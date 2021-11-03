import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { NavLink } from "react-router-dom";


export default function NavBar() {

  const [value, setValue] = React.useState(0);

  return (
    <div className="container-menu">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home Page" component={NavLink} to="/" />
        <BottomNavigationAction label="Kids Stories" component={NavLink} to="/kidsStories" />
        <BottomNavigationAction label="Kids" component={NavLink} to="/kids" />
      </BottomNavigation>
    </div>
  );
}
