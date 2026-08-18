import { LogOut } from "lucide-react"


import { logoutThunk } from "../../../auth/store/auth.thunk";
import { useAppDispatch } from "../../../../store/hooks";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Dashboard = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const Logout = async()=>{
    try{
       await dispatch(logoutThunk()).unwrap();
       toast.success("Logout successfully")
        navigate("/login");
    }catch(err:any){
      toast.error(err.message || "Logout failed");
    }
     
  }

  return (
    <div>
      THis is Dashboard page
      <button onClick={Logout} className="m-4 bg-red-600 flex cursor-pointer items-center gap-2 rounded-lg px-8 py-2.5">
        <LogOut className="size-5"/>
        <span>Logout</span>
      </button>
    </div>
  )
}

export default Dashboard
