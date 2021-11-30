import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeView from "./views/Homeview";
import RumDetailsView from "./views/RumDetailsView";
import FavoritesView from "./views/FavoritesView";
import SignupView from "./views/SignupView";
import LoginView from "./views/LoginView";
import AddRumView from "./views/AddRumView";
import EditRumView from "./views/EditRumView";
import CountriesView from "./views/CountriesView";
import AddCountryView from "./views/AddCountryView";
import AuthRoute from "./components/AuthRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/rum/:id" element={<RumDetailsView />} />
        <Route path="/favoritesView" element={<FavoritesView />} />
        <Route element={<AdminRoute />}>
          <Route path="/addRum" element={<AddRumView />} />
          <Route path="/addCountry" element={<AddCountryView />} />
          <Route path="/editRum/:id" element={<EditRumView />} />
          <Route path="/countries" element={<CountriesView />} />
        </Route>
        <Route element={<AuthRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
