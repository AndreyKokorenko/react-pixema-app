import { ROUTE } from "../../router";
import { LinkText, Links, Container, Footer } from "./styles";
import { HomeIcon, TrendsIcon, FavoritesIcon, SettingIcon } from "../../assets";
import { CustomNavLink } from "componets";

interface IProps {
  className?: string;
}

export const Navigation = ({ className }: IProps) => {
  return (
    <Container className={className}>
      <Links>
        <CustomNavLink to={ROUTE.HOME}>
          <HomeIcon />
          <LinkText>Home</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.TRENDS}>
          <FavoritesIcon />
          <LinkText>Trends</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORITES}>
          <TrendsIcon />
          <LinkText>Favorites</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.SETTINGS}>
          <SettingIcon />
          <LinkText>Settings</LinkText>
        </CustomNavLink>
        <CustomNavLink to={ROUTE.SIGN_IN}>
          <LinkText>Sign in</LinkText>
        </CustomNavLink>
      </Links>
      <Footer>© All Rights Reserved</Footer>
    </Container>
  );
};
