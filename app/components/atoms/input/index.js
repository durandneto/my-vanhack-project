import React, { Component } from 'react'
import styled from 'styled-components'


const Input = styled.input.attrs({
	// we can define static props
	type: 'text'
})`

	/* here we use the dynamically computed props */
	margin: ${props => props.size || '0'};
	padding: ${props => props.size || '2em'};

    background: #fff;
    border: 1px solid #e1e1e1;
    background: #fff;
    vertical-align: middle;

    ${props => (props.full) && 'width: 100%;'}
`;

export default Input