import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    width: 100%;
    // height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    width: 40em;
    height: 25em;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
`

export const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 9rem;
    height: 3rem;
    background: transparent;
    color: black;
    :hover{
            background: black;
            color: white;
            transition: 0.5s;
    }
`