import React from 'react'
import { Links } from "@constants/types"

export type MenuMobileProps = {
    navigationLinks: Links;
    onClickItem: (event: React.MouseEvent<HTMLElement>) => void
}
