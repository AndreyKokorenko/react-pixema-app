import { Navigation } from "components";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BurgerIcon, Absolute, Wrapper, Backdround } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurgerIcon onClick={toggleOpen}>
        <Wrapper>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</Wrapper>
      </BurgerIcon>
      <Absolute>
        {isOpen && (
          <Backdround>
            <Navigation toggleOpen={toggleOpen} />
          </Backdround>
        )}
      </Absolute>
    </>
  );
};
