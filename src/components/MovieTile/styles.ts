import { TrendsIcon } from "assets";
import { FavoritesIcon } from "assets";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, screen } from "ui";

const MovieItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 0 1 auto;

  width: 200px;

  color: ${Color.SECONDARY};

  ${screen.SM} {
    min-width: 80vw;
    align-items: center;
  } ;
`;

const MovieFavoritIcon = styled(TrendsIcon)`
  position: absolute;
  left: 10px;
  top: 20px;

  height: 30px;
  width: 20px;
  padding: 5px;

  border-radius: 5px;
  fill: ${Color.WHITE};
  background-color: ${Color.PRIMARY};

  ${screen.SM} {
    left: 30px;
    top: 10px;
    height: 40px;
    width: 30px;
  } ;
`;

const MovieTrendsIcon = styled(FavoritesIcon)`
  position: absolute;
  left: 10px;
  top: 20px;

  height: 30px;
  width: 20px;
  padding: 5px;

  border-radius: 5px;
  fill: ${Color.WHITE};
  background-color: ${Color.PRIMARY};

  ${screen.SM} {
    left: 30px;
    top: 10px;
    height: 40px;
    width: 30px;
  } ;
`;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  margin-bottom: 10px;
  margin-top: 10px;
  
  border-radius: 10px;
  object-fit: cover;

  ${screen.SM} {
    height: 400px;
    width: 270px;
  } ;
`;

const Title = styled.p`
  display: -webkit-box;
  flex: 1 1 auto;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 170px;
  height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p``;

const MovieLink = styled(Link)`
  position: relative;
`;

export {MovieFavoritIcon, MovieItem, Poster, Title, Description, MovieTrendsIcon, MovieLink };
