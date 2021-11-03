import React from "react";
import { Route, Switch } from "react-router-dom";
import MenuAppBar from "./components/MenuAppBar";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import KidsStories from "./pages/KidsStories";
import Footer from "./components/Footer";
import KidsPage from "./pages/KidsPage";
import KidsTreePage from "./pages/KidsTreePage";
import ActivitiesPage from "./pages/ActivitiesPage";

const Main = () => {
  return (
    <main>
      <MenuAppBar />
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/kidsStories/" component={KidsStories} />
        <Route path="/kids/" component={KidsPage} />
        <Route path="/kidstree/" component={KidsTreePage} />
        <Route path="/activities/" component={ActivitiesPage} />
      </Switch>
      <Footer />
    </main>
  );
};

export default Main;
