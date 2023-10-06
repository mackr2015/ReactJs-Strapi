import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <div className="siteHeader">
        <BrowserRouter>
            <Link to="/">Homepage Link</Link>
        </BrowserRouter>
    </div>
  )
}

export default SiteHeader;