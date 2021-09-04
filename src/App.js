import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

const Photo = React.lazy(() => import("./features/Photo")); //lazy load
//lazy load nen can co  1 UI gi do khi do t dung suspense
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          {/* <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">go to Add new photo page</Link>
            </li>
            <li>
              <Link to="photos/123">Go to Edit photo page</Link>
            </li>
          </ul> */}

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo}></Route>
            {/* <Route path="/user" component="User"></Route> */}
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
