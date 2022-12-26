import * as React from 'react'
import socialLinks from '@constants/social'
import { SocialWrapper, SocialItem } from './styled'

const FollowUs: React.FC = () => (
    <SocialWrapper>
        {socialLinks.map(({href, icon}) => (
            <SocialItem
                key={href}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
            >
                {icon}
            </SocialItem>
        ))}
    </SocialWrapper>
)

export default FollowUs
