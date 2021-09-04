import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddEditPage from "./pages/AddEditPage";
import NotFound from "../../components/NotFound";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}></Route>
      <Route path={`${match.url}/add`} component={AddEditPage}></Route>
      <Route path={`${match.url}/:photoId`} component={AddEditPage}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  );
}

export default Photo;
