import React from "react";
// import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import Coachs from "./pages/Coachs";
import Customers from "./pages/Customers";
import Events from "./pages/Events";
import Statistics from "./pages/Statistics";
import Tips from "./pages/Tips/Tips";
// import Header from "./components/Header";
import Login from "./pages/Login";
import { Outlet } from "react-router-dom";
import Astro from "./pages/Astro";
import NotFoundPage from "./pages/404/404";
import DashboardLayout from "./components/DashboardLayout/dashboardLayout";
import { AuthProvider, useAuth } from "./auth/authProvider";
import Unauthorized from "./Unauthorized/Unauthorized";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route element={<PrivateRoute />}>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/" element={<DashboardLayout />} />
            <Route index element={<Navigate to="/dashboard/home" />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard/home" />} />
              <Route path="home" element={<Home />}></Route>
              <Route path="coachs" element={<Coachs />}></Route>
              <Route path="customers" element={<Customers />}></Route>
              <Route path="customers/:customerId" element={<CustomerInfo />} />
              <Route path="events" element={<Events />}></Route>
              <Route path="statistics" element={<Statistics />}></Route>
              <Route path="tips" element={<Tips />}></Route>
              <Route path="astro" element={<Astro />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

function PrivateRoute() {
  const isAuthenticated = true; //useAuth();
  console.log(`PrivateRoute: ${isAuthenticated}`);
  if (isAuthenticated) return <Outlet />;
  else return <Navigate to="/login" />;
  //return <Outlet/>;
}

export default App;
