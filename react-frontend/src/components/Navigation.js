import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
        <div className="nav">
            <ul>
                <BrowserRouter>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </BrowserRouter>
            </ul>
            
        </div>
        
    </div>
  )
}
export default Navigation;
