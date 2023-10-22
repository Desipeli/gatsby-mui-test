import React from 'react'
import Navbar from './Navbar'
import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: purple,
        secondary: {
            main: '#fea123',
        },
        text: {
            primary: '#000000',
            secondary: '#ffffff',
        },
    },
})

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <footer>jalka</footer>
        </ThemeProvider>
    )
}
