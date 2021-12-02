import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeRecuder = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(ThemeRecuder, {
    theme: "light",
  });
  const changeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", payload: newTheme });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
