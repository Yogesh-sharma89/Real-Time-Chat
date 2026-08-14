import {Provider} from "react-redux";
import type { ReactNode } from "react";
import GlobalStore from "../store/GlobalStore";

type GlobalStoreProviderProps = {
    children: ReactNode;
};

export const GlobalStoreProvider = ({ children }: GlobalStoreProviderProps) => {
    return (
        <Provider store={GlobalStore}>
            {children}
        </Provider>
    );
};
