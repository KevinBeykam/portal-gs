import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import QuizText from './pages/QuizText';
import QuizImages from './pages/QuizImages';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/quiz-text" element={<QuizText />} />
        <Route path="/quiz-images" element={<QuizImages />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;
