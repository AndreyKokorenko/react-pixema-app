import { useEffect, useState } from "react";
import styled from "styled-components";
import { typography, Wrapper } from "./ui";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo, harum facere
        nostrum quas iste, autem voluptas consequuntur, officia magnam temporibus voluptate veniam
        recusandae molestiae veritatis nam eum corrupti praesentium?
      </Text>
      <button onClick={handleTheme}>Click me</button>
    </Wrapper>
  );
};

const Text = styled.p`
  ${typography.H1}
`;
