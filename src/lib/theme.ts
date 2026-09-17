export const lightTheme = {
  foreground: "#342b20",
  textBackground: "#938b7f",
};

export const darkTheme = {
  foreground: "#f2edf5",
  textBackground: "#0a080e",
};

export function isDark() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function getTheme() {
  return isDark() ? darkTheme : lightTheme;
}
