import { Button } from '@aliakseicharniauski/themeforest-library'
import { Stack, Typography, Paper, InputBase } from '@mui/material'
import React from 'react'

const Subscribe = () => (
    /* TODO: add common wrapper */
    <Stack
        sx={{ maxWidth: '1110px', width: '100%' }}
        justifyContent="space-between"
        direction="row"
    >
        <Stack gap="1.5rem" maxWidth="540px">
            <Typography color="white" variant="h2ExtraBold">
                Subscribe to our newsletter
            </Typography>
            <Typography color="white" variant="p1Regular">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
            </Typography>
        </Stack>
        <Stack justifyContent="center">
            <Paper
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 445,
                    padding: '10px 0 10px 15px',
                }}
            >
                <InputBase
                    sx={{
                        ml: 1,
                        flex: 1,
                    }}
                    placeholder="Your email"
                />
                <Button variant="text" label="Send" />
            </Paper>
        </Stack>
    </Stack>
)

export default Subscribe
