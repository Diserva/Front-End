import { Route, Routes } from "react-router-dom";

//Pages
import HomePage from './pages/HomePage';
import CallbackPage from "./pages/CallbackPage";
import GuildPage from './pages/GuildPage';
import NotFoundPage from "./pages/404Page";

import ProtectedAuthRoute from "./components/ProtectedAuthRoute";
import ProtectedGuildRoute from "./components/ProtectedGuildRoute";


function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedAuthRoute>
            <HomePage />
          </ProtectedAuthRoute>
        }
      />
      <Route path='/callback' element={<CallbackPage />} />
      <Route
        path='/guild/:id'
        element={
          <ProtectedAuthRoute>
            <ProtectedGuildRoute>
              <GuildPage />
            </ProtectedGuildRoute>
          </ProtectedAuthRoute>
        }
      />
      <Route
        path='/support'
        element={
          <ProtectedAuthRoute>
            <GuildPage />
          </ProtectedAuthRoute>
        } //Support
      />
      <Route
        path='/cookies'
        element={<GuildPage />} //Cookies
      />
      <Route
        path='/privacy-policy'
        element={<GuildPage />} //privacy-policy
      />
      <Route
        path='/terms-of-use'
        element={<GuildPage />} //terms-of-use
      />
      <Route
        path='/about-project'
        element={<GuildPage />} //about-project
      />
      <Route
        path='/about-us'
        element={<GuildPage />} //about-us
      />
      <Route
        path='/function'
        element={<GuildPage />} //function
      />
      <Route
        path='/blog'
        element={<GuildPage />} //blog
      />
      <Route
        path='*'
        element={<NotFoundPage />} //blog
      />
    </Routes>
  );
}

export default App;
