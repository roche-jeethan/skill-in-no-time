import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CreateProfile from './pages/createProfile';
import Profile from './pages/Profile';
import SignOut from './pages/SignOut';
import NotFound from './pages/NotFound';
import DailySeed from './components/DailySeed';
import DailySeedDetail from './components/DailySeedDetail';
import Quiz from './components/Quiz';
import Progress from './components/Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/daily-seed" element={<DailySeed />} />
        <Route path="/daily-seed-detail/:id" element={<DailySeedDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;