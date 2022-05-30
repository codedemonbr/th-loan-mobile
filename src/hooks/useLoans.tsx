import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import localApi from "../services/localApi";

interface Loan {
    id: string;
    valor: number;
    qtdParcelas: number;
    primeiraParcela: string;
}

interface ILimitDTO {
    limit: number;
    usedLimit: number;
    availableLimit: number;
}

interface LoansProviderProps {
    children: ReactNode;
}

type LoanInput = Omit<Loan, "id">;

interface LoansContextData {
    loans: Loan[];
    limits: ILimitDTO;
    setLimits: Dispatch<SetStateAction<ILimitDTO>>;
    createLoan: (loan: LoanInput) => Promise<void>;
    isLoading: boolean;
}

const LoansContext = createContext<LoansContextData>({} as LoansContextData);

export function LoansProvider({ children }: LoansProviderProps) {
    const [loans, setLoans] = useState<Loan[]>([]);
    const [limits, setLimits] = useState<ILimitDTO>({
        limit: 0,
        usedLimit: 0,
        availableLimit: 0,
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleGetLoans = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await localApi.get("/loans");

            setLoans(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("error >>>", error);
        }
    }, []);

    const handleGetLimits = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await localApi.get("/limit");
            setLimits(data);

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log("error >>>", error);
        }
    }, []);

    useEffect(() => {
        handleGetLoans();
        handleGetLimits();
    }, []);

    const createLoan = async (loanInput: LoanInput) => {
        let inicio = performance.now();
        const { data } = await localApi.post("/loans", { ...loanInput });
        console.log("tempo decorrido >>>" + (performance.now() - inicio));

        setLoans([...data]);
    };

    return (
        <LoansContext.Provider
            value={{ loans, limits, setLimits, createLoan, isLoading }}
        >
            {children}
        </LoansContext.Provider>
    );
}

export function useLoans() {
    const context = useContext(LoansContext);
    return context;
}
