
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Buy from "../pages/Buy/Buy";
import PropertyDetails from "../pages/property-details/PropertyDetails";
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
        }
      ]
    },
  ]);

  export default router