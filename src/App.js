import React, { lazy,Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// chuncking 
// lazy loading 
// Dynamic bundling 
// on demand loading
// dynamic loading
 
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** if path = / then body otherwise related to other components*/}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurants/:resid',
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error />
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
