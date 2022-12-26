import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { store } from '@store/store'
import GlobalStyles from '@styles/globalStyles'
import theme from '@styles/theme'
import { router } from '@constants/routes'

// TODO: wrap ErrorBoundary
function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    )
}

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App />)
