import { Header, Navigation } from "componets";
import { useTheme, useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { breakpoint } from "ui";
import { Container, ContentContainer } from "./styles";

export const MainTemplate = () => {
  const { width } = useWindowSize();
  useTheme();
  return (
    <Container>
      <Header />
      <ContentContainer>
        {width && width > breakpoint.MD ? (
          <>
            <Navigation /> <Outlet />
          </>
        ) : (
          <Outlet />
        )}
      </ContentContainer>
    </Container>
  );
};
