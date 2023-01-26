import { Navigation } from "components";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { BurgerIcon, Absolute, Wrapper, Backdround, Container } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Link to={ROUTE.SIGN_IN}>Sign in</Link>
      <BurgerIcon onClick={toggleOpen}>
        <Wrapper>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Wrapper>
      </BurgerIcon>
      <Absolute>
        <AnimatePresence>
          {isOpen && (
            <Backdround
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <Navigation />
            </Backdround>
          )}
        </AnimatePresence>
      </Absolute>
    </Container>
  );
};
