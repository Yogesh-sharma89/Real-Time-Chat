import { Toaster } from "../components/ui/sonner";
import AppRoutes from "../routes/AppRoutes";
import { GlobalStoreProvider } from "./GlobalStoreProvider";
import { QueryProvider } from "./QueryClientProvider";

export const AppProvider = () => {
  return (
    <GlobalStoreProvider>
      <QueryProvider>
        <AppRoutes />
        <Toaster />
      </QueryProvider>
    </GlobalStoreProvider>
  );
};
