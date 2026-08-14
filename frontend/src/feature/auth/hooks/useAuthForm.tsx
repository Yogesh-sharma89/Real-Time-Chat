import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

// 1. Inputs required by your hook
interface UseAuthFormProps<T extends FieldValues> {
  schema: z.ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
}

// 2. Explicitly type everything your hook returns to the UI
interface UseAuthFormReturn<T extends FieldValues> {
  register: UseFormReturn<T>["register"];
  control: UseFormReturn<T>["control"];
  watch: UseFormReturn<T>["watch"];
  handleSubmit: UseFormReturn<T>["handleSubmit"];
  submit: (e?: React.BaseSyntheticEvent) => Promise<void>; // Pre-wired submit method
  reset: UseFormReturn<T>["reset"];
  setError: UseFormReturn<T>["setError"];

  // State elements
  errors: UseFormReturn<T>["formState"]["errors"];
  touchedFields: UseFormReturn<T>["formState"]["touchedFields"];
  dirtyFields: UseFormReturn<T>["formState"]["dirtyFields"];
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;

  // Expose the raw form methods just in case you need setValue, clearErrors etc.
  form: UseFormReturn<T>;
}

const useAuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
}: UseAuthFormProps<T>): UseAuthFormReturn<T> => {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
    shouldFocusError: true,
  });

  const {
    handleSubmit,
    reset,
    register,
    watch,
    setError,
    control,
    formState: {
      errors,
      touchedFields,
      dirtyFields,
      isSubmitting,
      isValid,
      isDirty,
    },
  } = form;

  // Pre-wires the submit callback so the component layer just calls `submit` directly
  const submit: UseAuthFormReturn<T>["submit"] = (
    e?: React.BaseSyntheticEvent,
  ) => handleSubmit(onSubmit)(e) as Promise<void>;

  return {
    register,
    control,
    watch,
    handleSubmit,
    submit,
    reset,
    setError,
    errors,
    touchedFields,
    dirtyFields,
    isSubmitting,
    isValid,
    isDirty,
    form,
  };
};

export default useAuthForm;
