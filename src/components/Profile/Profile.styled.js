import styled from "styled-components";

export const Image = styled.img`
width: 150px;
border: ${p => p.theme.borders.normal};
border-radius: 50%;
margin-bottom: ${p=> p.theme.space[4]}px;
`
export const TextName = styled.p`
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.l};
margin-bottom: ${p=> p.theme.space[3]}px;

`
export const TextTag = styled.p`
color: ${p => p.theme.colors.text};
font-size: ${p => p.theme.fontSizes.m};
margin-bottom: ${p=> p.theme.space[3]}px;
`
export const TextLocation = styled.p`
color: ${p => p.theme.colors.text};
font-size: ${p => p.theme.fontSizes.m};
margin-bottom: ${p=> p.theme.space[5]}px;
`

export const Quantity = styled.span`
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.m};
`
export const Label = styled.span`
color: ${p => p.theme.colors.text};
font-size: ${p => p.theme.fontSizes.m};
`
export const Stats = styled.ul`
display: flex;


`
export const StatElement = styled.li`
height: 100px;
width: 100px;
border: solid 1px ${p => p.theme.colors.text};
display: flex;
align-items:center;
flex-direction:column;
justify-content: center;`
