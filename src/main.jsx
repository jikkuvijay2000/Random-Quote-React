import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import QuoteGenerator from './components/QuoteGenerator'
import MainBody from './components/MainBody.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainBody/>}></Route>
          <Route path='/quotegenerator' element={<QuoteGenerator/>}></Route>

        </Routes>
     </BrowserRouter>
  </React.StrictMode>,
)
