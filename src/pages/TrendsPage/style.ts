import { StylesConfig } from "react-select";
import styled from "styled-components";
import { IOption } from "types";
import { Color } from "ui";
import { screen } from "ui";

export const Container = styled.div`
  padding-inline: 40px;

  ${screen.SM} {
    padding-inline: 0px;
  }
`;

export const selectStyles: StylesConfig<IOption, boolean> = {
  control: (styles) => ({
    ...styles,
    width: "100px",
    marginBottom: "24px",
    minHeight: "30px",
    borderRadius: "10px",
    border: `1px solid ${Color.GRAPHITE}`,
    borderColor: `${Color.GRAPHITE}`,
    backgroundColor: `${Color.GRAPHITE}`,
    cursor: "pointer",
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: "16px 5px",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: `${Color.WHITE}`,
    border: `1px solid ${Color.GRAPHITE}`,
    borderRadius: "10px",
  }),

  singleValue: (styles) => ({
    ...styles,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: `${Color.WHITE}`,
  }),

  indicatorsContainer: (styles) => ({
    ...styles,
    div: {
      padding: "0px 5px",
    },
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),

  menu: (styles) => ({
    ...styles,
    width: "100px",
    overflow: "hidden",
    backgroundColor: `${Color.GRAPHITE}`,
    borderRadius: "10px",
  }),

  option: (styles, state) => ({
    ...styles,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    color: state.isFocused ? `${Color.PRIMARY_LIGHT}` : `${Color.WHITE}`,
    backgroundColor: state.isFocused ? `${Color.GRAPHITE}` : `${Color.BACKGROUND_PRIMARY_DARK}`,
    cursor: "pointer",
  }),
};
