import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/Entry/Entry.page.js";
import { Dashboard } from "./pages/dashboard/Dasboard.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
