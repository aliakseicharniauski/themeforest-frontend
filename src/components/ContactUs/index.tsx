import { Button } from '@aliakseicharniauski/themeforest-library'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const ContactUs = () => (
    <Stack alignItems="center" gap="1.8rem">
        <Typography variant="h2ExtraBold">Do you need help?</Typography>
        <Typography color="secondary" maxWidth="540px" variant="p2Regular">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Typography>
        <Button label="Contact Us" />
    </Stack>
)

export default ContactUs
