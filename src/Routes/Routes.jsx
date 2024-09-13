import { createBrowserRouter } from 'react-router-dom';
import Login from '../Components/Pages/Login.jsx'
import Dashboard from '../Components/Pages/Dashboard.jsx'
import Invoicelist from '../Components/ui/Dashboard/Invoicelist/Invoicelist.jsx'
// import Navbar from '../Components/ui/Dashboard/Home/Home.jsx';
import Home from '../Components/ui/Dashboard/Home/Home.jsx';
import { Analytics } from '../Components/ui/Dashboard/Analytics/Analytics.jsx';
import Schedule from '../Components/ui/Dashboard/Schedule/Schedule.jsx';
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
                },
                {
                    path: "analytics",
                    element: <Analytics />,
                    
                },
                {
                    path: "schedule",
                    element: <Schedule/>,
                    
                }
        ],
    }
   
  
])