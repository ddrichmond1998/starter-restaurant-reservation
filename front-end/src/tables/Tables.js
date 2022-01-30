import React from "react";
import { Route, Switch } from "react-router-dom";
import NewTable from "./new/NewTable";
import NotFound from "../layout/NotFound";

//Route for table-related actions


function Tables() {
  return (
    <main>
      <Switch>
        <Route path={"/tables/new"}>
          <NewTable />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
}

export default Tables;