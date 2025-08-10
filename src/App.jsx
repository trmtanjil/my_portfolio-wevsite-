import { BrowserRouter, Routes, Route } from "react-router";  // react-router-dom থেকে import করো
import Home from "./Page/Home";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
