import React from 'react'
import { createTheme } from '@mui/material/styles'

import Manrope from '../assets/fonts/Manrope/Manrope-VariableFont_wght.ttf'
import OpenSans from '../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h1ExtraBold: React.CSSProperties
        h2ExtraBold: React.CSSProperties
        h3ExtraBold: React.CSSProperties
        h4Bold: React.CSSProperties
        h5Bold: React.CSSProperties
        h6Bold: React.CSSProperties
        h7SemiBold: React.CSSProperties
        p1Regular: React.CSSProperties
        p2Regular: React.CSSProperties
        p2Bold: React.CSSProperties
        p3Regular: React.CSSProperties
        p3SemiBold: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        h1ExtraBold?: React.CSSProperties
        h2ExtraBold?: React.CSSProperties
        h3ExtraBold?: React.CSSProperties
        h4Bold?: React.CSSProperties
        h5Bold?: React.CSSProperties
        h6Bold?: React.CSSProperties
        h7SemiBold?: React.CSSProperties
        h8SemiBold?: React.CSSProperties
        p1Regular?: React.CSSProperties
        p2Regular?: React.CSSProperties
        p2Bold?: React.CSSProperties
        p3Regular?: React.CSSProperties
        p3SemiBold?: React.CSSProperties
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        h1ExtraBold: true
        h2ExtraBold: true
        h3ExtraBold: true
        h4Bold: true
        h5Bold: true
        h6Bold: true
        h7SemiBold: true
        h8SemiBold: true
        p1Regular: true
        p2Regular: true
        p2Bold: true
        p3Regular: true
        p3SemiBold: true
    }
}

const colors = {
    primary: '#185CFF',
    secondary: '#9497A1',
    tertiary: '#F0F9FF',
    helperBlue1: '#194060',
    helperBlue2: '#607D94',
    helperBlue3: '#C9DCEC',
    black: '#292D33',
    white: '#ffffff',
    grey: '#9497A1',
    background: '#F1F6FA',
    error: '#C14040',
}

export const themeValues = {
    colors,
}

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        error: {
            main: colors.error,
        },
        text: {
            primary: colors.black,
            secondary: colors.grey,
        },
    },
    typography: {
        fontFamily: ['Manrope', 'Open Sans'].join(', '),
        h1: {
            fontSize: '57px',
            fontWeight: 800,
            lineHeight: '66px',
        },
        h2: {
            fontSize: '50px',
            fontWeight: 800,
            lineHeight: '112px',
            fontFamily: 'Open Sans',
        },
        h1ExtraBold: {
            fontSize: '46px',
            fontWeight: 800,
            lineHeight: '60px',
        },
        h2ExtraBold: {
            fontSize: '38px',
            fontWeight: 800,
            lineHeight: '56px',
        },
        h3ExtraBold: {
            fontSize: '30px',
            fontWeight: 800,
            lineHeight: '40px',
        },
        h4Bold: {
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: '33px',
        },
        h5Bold: {
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '30px',
        },
        h6Bold: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
        },
        h7SemiBold: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '24px',
        },
        h8SemiBold: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
        },
        p1Regular: {
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '33px',
            fontFamily: 'Open Sans',
        },
        p2Regular: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '28px',
            fontFamily: 'Open Sans',
        },
        p2Bold: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '28px',
            fontFamily: 'Open Sans',
        },
        p3Regular: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '24px',
            fontFamily: 'Open Sans',
        },
        p3SemiBold: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '24px',
            fontFamily: 'Open Sans',
        },

        button: {
            //   fontStyle: "italic",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: Manrope;
                    font-style: normal;
                    src: url(${Manrope});
                }
                @font-face {
                    font-family: Open Sans;
                    font-style: normal;
                    src: url(${OpenSans});
                }
            `,
        },
    },
})

export default theme
