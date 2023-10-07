
import SiteHeader from "./components/SiteHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./posts/Posts";


import './index.css';

const App = () => {
  return (
    <div className="app">
      <SiteHeader />
        <div className="main">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  )
}

export default App;
