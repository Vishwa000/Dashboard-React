import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Userlist from "./Userlist";
import Usercreate from "./Usercreate";
import Userview from "./Userview";
import Useredit from "./Useredit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-list" element={<Userlist />} />
          <Route path="user-create" element={<Usercreate />} />
          <Route path="user-view/:userid" element={<Userview />} />
          <Route path="user-edit/:userid" element={<Useredit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
