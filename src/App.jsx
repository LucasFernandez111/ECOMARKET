import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routers></Routers>
      </BrowserRouter>
    </>
  );
}

export default App;
