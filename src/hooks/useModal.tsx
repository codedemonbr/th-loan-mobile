import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useState,
} from "react";
import { Text } from "react-native";
import { Modal } from "../components/Modal";

interface ModalContextData {
    openModal(content: JSX.Element, hideCloseButton?: boolean): void;
    closeModal(): void;
    ModalData: JSX.Element;
    isModalVisible: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC = ({ children }) => {
    const [isModalVisible, setIsModalVisble] = useState(false);
    const [ModalData, setModalData] = useState<JSX.Element>(<Text>Teste</Text>);
    const [disableCloseButton, setDisableCloseButton] = useState(false);

    const closeModal = useCallback(() => {
        setIsModalVisble(false);
    }, []);

    const openModal = useCallback((content, hideCloseButton) => {
        setDisableCloseButton(!!hideCloseButton);

        setModalData(content);

        setIsModalVisble(true);
    }, []);

    return (
        <ModalContext.Provider
            value={{ openModal, closeModal, ModalData, isModalVisible }}
        >
            {children}
            {isModalVisible && ModalData && (
                <Modal disableCloseButton={disableCloseButton}>
                    {ModalData}
                </Modal>
            )}
        </ModalContext.Provider>
    );
};

function useModal(): ModalContextData {
    const context = useContext(ModalContext);
    return context;
}

export { ModalProvider, useModal };
