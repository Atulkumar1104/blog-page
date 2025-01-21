import { useState } from "react";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Route/route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
