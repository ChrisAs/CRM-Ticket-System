import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/Entry/Entry.page.js";
import { Dashboard } from "./pages/dashboard/Dasboard.page";
import { DefaultLayout } from "./layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      <Entry />

      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
