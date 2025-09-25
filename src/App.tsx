import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ViewHostelsPage from './pages/ViewHostelsPage';
import HostelDetailsPage from './pages/HostelDetailsPage';
import FillDetailsPage from './pages/FillDetailsPage';
import ReviewDetailsPage from './pages/ReviewDetailsPage';
import BookingConfirmedPage from './pages/BookingConfirmedPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/hostels" element={<ViewHostelsPage />} />
            <Route path="/hostel/:id" element={<HostelDetailsPage />} />
            <Route path="/booking/details" element={<FillDetailsPage />} />
            <Route path="/booking/review" element={<ReviewDetailsPage />} />
            <Route path="/booking/confirmed" element={<BookingConfirmedPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;