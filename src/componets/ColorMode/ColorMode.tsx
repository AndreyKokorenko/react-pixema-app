import { useEffect } from "react";
import { toggleTheme, useAppDispatch, useAppSelector } from "store";
import { Container, Check, CustomLabel } from "./styles";

export const ColorMode = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", darkMode);
  }, [darkMode]);
  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <Check onClick={handleClick} type="checkbox" id="switch" checked={darkMode === "light"} />
      <CustomLabel htmlFor="switch" />
    </Container>
  );
};
