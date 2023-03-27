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
import Stats from './pages/Stats';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Stats" element={<Stats/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
