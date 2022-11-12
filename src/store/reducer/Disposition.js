const defaultTheme =
  localStorage.getItem("BlogTheme") === null
    ? "true"
    : localStorage.getItem("BlogTheme");

export default function Disposition(state = defaultTheme, action) {
  const { type, data } = action;

  switch (type) {
    case "getDarkTheme":
      localStorage.setItem("BlogTheme", data);
      return (state = data);
    case "getLightTheme":
      localStorage.setItem("BlogTheme", data);
      return (state = data);
  }

  return state;
}
