import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";
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
