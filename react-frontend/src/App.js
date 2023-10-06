
import SiteHeader from "./components/SiteHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./posts/Posts";


import './index.css';

const App = () => {
  return (
    <div className="app">
      <SiteHeader />
      <div className="main">
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </Router>
      </div>
      
    </div>
  )
}

export default App;
