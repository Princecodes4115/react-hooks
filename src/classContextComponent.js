import React, {Component} from 'react'
import { ThemeContext } from './UseContext.js'


export default class classContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? "#333" : "#CCC",
            color: dark ? "#CCC" : "#333",
            padding: "2rem",
            margin: "3rem"
        }
    }
    render() {
    return (
        <ThemeContext.Consumer >
            {darkTheme => {
             return <div style={this.themeStyles(darkTheme)}>Theme Change</div>
         }}
        </ThemeContext.Consumer>
    )
}
}
