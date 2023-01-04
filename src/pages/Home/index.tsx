/* eslint-disable jsx-a11y/aria-role */
import React from 'react'

import { Button } from '@aliakseicharniauski/themeforest-library'
import { Box, Grid, Stack, Typography } from '@mui/material'
import ImgHero from '@assets/images/hero.png'
import Features from '@assets/images/features.png'
import Subscribe from '@сomponents/Subscribe'
import ContactUs from '@сomponents/ContactUs'
import Blog from '@сomponents/Blog'
import Pricing from '@сomponents/Pricing'
import Testimonials from '@сomponents/Testimonials'
import Benefits from '@сomponents/Benefits'
import CompanyOverview from '@сomponents/CompanyOverview'

const Home: React.FC = () => (
    <>
        {/* TODO: add common wrapper */}
        {/* TODO: add theme */}
        {/* Hero */}
        <Box sx={{ flexGrow: 1, maxWidth: '1110px' }} pt="4.5rem" pb="5rem">
            {/* TODO: add common wrapper */}
            <Grid justifyContent="space-between" container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h1ExtraBold">
                        Find true power in your data with{' '}
                        <Typography
                            variant="h1ExtraBold"
                            component="span"
                            color="primary"
                        >
                            Ensome
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography
                        color="secondary"
                        variant="p2Regular"
                        component="p"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque lauda, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        <Box>
            <img style={{ width: '100%' }} alt="img hero" src={ImgHero} />
        </Box>

        {/* Features */}
        <Box sx={{ flexGrow: 1, maxWidth: '1110px' }} pt="4.5rem" pb="5rem">
            {/* TODO: add common wrapper */}
            <Grid justifyContent="space-between" container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h1">
                        The{' '}
                        <Typography
                            variant="h1"
                            component="span"
                            color="primary"
                        >
                            newest
                        </Typography>{' '}
                        business analytics platform
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography
                        color="secondary"
                        mb="1.8rem"
                        variant="p1Regular"
                        component="p"
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>
                    <Button label="Discover more" />
                </Grid>
            </Grid>
        </Box>
        <Grid container>
            <Grid item xs={12} md={6}>
                <img
                    style={{ width: '100%' }}
                    alt="img features"
                    src={Features}
                />
            </Grid>
            <Grid
                sx={{ background: '#F1F6FA' }}
                pl="2.8rem"
                item
                xs={12}
                md={6}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="1.8rem"
                    flexDirection="column"
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '540px',
                    }}
                >
                    <Typography variant="h2ExtraBold">
                        Radically new solutions for data
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

                    <Button label="Learn more" />
                </Box>
            </Grid>
        </Grid>

        {/* Company overview */}
        <Box sx={{ flexGrow: 1, maxWidth: '1110px' }} pt="7.5rem" pb="5rem">
            <CompanyOverview />
        </Box>

        {/* Benefits */}
        <Box
            display="flex"
            justifyContent="center"
            sx={{ background: '#F1F6FA', width: '100%' }}
            pt="7.5rem"
            pb="7.5rem"
        >
            <Benefits />
        </Box>

        {/* Testimonials */}
        <Stack pt="8.5rem" sx={{ maxWidth: '1110px' }}>
            <Testimonials />
        </Stack>

        {/* Pricing */}
        <Stack pt="7.5rem" sx={{ maxWidth: '1110px', width: '100%' }}>
            <Pricing />
        </Stack>

        {/* Blog */}
        <Stack pt="8.5rem" pb="7.5rem" sx={{ maxWidth: '1110px' }}>
            <Blog />
        </Stack>

        {/* Contact us */}
        <Box
            display="flex"
            justifyContent="center"
            sx={{ background: '#F1F6FA', width: '100%' }}
            pt="6.25rem"
            pb="6.25rem"
        >
            <ContactUs />
        </Box>

        {/* Subscribe */}
        <Box
            display="flex"
            justifyContent="center"
            sx={{ background: '#002B4E', width: '100%' }}
            pt="7.5rem"
            pb="7.5rem"
        >
            <Subscribe />
        </Box>
    </>
)

export default Home
