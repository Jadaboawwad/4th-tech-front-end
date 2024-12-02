import App from 'App'
import { appText } from 'data/appText'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AboutUs from 'pages/AboutUs/AboutUs'
import ContactUs from 'pages/ContactUs/ContactUs'
import OurLands from 'pages/OurLands/OurLands'
import OurSuppliers from 'pages/OurSuppliers/OurSuppliers'
import Products from 'pages/Products/Products'


import 'styles/index.css'
import 'styles/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={appText.links[0]} />
        <Route element={<AboutUs />} path={appText.links[1]} />
        <Route element={<OurLands />} path={appText.links[2]} />
        <Route element={<OurSuppliers />} path={appText.links[3]} />
        <Route element={<Products />} path={appText.links[4]} />
        <Route element={<ContactUs />} path={appText.links[5]} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
