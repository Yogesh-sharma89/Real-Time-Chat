import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "../store/hooks"
import CommonLoader from "../components/common/CommonLoader";


export const PublicRoute = () => {

   const {isLoading,isAuthenticated,isInitialized} = useAppSelector((state)=>state.auth);

   console.log("In public route loading :",isLoading);
   console.log("In public route authenticted :",isAuthenticated);
   console.log("In public route intialized :",isInitialized);

   if(!isInitialized ||  isLoading){
    return <CommonLoader
      fullScreen
    />
   }

   if(isAuthenticated){
    return <Navigate to={'/dashboard'} replace/>
   }

    return (
        <>
            <Outlet/>
        </>
    )
}
