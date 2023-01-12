import { Header, Navigation } from "components";
import { useWindowSize } from "hooks";
import { Outlet } from "react-router-dom";
import { breakpoint } from "ui";
import { Container, ContentContainer } from "./styles";

export const MainTemplate = () => {
  const { width } = useWindowSize();

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
