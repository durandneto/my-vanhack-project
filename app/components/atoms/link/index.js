import React, { Component } from 'react'
import styled from 'styled-components'


const StyledLink = styled.a`
	color: ${ props => props.theme.color && props.theme.color.link ? props.theme.color.link : '#909090'};
	cursor: pointer;
	text-decoration-line: none;
	${ props => props.margin && 'margin: 0.5em;'}
	${ props => props.decoration && ` &:after {
		    content: '';
		    height: 1px;
		    background-color: ${ props => props.theme.color && props.theme.color.link ? props.theme.color.link : '#909090' };
		    display: block;
		    margin-top: 0.5em;
		}`
	}
`;

export default StyledLink