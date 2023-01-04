import { ReviewCard } from '@aliakseicharniauski/themeforest-library'
import { Stack, Typography } from '@mui/material'
import { testData } from '@utils/testData'
import ControlDirection from '@сomponents/ControlDirection'
import React from 'react'

const Testimonials = () => (
    <>
        <Stack justifyContent="space-between" direction="row">
            <Typography variant="h2ExtraBold">Testimonials</Typography>
            <Stack gap="1rem" direction="row">
                <ControlDirection direction="left" />
                <ControlDirection direction="right" />
            </Stack>
        </Stack>
        <Stack pt="3rem" gap="1.5rem" direction="row">
            {testData.reviewCards.map(
                ({ id, img, name, role, description }) => (
                    <ReviewCard
                        key={id}
                        img={img}
                        name={name}
                        role={role}
                        description={description}
                        variant="img-inside"
                    />
                )
            )}
        </Stack>
    </>
)

export default Testimonials
