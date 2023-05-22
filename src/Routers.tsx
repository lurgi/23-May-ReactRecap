import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./routes/Stocks";
import StockDetail from "./routes/StockDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stocks />}></Route>
        <Route path="/kospi/:id" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
