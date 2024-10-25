import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ChatbotPage from './Pages/ChatbotPage';
import Home from './Pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/webchat" element={<ChatbotPage />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
