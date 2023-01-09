/* eslint-disable @typescript-eslint/no-explicit-any */
import { PriceCard } from '@aliakseicharniauski/themeforest-library'
import { Typography, Stack } from '@mui/material'
import { testData } from '@utils/testData'

import React from 'react'

const Pricing = () => (
    <>
        <Typography variant="h2ExtraBold">Our Pricing</Typography>
        <Stack
            pt="3rem"
            gap="1.5rem"
            direction="row"
            justifyContent="space-between"
        >
            {/* TODO: use redux data */}
            {testData.priceCards.map(({ id, title, price, services }) => (
                <PriceCard
                    key={id}
                    variant="thin"
                    title={title}
                    price={price as any}
                    services={services}
                />
            ))}
        </Stack>
    </>
)

export default Pricing
