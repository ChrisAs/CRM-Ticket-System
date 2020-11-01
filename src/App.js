import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/Entry/Entry.page.js";
import { Dashboard } from "./pages/dashboard/Dasboard.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
function App() {
  return (
    <div className="App">
      <Entry />
      <DefaultLayout>
        <Dashboard />
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
