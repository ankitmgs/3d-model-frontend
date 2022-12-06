import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./components/homePage";
import Signup from "./components/signup";
import Header from "./components/Header";
import AddModal from "./components/addModal";
import ModalList from "./components/modalList";
import ManageModal from "./components/manageModal";
import ViewModel from "./components/viewModel";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      
        <Routes>
          <Route element={<Login />} path="/login" /> 
          <Route element={<HomePage />} path="/" /> 
          <Route element={<Signup />} path="/signup" /> 
          <Route element={<AddModal />} path="/addmodal" /> 
          <Route element={<ModalList />} path="/listmodal" /> 
          <Route element={<ManageModal />} path="/manage" /> 
          <Route element={<ViewModel />} path="/viewer/:id" /> 
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
