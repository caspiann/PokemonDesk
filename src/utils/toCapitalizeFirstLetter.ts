const toCapitalizeFirstLetter = (word: string): string => {
  if (word.charAt(0) === word.charAt(0).toUpperCase()) {
    return word;
  }
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

export default toCapitalizeFirstLetter;
