import {Route, Routes} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetUp";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />

      <Routes>
        <Route path={'/'} element={<AllMeetupsPage/>}/>
        <Route path={'/favorites'} element={<FavoritesPage/>}/>
        <Route path={'/new-meetup'} element={<NewMeetupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
