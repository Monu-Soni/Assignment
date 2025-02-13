import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Form from "./Components/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </Router>
  );
}

export default App;
