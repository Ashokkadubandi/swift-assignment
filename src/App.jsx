import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import Profile from './pages/profile.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to={'/dashboard'}/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

function App(){
  return (
        <RouterProvider router={router}/>
  )
}

export default App