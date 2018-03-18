import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
	/* here we use the dynamically computed props */
	margin: ${props => props.size || '0'};
	padding: ${props => props.size || '2em'};

	background: ${props => props.primary ? '#c72177' : 'white'};
	color: ${props => props.primary ? 'white' : '#c72177'};

    border: 1px solid #C72177;
    ${props => (props.full) && 'width: 20em;'}


	{/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};` 
	}
	{/* info button */}
	${
		props => props.info &&
			 `background-color: silver;
			color: red;` 
	}

    &:hover {
	    background: linear-gradient(to right, #cd266f 0%, #fea20c 100%);
	    color: white;
	    cursor: pointer;


	    {/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};` 
	}


    }
    &:active {
	    background-color:  #a51c63;
	    color: white;
	    cursor: pointer;


	{/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};` 
	}


    }

`;

const ButtonLink = Button.withComponent('a')

export default Button
export { ButtonLink, Button }