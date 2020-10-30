import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/Entry/Entry.page.js";
import { DefaultLayout } from "./layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      <Entry />
      <DefaultLayout />
    </div>
  );
}

export default App;
