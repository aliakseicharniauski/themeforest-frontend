import { Icon } from '@aliakseicharniauski/themeforest-library'
import React from 'react'
import { ControlDirectionWrapper } from './styled'

/* TODO: replace to themeforest-library project */
const ControlDirection = ({ direction }: { direction: string }) => (
    <ControlDirectionWrapper>
        {direction === 'left' && <Icon.IconArrowLeft />}
        {direction === 'right' && <Icon.IconArrowRight />}
    </ControlDirectionWrapper>
)

export default ControlDirection
