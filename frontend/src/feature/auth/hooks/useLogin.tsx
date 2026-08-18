import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginSchema, type LoginFormData } from "../schema/auth.schema";
import { LoginThunk } from "../store/auth.thunk";
import { toast } from "sonner";
import useAuthForm from "./useAuthForm";

const useLogin = () => {

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.auth);

  const handleSubmit = async (data: LoginFormData) => {

    const loginPromise = dispatch(LoginThunk(data)).unwrap();

    try {

      //  await toast.promise( dispatch(LoginThunk(data)).unwrap(), {
      //   loading: "loging you in...",
      //   success: (response: any) => {
      //     return `Welcome back to Chit-Chat , ${response?.user.name}`;
      //   },
      //   error: (err) => err.message || "login  failed",
      // });

      await loginPromise;
      toast.success("Login success")
      navigate("/dashboard");
      reset();
    } catch (err: any) {
      console.log("Error in login  hook : ", err.message);
      toast.error(err.message);
      throw err;
    }
  };

  const { reset, register, submit, errors } = useAuthForm<LoginFormData>({
    schema: loginSchema,
    onSubmit: handleSubmit,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    register,
    submit,
    errors,
    navigate,
    isLoading,
  };
};

export default useLogin;
