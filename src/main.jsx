import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import FormsContact from './pages/FormsContact.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home/> },
      { path: '/projects', element: <Projects/> },
      { path: '/contact', element: <FormsContact/> },
      { path: '*', element: <PageNotFound/> }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)