export const breakpoint = {
  XS: 320,
  SM: 568,
  MD: 768,
  LG: 992,
  XL: 1280,
  XXL: 1440,
  XXXL: 1920,
};

export const screen = {
  XS: `@media screen and (max-width: ${breakpoint.XS}px)`,
  SM: `@media screen and (max-width: ${breakpoint.SM}px)`,
  MD: `@media screen and (max-width: ${breakpoint.MD}px)`,
  LG: `@media screen and (max-width: ${breakpoint.LG}px)`,
  XL: `@media screen and (max-width: ${breakpoint.XL}px)`,
  XXL: `@media screen and (max-width: ${breakpoint.XXL}px)`,
  XXXL: `@media screen and (max-width: ${breakpoint.XXXL}px)`,
};

export enum Media {
  XS = "@media(max-width: 320px)",
  SM = "@media(max-width: 568px)",
  MD = "@media(max-width: 768px)",
  LG = "@media(max-width: 992px)",
  XL = "@media(max-width: 1280px)",
  XXL = "@media(max-width: 1440px)",
  XXXL = "@media(max-width: 1920px)",
}
