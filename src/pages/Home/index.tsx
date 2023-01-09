/* eslint-disable jsx-a11y/aria-role */
import React from 'react'

import { Button } from '@aliakseicharniauski/themeforest-library'
import { Box, Grid, Typography } from '@mui/material'
import ImgHero from '@assets/images/hero.png'
import Features from '@assets/images/features.png'
import Subscribe from '@сomponents/Subscribe'
import ContactUs from '@сomponents/ContactUs'
import Blog from '@сomponents/Blog'
import Pricing from '@сomponents/Pricing'
import Testimonials from '@сomponents/Testimonials'
import Benefits from '@сomponents/Benefits'
import CompanyOverview from '@сomponents/CompanyOverview'
import { themeValues } from '@styles/theme'
import { ImgHeroWrapper, Section } from './styled'

const Home: React.FC = () => (
    <>
        {/* TODO: add theme */}
        {/* Hero Section */}
        <Section variant="narrow" pt="4.5rem" pb="5rem">
            <Grid container spacing={2}>
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
        </Section>
        <Section>
            <ImgHeroWrapper alt="img hero" src={ImgHero} />
        </Section>

        {/* Features */}
        <Section variant="narrow" pt="4.5rem" pb="5rem">
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
                    <Button>Discover more</Button>
                </Grid>
            </Grid>
        </Section>
        <Section>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '100%' }}
                        alt="img features"
                        src={Features}
                    />
                </Grid>
                <Grid
                    sx={{ background: themeValues.colors.background }}
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
                        height="100%"
                        width="100%"
                        maxWidth="34rem"
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
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </Typography>

                        <Button>Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Section>

        {/* Company overview */}
        <Section variant="narrow" pt="7.5rem" pb="5rem">
            <CompanyOverview />
        </Section>

        {/* Benefits */}
        <Section
            direction="row"
            justifyContent="center"
            background={themeValues.colors.background}
            pt="7.5rem"
            pb="7.5rem"
        >
            <Benefits />
        </Section>

        {/* Testimonials */}
        <Section variant="narrow" pt="8.5rem">
            <Testimonials />
        </Section>

        {/* Pricing */}
        <Section variant="narrow" pt="7.5rem">
            <Pricing />
        </Section>

        {/* Blog */}
        <Section variant="narrow" pt="8.5rem" pb="7.5rem">
            <Blog />
        </Section>

        {/* Contact us */}
        <Section
            direction="row"
            justifyContent="center"
            background={themeValues.colors.background}
            pt="6.25rem"
            pb="6.25rem"
        >
            <ContactUs />
        </Section>

        {/* Subscribe */}
        <Section
            direction="row"
            justifyContent="center"
            background={themeValues.colors.secondary}
            pt="7.5rem"
            pb="7.5rem"
        >
            <Subscribe />
        </Section>
    </>
)

export default Home
