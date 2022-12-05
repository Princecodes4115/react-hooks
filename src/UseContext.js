import React, {createContext } from 'react'
import {ThemeProvider} from "./ThemeContext"
import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './classContextComponent'

// export const ThemeContext = React.createContext()

export default function UseContext() {
    // const [darkTheme, setDarkTheme] = useState(true)
    // function ToggleTheme() {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

    return (
      <>
      <ThemeProvider >
          <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}
