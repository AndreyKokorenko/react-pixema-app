const getNumderOfSlides = (width: number | undefined) => {
  if (width) {
    if (width > 1800) {
      return 8;
    } else if (width > 1650) {
      return 7;
    } else if (width > 1500) {
      return 6;
    } else if (width > 1200) {
      return 5;
    } else if (width > 1000) {
      return 4;
    } else if (width > 850) {
      return 3;
    } else if (width > 700) {
      return 2;
    }
  }
  return 2;
};

export { getNumderOfSlides };