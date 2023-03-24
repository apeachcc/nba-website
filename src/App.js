// App
// Header
// Home page
// Game Schedule page
// Game Stats page
// Contact page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import GameStats from './pages/GameStats';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/GameStats" element={<GameStats/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
