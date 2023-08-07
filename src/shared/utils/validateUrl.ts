export const validateUrl = (url: string) => {
  const urlPattern = new RegExp(
    `(http|https):\/\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\/|\/([\\w#!:.?+=&%@!\-\/]))?`
  );
  return urlPattern.test(url);
};
