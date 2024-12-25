import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leaderboard from './pages/LeaderBoard';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import DailySeed from './components/DailySeed';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/sign-in" />;
// };

function App() {
  return (
    //<AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-seed" element={<DailySeed />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    //</AuthProvider>
  );
}

export default App;