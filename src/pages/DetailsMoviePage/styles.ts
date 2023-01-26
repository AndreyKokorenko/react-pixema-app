import { Color, screen, H1, H3 } from "ui";
import styled from "styled-components";
import { TrendsIcon } from "assets";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 40px;

  ${screen.MD} {
    padding-inline: 30px;
  }

  ${screen.SM} {
    padding-inline: 0px;
  }
`;

const MovieWrapper = styled.div`
  display: flex;

  ${screen.MD} {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 42px;

  ${screen.MD} {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const PosterImg = styled.img`
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const FavoritesButton = styled.button`
  background-color: rgba(255, 0, 0, 0);
  border: none;
  fill: ${Color.SECONDARY};
  cursor: pointer;

  :hover {
    filter: grayscale(0.75);
  }
`;

const DisFavoritesButton = styled(FavoritesButton)`
  fill: ${Color.PRIMARY} !important;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypeMovie = styled.p`
  color: ${Color.SECONDARY};
`;

const TitleMovie = styled(H1)`
  color: white;
`;

const Badges = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const BadgeIMDB = styled.div<{ $rating: number }>`
  padding: 8px;
  margin-right: 20px;
  background-color: ${({ $rating }) =>
    $rating > 7 ? `${Color.GREEN}` : $rating > 5 ? `${Color.YELLOW}` : `${Color.ORANGE}`};
  border-radius: 10px;
`;

const Badge = styled.div`
  padding: 8px;
  margin-right: 20px;
  background-color: ${Color.GRAPHITE};
  border-radius: 10px;
`;

const Description = styled.p`
  max-width: 40%;
  margin-bottom: 40px;
`;

const DataGrid = styled.div`
  display: grid;
  font-size: 16px;
  grid-template-columns: 150px 1fr;
  grid-row-gap: 5px;
  margin-bottom: 40px;
`;

const GridContains = styled.div`
  display: contents;
`;

const DataName = styled.div`
  color: ${Color.GRAPHITE};
`;

const DataValue = styled.div``;

const MovieButton = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: ${Color.GRAPHITE};
`;

const ShareButton = styled(FavoritesButton)`
  fill: ${Color.SECONDARY};
`;

const MovieTrendsIcon = styled(TrendsIcon)`
  position: absolute;
  left: 10px;
  top: 5px;
  height: 40px;
  width: 30px;
  padding: 5px;
  border-radius: 5px;
  fill: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
`;

const Error = styled(H3)`
  color: ${Color.ERROR};
`;

const Text = styled(H3)``;

export {
  Text,
  Wrapper,
  ImgWrapper,
  PosterImg,
  FavoritesButton,
  DescriptionWrapper,
  TypeMovie,
  TitleMovie,
  Badges,
  BadgeIMDB,
  Description,
  DataGrid,
  MovieWrapper,
  DisFavoritesButton,
  MovieButton,
  ShareButton,
  MovieTrendsIcon,
  Badge,
  DataName,
  DataValue,
  GridContains,
  Error,
};
