import { ROUTE } from "router";
import { Links, Container, CopyRight } from "./styles";
import { HomeIcon, TrendsIcon, FavoritesIcon, SettingIcon } from "assets";
import { CustomNavLink } from "components";

interface IProps {
  className?: string;
  toggleOpen?: () => void;
}

export const Navigation = ({ className }: IProps) => {
  return (
    <Container className={className}>
      <Links>
        <CustomNavLink to={ROUTE.HOME}>
          <HomeIcon fill="" />
          Home
        </CustomNavLink>
        <CustomNavLink to={ROUTE.TRENDS}>
          <FavoritesIcon fill="" />
          Trends
        </CustomNavLink>
        <CustomNavLink to={ROUTE.FAVORITES}>
          <TrendsIcon fill="" />
          Favorites
        </CustomNavLink>
        <CustomNavLink to={ROUTE.SETTINGS}>
          <SettingIcon fill="" />
          Settings
        </CustomNavLink>
        <CopyRight>© All Rights Reserved</CopyRight>
      </Links>
    </Container>
  );
};
