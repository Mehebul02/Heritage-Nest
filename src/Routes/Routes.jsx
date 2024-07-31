
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Buy from "../pages/Buy/Buy";
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
        }
      ]
    },
  ]);

  export default router