import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import LogoWildwood from '@assets/images/logo_wildwood.png'
import LogoCrosses from '@assets/images/logo_crosses.png'
import LogoApplerush from '@assets/images/logo_applerush.png'
import LogoFairtech from '@assets/images/logo_fairtech.png'
import LogoHardtoignore from '@assets/images/logo_hardtoignore.png'
import LogoAvgroup from '@assets/images/logo_avgroup.png'

const CompanyOverview = () => (
    <>
        <Grid container spacing={2}>
            <Grid display="flex" justifyContent="center" item md={12}>
                <Typography variant="h2ExtraBold">
                    We provide services that guarantee your success
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack justifyContent="space-between" direction="row">
                    <Box>
                        <Typography variant="h2" color="primary">
                            1830+
                        </Typography>
                        <Typography
                            color="secondary"
                            variant="p2Regular"
                            component="p"
                        >
                            Project executed
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" color="primary">
                            834+
                        </Typography>
                        <Typography
                            color="secondary"
                            variant="p2Regular"
                            component="p"
                        >
                            Satisfied customers
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2" color="primary">
                            390
                        </Typography>
                        <Typography
                            color="secondary"
                            variant="p2Regular"
                            component="p"
                        >
                            Data management
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography color="secondary" variant="p1Regular" component="p">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae.
                </Typography>
            </Grid>
        </Grid>
        <Grid container>
            <img alt="logo" src={LogoWildwood} />
            <img alt="logo" src={LogoApplerush} />
            <img alt="logo" src={LogoCrosses} />
            <img alt="logo" src={LogoAvgroup} />
            <img alt="logo" src={LogoHardtoignore} />
            <img alt="logo" src={LogoFairtech} />
        </Grid>
    </>
)

export default CompanyOverview
