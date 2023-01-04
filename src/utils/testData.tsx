import React from 'react'
import { Icon } from '@aliakseicharniauski/themeforest-library'
import ImgBlog from '@assets/images/img_blog_1.png'
import ImgPerson from '@assets/images/img_person.png'

/* TODO: replace data to redux */
export const testData = {
    testImonialsCards: [],
    blogCards: [
        {
            id: '1',
            img: ImgBlog,
            date: '22 June 2022',
            title: 'Staffing software: key capabilities and top products',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
        },
        {
            id: '2',
            img: ImgBlog,
            date: '22 June 2022',
            title: 'Staffing software: key capabilities and top products',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
        },
        {
            id: '3',
            img: ImgBlog,
            date: '22 June 2022',
            title: 'Staffing software: key capabilities and top products',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure...',
        },
    ],
    benefitsCards: [
        {
            id: '1',
            title: 'Machine learning',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
            icon: <Icon.IconBrainCircuit />,
        },
        {
            id: '2',
            title: 'Machine learning',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
            icon: <Icon.IconBrainCircuit />,
        },
        {
            id: '3',
            title: 'Machine learning',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
            icon: <Icon.IconBrainCircuit />,
        },
        {
            id: '4',
            title: 'Machine learning',
            description:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
            icon: <Icon.IconBrainCircuit />,
            variant: 'small',
        },
    ],
    reviewCards: [
        {
            id: '1',
            img: ImgPerson,
            name: 'Alex Bern',
            role: 'CEO by PixelPerfect',
            description:
                'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
        },
        {
            id: '2',
            img: ImgPerson,
            name: 'Alex Bern',
            role: 'CEO by PixelPerfect',
            description:
                'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
        },
        {
            id: '3',
            img: ImgPerson,
            name: 'Alex Bern',
            role: 'CEO by PixelPerfect',
            description:
                'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
        },
    ],
}
