import React from "react";
import EmployeeList from "pages/EmployeeList";
import HomePage from "pages/HomePage";
import EmployeeCapablityMapping from "pages/EmployeeCapablityMapping";
import Addcapability from "pages/Addcapability";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/addcapability" element={<Addcapability />} />
        <Route
          path="/employeecapablitymapping"
          element={<EmployeeCapablityMapping />}
        />
      <Route path="/" element={<HomePage />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
