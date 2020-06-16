import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: #a5dfc6;
border: 1px solid #dff0e1;
box-shadow: 1px 1px;
margin-left: 20%;
margin-right: 20%;
color: black;
`




export default function Create(props) {
    const { details } = props

    if (!details) {
        return <h3>Trying to find your details</h3>
    }

    return (
        <StyledDiv>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </StyledDiv>
    )
}