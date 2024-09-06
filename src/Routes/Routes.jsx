import { createBrowserRouter } from 'react-router-dom';
import Login from '../Components/Login.jsx'
import Dashboard from '../Components/Dashboard.jsx'
import Invoicelist from '../Components/Invoicelist.jsx'
import Navbar from '../Components/Dashboard.jsx';
import Sidebar from '../Components/Sidebar/Sidebar.jsx';
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/invoicelist',
        element:<Invoicelist/>
    }
])