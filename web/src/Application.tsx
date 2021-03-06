import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Navigation } from "./components";

export const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          {routes.map((route, key) => (
            <Route
              exact={route.exact}
              key={key}
              path={route.path}
              render={(props: RouteComponentProps) => (
                <route.component
                  {...route.props}
                  name={route.name}
                  {...props}
                />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};
