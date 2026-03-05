import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './components/landing_page';


function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
