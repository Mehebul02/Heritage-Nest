
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Buy from "../pages/Buy/Buy";
import PropertyDetails from "../pages/property-details/PropertyDetails";
import About from "../pages/About/About";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/buy',
          element:<Buy/>
        },
        {
          path:'/propertyDetails',
          element:<PropertyDetails/>
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    },
  ]);

  export default router