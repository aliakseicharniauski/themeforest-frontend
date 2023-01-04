import { BenefitsCard } from '@aliakseicharniauski/themeforest-library'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { testData } from '@utils/testData'
import React from 'react'
import { StyledCardGroup } from './styled'

const Benefits = () => (
    <Box sx={{ flexGrow: 1, maxWidth: '1110px' }}>
        <Grid container spacing={3}>
            <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                item
                md={6}
            >
                <Stack>
                    <Typography variant="h2ExtraBold">
                        The benefits of Ensome
                    </Typography>
                    <Typography
                        color="secondary"
                        variant="p1Regular"
                        component="p"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={6}>
                <StyledCardGroup
                    gap="1.8rem"
                    flexWrap="wrap"
                    direction="column"
                    maxHeight="650px"
                >
                    {testData.benefitsCards.map(
                        ({ id, title, description, icon }) => (
                            <BenefitsCard
                                key={id}
                                title={title}
                                description={description}
                                icon={icon}
                                variant="small"
                            />
                        )
                    )}
                </StyledCardGroup>
            </Grid>
        </Grid>
    </Box>
)

export default Benefits
