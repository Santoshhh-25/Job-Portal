import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/auth/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/signup'


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
  }
])
function App() {

  return (
    <>
     <RouterProvider router ={appRouter}></RouterProvider>
    </>
  )
}


export default App
