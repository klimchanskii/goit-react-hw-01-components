import styled from "styled-components";


export const Chip = styled.span`
border-radius: 50%;
width: 10px;
display: flexbox;
height: 10px;
background-color: ${p => {   
return p.isOnline ? 'green' : 'red' ;
}}
`

export const Wrapper = styled.div`
display: flex;
border: solid 1px;
margin-bottom: 10px;
width: 200px;
border-radius:10px;
align-items: center;

`
export const Image = styled.img`
border-radius:8px

`
export const TextName = styled.p`
margin-left: 10px;
font-weight: bold;
`

export const List = styled.ul`
margin-left: auto;
margin-right: auto;
width: 220px;
`