import { createBrowserRouter } from 'react-router-dom';
import Login from '../Components/Pages/Login.jsx'
import Dashboard from '../Components/Pages/Dashboard.jsx'
import Invoicelist from '../Components/ui/Dashboard/Invoicelist/Invoicelist.jsx'
import Navbar from '../Components/ui/Dashboard/Home/Home.jsx';
import Home from '../Components/ui/Dashboard/Home/Home.jsx';
import Sidebar from '../Components/ui/Dashboard/Sidebar/Sidebar.jsx';
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'invoicelist',
                element:<Invoicelist/>
            }
        ],
    }
   
  
])