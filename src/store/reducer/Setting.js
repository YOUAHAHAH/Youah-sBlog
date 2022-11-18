const defaultHeader =
  localStorage.getItem("BlogSetting") === null
    ? "true"
    : JSON.parse(localStorage.getItem("BlogSetting")).BlogSettingHeader;

export default function Disposition(state = defaultHeader, action) {
  const { type, data } = action;

  switch (type) {
    case "getSettingHeaderTrue":
      localStorage.setItem(
        "BlogSetting",
        JSON.stringify({ BlogSettingHeader: data })
      );
      return (state = data);
    case "getSettingHeaderFalse":
      localStorage.setItem(
        "BlogSetting",
        JSON.stringify({ BlogSettingHeader: data })
      );
      return (state = data);
  }
  return state;
}
