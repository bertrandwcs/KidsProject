import React from "react";

import firebase from "../utils/firebaseConfig";
import Button from "@material-ui/core/Button";
import Banner from "../assets/home_page/Banner.jpg";

export default function MenuAppBar() {
  return (
    <div className="menuappbar-container">
      <div className="flex-container">
        <h4 className="titre-navbar">
          Welcome {firebase.auth().currentUser.displayName}
        </h4>
        <Button
          variant="contained"
          color="primary"
          onClick={() => firebase.auth().signOut()}
        >
          Logout
        </Button>
      </div>
      <img className="Banner-img" src={Banner} alt="Banner" />
    </div>
  );
}
