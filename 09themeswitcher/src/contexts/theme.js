import { createContext, useContext } from "react";

export const ThemeContext = createContext({ //passing default variables and method to context
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}