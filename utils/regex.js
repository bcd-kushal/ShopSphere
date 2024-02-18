export const REGEX_TEST = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  NAME: /^[a-zA-Z\s'-]*$/,
  PASSWORD: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=_]).*$/,
  MOBILE: /^(?!0+$)\d+$/,
};
