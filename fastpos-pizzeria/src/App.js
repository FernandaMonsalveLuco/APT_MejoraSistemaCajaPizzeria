import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./context/OrderContext";
import Caja from "./pages/Caja";
import Login from "./pages/Login";

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Caja />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
