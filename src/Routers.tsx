import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./routes/Stocks";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
