import React from 'react'
import { Icon } from '@aliakseicharniauski/themeforest-library'
import ImgBlog from '@assets/images/img_blog_1.png'
import ImgPerson from '@assets/images/img_person.png'

/* TODO: replace data to redux, fetch data from backend */
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
    priceCards: [
        {
            id: '1',
            title: 'Free trial',
            price: [
                { price: '$20', period: 'Mo' },
                { price: '$30', period: 'Yr' },
            ],
            variant: 'thin',
            services: [
                'For small teams – 5 users',
                'Community support',
                'Individual data – 20GB',
            ],
        },
        {
            id: '2',
            title: 'Lite',
            price: [
                { price: '$20', period: 'Mo' },
                { price: '$30', period: 'Yr' },
            ],
            variant: 'thin',
            services: [
                'For small teams – 5 users',
                'Community support',
                'Individual data – 20GB',
            ],
        },
        {
            id: '3',
            title: 'Basic',
            price: [
                { price: '$20', period: 'Mo' },
                { price: '$30', period: 'Yr' },
            ],
            variant: 'thin',
            services: [
                'For small teams – 5 users',
                'Community support',
                'Individual data – 20GB',
                'Advanced permissions',
            ],
        },
        {
            id: '4',
            title: 'For enterprises',
            price: [
                { price: '$20', period: 'Mo' },
                { price: '$30', period: 'Yr' },
            ],
            variant: 'thin',
            services: [
                'Unlimited team members',
                'Individual support',
                'Unlimited Individual data',
                'Advanced permissions',
                'Data history',
                'Audit log',
                'All functions included',
            ],
        },
    ],
}
