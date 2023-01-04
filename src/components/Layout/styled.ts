import styled from 'styled-components'

const MainWrapper = styled.main`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // max-width: 1110px; // TODO: add theme
    @media only screen and (max-width: 800px) {
        padding: 0 1rem;
    }
`

export default MainWrapper
