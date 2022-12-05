import React from 'react'
import {useTheme, useThemeUpdate} from "./ThemeContext"

export default function FunctionContextComponent() {
  const darkTheme = useTheme()
  const ToggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "3rem"
}
  return (
    <>
    <button onClick={ToggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>function theme</div>
      </>
  )
}
