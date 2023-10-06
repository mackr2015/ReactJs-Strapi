import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./posts/Posts";
import SiteHeader from "./components/SiteHeader";

const App = () => {
  return (
    <div className="app">
      <SiteHeader>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Router>
      </SiteHeader>
    </div>
  )
}

export default App;
