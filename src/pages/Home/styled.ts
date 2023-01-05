import { css, Stack } from '@mui/material'
import { styled as styledMui } from '@mui/material/styles'
import styled from 'styled-components'
import { SectionProps } from './types'

export const Section = styledMui(Stack)<SectionProps>`
    width: 100%;
    background: ${({ background }) => background};
    ${({ variant = 'wide' }) =>
        ({
            narrow: css`
                max-width: 1110px;
            `,
            wide: css`
                max-width: 100%;
            `,
        }[variant])}
`

export const ImgHeroWrapper = styled.img`
    width: 100%;
`
