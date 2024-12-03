import App from 'App'
import { appText } from 'data/appText'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import OurServices from 'pages/OurServices/OurServices'


import 'styles/index.css'
import 'styles/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={appText.links[0]} />
        <Route element={<OurServices />} path={appText.links[1]} />
        <Route element={<AboutUs />} path={appText.links[2]} />
        <Route element={<ContactUs />} path={appText.links[3]} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
