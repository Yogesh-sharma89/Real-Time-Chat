import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import ProtectedRoute from "./ProtectedRoute"
import MainLayout from "../layouts/MainLayout"
import { PublicRoute } from "./PublicRoute"
import { AuthLayout } from "../layouts/AuthLayout"
import { lazy, Suspense, useEffect } from "react"
import { GlobalLoader } from "../components/ui/Loader"
import { useAppDispatch, useAppSelector } from "../store/hooks" // 🚀 Import useAppSelector
import { CheckAuthThunk } from "../feature/auth/store/auth.thunk"
import CommonLoader from "../components/common/CommonLoader"
import ErrorElement from "../components/common/ErrorElementPage"

const Dashbaord = lazy(()=>import("../feature/Dashbaord/ui/page/Dashbaord"));
const LoginPage = lazy(()=>import("../feature/auth/ui/pages/LoginPage"))
const SingupPage = lazy(()=>import("../feature/auth/ui/pages/SingupPage"))
const NotFoundPage = lazy(()=>import("../components/common/NotFoundPage"))
const NoNetworkPage = lazy(()=>import("../components/common/NoNetworkPage"))

// 🚀 Move router outside component so it doesn't re-create on every render
const router = createBrowserRouter([
  {
    path:"/",
    element:<ProtectedRoute/>,
    errorElement:<ErrorElement/>,
    children:[
        {
            path:"",
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    element:<Navigate to={'/dashboard'} replace/>
                },
                {
                    path:"dashboard",
                    element:<Suspense fallback={<CommonLoader/>}>
                        <Dashbaord/>
                    </Suspense>
                }
            ]
        }
    ]
  },
  {
    path:"",
    element:<PublicRoute/>,
    errorElement:<ErrorElement/>,
    children:[
        {
            path:"",
            element:<AuthLayout/>,
            children:[
                {
                    path:"login",
                    element:<Suspense fallback={<GlobalLoader/>}><LoginPage/></Suspense>
                },
                {
                    path:"signup",
                    element:<Suspense fallback={<GlobalLoader/>}><SingupPage/></Suspense>
                }
            ]
        }
    ]
  },
  {
    path:"*",
    element:<Suspense fallback={<GlobalLoader/>}><NotFoundPage/></Suspense>
  },
  {
    path:"/offline",
    element:<Suspense fallback={<GlobalLoader/>}><NoNetworkPage/></Suspense>
  }
]);

const AppRoutes = () => {

    const dispatch = useAppDispatch();
    const {isInitialized } = useAppSelector((state) => state.auth); // 🚀 Track loading state

    useEffect(()=>{
      dispatch(CheckAuthThunk());
    },[dispatch])

    // 🚀 Force global block loader while CheckAuthThunk initializes on boot/refresh
    if (!isInitialized) {
      return <CommonLoader fullScreen />;
    }

    return <RouterProvider router={router}/>;
}

export default AppRoutes;
