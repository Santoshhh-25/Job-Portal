import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }, {
    path: '/login',
    element: <Login></Login>
  }, {
    path: '/signup',
    element: <Signup></Signup>
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/browse',
    element: <Browse />
  }, {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },

  //for admin
  {
    path: '/admin/companies',
    element: <Companies />
  },
  {
    path: '/admin/companies/create',
    element: <CompanyCreate />
  },
  {
    path: '/admin/companies/:id',
    element: <CompanySetup />
  },

  {
    path: '/admin/jobs',
    element: <AdminJobs/>
  }
])
function App() {

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}


export default App
