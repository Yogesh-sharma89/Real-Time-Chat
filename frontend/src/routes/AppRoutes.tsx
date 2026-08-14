import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import ProtectedRoute from "./ProtectedRoute"
import MainLayout from "../layouts/MainLayout"

import { PublicRoute } from "./PublicRoute"
import { AuthLayout } from "../layouts/AuthLayout"
import { lazy, Suspense } from "react"
import { GlobalLoader } from "../components/ui/Loader"


const Dashbaord = lazy(()=>import("../feature/Dashbaord/ui/page/Dashbaord"));
const LoginPage = lazy(()=>import("../feature/auth/ui/pages/LoginPage"))
const SingupPage = lazy(()=>import("../feature/auth/ui/pages/SingupPage"))
const NotFoundPage = lazy(()=>import("../components/common/NotFoundPage"))
const NoNetworkPage = lazy(()=>import("../components/common/NoNetworkPage"))

const AppRoutes = () => {

   
    const router = createBrowserRouter([

      {
        path:"/",
        element:<ProtectedRoute/>,
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
                        element:<Suspense fallback={<GlobalLoader/>}>
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
        children:[
            {
                path:"",
                element:<AuthLayout/>,
                children:[
                    {
                        path:"login",
                        element:<Suspense fallback={<GlobalLoader/>}>
                            <LoginPage/>
                        </Suspense>
                    },
                    {
                        path:"signup",
                        element:<Suspense fallback={<GlobalLoader/>}>
                            <SingupPage/>
                        </Suspense>
                    }
                ]
            }
        ]
      },
      {
        path:"*",
        element:<Suspense fallback={<GlobalLoader/>}>
            <NotFoundPage/>
        </Suspense>
      },
      {
        path:"/offline",
        element:<Suspense fallback={<GlobalLoader/>}>
            <NoNetworkPage/>
        </Suspense>
      }

    ])


    return (
        <RouterProvider router={router}/>
    )
}

export default AppRoutes
