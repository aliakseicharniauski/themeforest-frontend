import {
    Button,
    BlogCard,
    Icon,
} from '@aliakseicharniauski/themeforest-library'
import { Stack, Typography } from '@mui/material'
import { testData } from '@utils/testData'
import ControlDirection from '@сomponents/ControlDirection'
import React from 'react'

const Blog = () => (
    <>
        <Stack justifyContent="space-between" direction="row">
            <Typography variant="h2ExtraBold">Our blog</Typography>
            <Stack gap="1rem" direction="row">
                <ControlDirection direction="left" />
                <ControlDirection direction="right" />
            </Stack>
        </Stack>
        <Stack pt="3rem" gap="1.5rem" direction="row">
            {testData.blogCards.map(({ id, img, date, title, description }) => (
                <BlogCard
                    key={id}
                    img={img}
                    date={date}
                    title={title}
                    description={description}
                    size="small"
                    variant="right-text"
                    link={
                        <Button
                            variant="text"
                            label="Read more"
                            endIcon={<Icon.IconArrowRight />}
                        />
                    }
                />
            ))}
        </Stack>
    </>
)

export default Blog
