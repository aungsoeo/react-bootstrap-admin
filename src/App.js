import Template from "./template/Template";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Table from "./table/Table";

//export const PathContext = createContext();

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/tables">
          <Table />
        </Route>
        <Redirect from="/" to="/dashboard" exact />
      </Switch>
    </Template>
  );
}

export default App;
