export const recommended = (title: string) => {
  if (title?.split(" ").length !== 1) {
    return `${title?.split(" ")[0]} ${title?.split(" ")[1]}`;
  } else {
    return title?.split(" ")[0];
  }
};
