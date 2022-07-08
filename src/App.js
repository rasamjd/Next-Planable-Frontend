import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';

import Entry from "./components/entry.component"
import CreatePlan from "./components/create-plan.component.js"
import JoinPlan from "./components/join-plan.component.js"
import Plan from "./components/plan.component.js"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Entry />} />
        <Route path="create-plan" element={<CreatePlan />} />
        <Route path="join-plan" element={<JoinPlan />} />
        <Route path="plan/:code" element={<Plan />} />
      </Route>
    </Routes>
  </Router>
  );
}
  
export default App;
