import { BrowserRouter, Routes, Route } from "react-router";   
import Home from "./Page/Home";
 
function App() {
  return (
 
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
 
    
  );
}

export default App;
