const defaultTheme = 0;

export default function LoginState(state = defaultTheme, action) {
  const { type, data } = action;

  switch (type) {
    case "getLoginBtn":
      return (state = data);
    case "getRegisterBtn":
      return (state = data);
  }
  return state;
}
