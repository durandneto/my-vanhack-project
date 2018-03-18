import React, { Component } from 'react'
import styled from 'styled-components'

const AmpH2 = (props) => (
    <amp-h2 style={props.style} >{props.children}</amp-h2>
)

const H1 = styled.h1`
	width: 100%;
	padding:0;
	font-size: 240%;
	font-family: SimplonHeadline;
	${ props => props.fontNormal ? `font-weight: normal;` : 'font-weight: 400;' }
	${ props => props.marginCustom ? `margin: ${props.marginCustom};` : 'margin:0;' }
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
const H2 = styled.h2`
	font-family: SimplonHeadline;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 220%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
const H3 = styled.h3`
	font-family: SimplonHeadline;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 180%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
const H4 = styled.h4`
	font-family: SimplonHeadline;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 160%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
const H5 = styled.h5`
	font-family: SimplonHeadline;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 130%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
const H6 = styled.h6`
	font-family: SimplonHeadline;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 100%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.color ? props.color : '#909090'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.colorChild ? props.colorChild : '#909090'};
	}
`
export default H2
export { H1, H2, H3, H4, H5, H6 }