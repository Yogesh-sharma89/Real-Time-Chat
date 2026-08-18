import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store/hooks";
import CommonLoader from "../components/common/CommonLoader";

const ProtectedRoute = () => {
  const { isAuthenticated ,isInitialized,isLoading} = useAppSelector((state) => state.auth);

     console.log("In protected route loading :",isLoading);
   console.log("In protected route authenticted :",isAuthenticated);
   console.log("In protected route intialized :",isInitialized);

  if (!isInitialized || isLoading) {
    return <CommonLoader fullScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
