import {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface LoadingContextData {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextData>(
    {} as LoadingContextData
);

const LoadingProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

function useLoading(): LoadingContextData {
    const context = useContext(LoadingContext);
    return context;
}

export { LoadingProvider, useLoading };
