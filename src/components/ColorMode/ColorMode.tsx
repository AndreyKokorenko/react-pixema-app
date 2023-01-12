import { useTheme } from "hooks";
import { Wrapper, Description, Title, Subtitle, Switch, Check, CustomLabel } from "./styles";

export const ColorMode = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Wrapper>
      <Description>
        <Title>{theme}</Title>
        <Subtitle>Use dark thema</Subtitle>
      </Description>
      <Switch>
        <Check onClick={handleClick} type="checkbox" id="switch" checked={theme === "light"} />
        <CustomLabel htmlFor="switch" />
      </Switch>
    </Wrapper>
  );
};
