import React, { lazy,Suspense,useState,useEffect } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Cart from "./components/Cart";

// chuncking 
// lazy loading 
// Dynamic bundling 
// on demand loading
// dynamic loading
 
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {

  const [userInfo, setUserInfo] =  useState("Default");

  useEffect(() => {
  const data= {
    name:"Mohd Aasim"   
  }
  setUserInfo(data.name)
  }, [])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app">
      <Header />
      {/** if path = / then body otherwise related to other components*/}
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ],
    errorElement:<Error />
  },
])

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
