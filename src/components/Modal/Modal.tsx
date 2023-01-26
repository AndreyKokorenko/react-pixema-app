import { Portal, PortalTarget } from "components";
import { motion } from "framer-motion";
import { Container, Title, Button, BlurWrapper } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  message: string | undefined | null;
}

export const Modal = ({ toggleModal, message }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BlurWrapper></BlurWrapper>
        <Container>
          <Title>{message}</Title>
          <Button type="button" onClick={() => toggleModal(false)}>
            Ok!
          </Button>
        </Container>
      </motion.div>
    </Portal>
  );
};
