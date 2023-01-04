import { Typography, Stack } from '@mui/material'
import PriceCard from '@сomponents/PriceCard'
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
            {/* TODO: replace to frontend-lib, use data */}
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
        </Stack>
    </>
)

export default Pricing
