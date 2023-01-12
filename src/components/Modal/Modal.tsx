import { Portal, PortalTarget } from "components";
import { Container, Title, Button, BlurWrapper } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  message: string | undefined | null;
}

export const Modal = ({ toggleModal, message }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <BlurWrapper></BlurWrapper>
      <Container>
        <Title>{message}</Title>
        <Button type="button" onClick={() => toggleModal(false)}>
          Ok!
        </Button>
      </Container>
    </Portal>
  );
};
