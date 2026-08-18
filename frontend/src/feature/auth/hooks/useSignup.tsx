import { useNavigate } from "react-router";
import { SignupSchema, type SignupFormData } from "../schema/auth.schema";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toast } from "sonner";
import { SignupThunk } from "../store/auth.thunk";
import useAuthForm from "./useAuthForm";

const useSignup = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {isLoading} = useAppSelector((state)=>state.auth);

  const handleSubmit = async (data: SignupFormData) => {

    const signupPromise = dispatch(SignupThunk(data)).unwrap();

    toast.promise(signupPromise, {
      loading: "Signing you in...",
      success: (response: any) => {
        return `Welcome to Chit-Chat , ${response?.user.name}`;
      },
      error: (err) => err.message || "Sign up failed",
    });

    try {
      await signupPromise;
      navigate("/dashboard");
      reset();
    } catch (err:any) {

      console.log("Erro in sign up hook : ",err.messsage);
    }
  };

  const {reset,register,submit,errors,isSubmitting} = useAuthForm<SignupFormData>({
    schema: SignupSchema,
    onSubmit: handleSubmit,
    defaultValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  });

  return {
    register,submit,errors,navigate,isSubmitting,isLoading
  }
};

export default useSignup;
