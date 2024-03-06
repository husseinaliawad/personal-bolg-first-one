import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogSearchBar from './components/BlogSearchBar';
import BlogCommentSection from './components/BlogCommentSection';
import MyNetwork from './components/MyNetwork'; // Import the MyNetwork component
import Jobs from './pages/Jobs'; // Import the Jobs component
import Messaging from './pages/Messaging'; // Import the Messaging component
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} /> {/* Add separate route for MyNetwork */}
        <Route path="/jobs" element={<Jobs />} /> {/* Add route for Jobs page */}
        <Route path="/messaging" element={<Messaging />} /> {/* Add route for Messaging page */}

        <Route path="*" element={<NotFound />} />
      </Routes>

      <main>
                <BlogCommentSection />
      </main>

      <Footer />
    </Router>
  );
};

export default App;