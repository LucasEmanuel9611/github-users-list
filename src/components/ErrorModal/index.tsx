import * as Styled from "./styles"

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
};

export const ErrorModal = ({ isOpen, onClose, title }: ModalProps) => {
    if (!isOpen) {
        return <></>;
    }

    return (
        <Styled.ModalOverlay>
            <Styled.ModalContainer>
                <Styled.ModalHeader>
                    <Styled.ModalTitle>Erro</Styled.ModalTitle>
                    <Styled.ModalCloseButton onClick={onClose}>X</Styled.ModalCloseButton>
                </Styled.ModalHeader>
                <Styled.Description> {title}</Styled.Description>
            </Styled.ModalContainer>
        </Styled.ModalOverlay>
    );
};
