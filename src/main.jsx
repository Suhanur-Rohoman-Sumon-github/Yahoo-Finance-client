import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/route.jsx'
import Main from './layouts/main/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <div className='container bg-black'>
      <Main />
      </div>
    </RouterProvider>
  </React.StrictMode>,
)
