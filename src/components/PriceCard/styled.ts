import { Button } from '@aliakseicharniauski/themeforest-library'
import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 255px;
    padding: 2.25rem 1.25rem;
    /* TODO: theme */
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
    border-radius: 6px;
`

export const StyledButton = styled(Button)`
    align-self: stretch;
`
