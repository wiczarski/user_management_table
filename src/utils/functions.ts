export const stringContains = (
  str: string = "",
  phrase: string = ""
): boolean => {
  const lowerCaseString = str.toLowerCase();
  const lowerCasePhrase = phrase.toLowerCase();
  return lowerCaseString.includes(lowerCasePhrase);
};
