import React, { Component } from 'react'
import styled from 'styled-components'

const Col = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	background-color: ${props => props.theme.color ? props.theme.color.bg : 'transparent'};
	${ props => props.transparent && 'background-color: transparent;'}
	${ props => props.alignLeft && 'align-self: flex-start; text-align: left;'}
	${ props => props.alignCenter && 'align-items: center; text-align: center;'}
	${ props => props.alignRight && ' align-items: end;text-align: right;'}
	${ props => props.alignEnd && ' align-self: flex-end; '}
	${ props => props.spaced && 'justify-content: space-between;'}
	${ props => props.spaceAround && 'justify-content: space-around;'}
	${ props => props.margin05 && 'margin: 0.5em;'}
	${ props => props.margin && 'margin: 1em;'}
	${ props => props.margin2 && 'margin: 2em;'}
	${ props => props.padding && 'padding: 1em;'}
	${ props => props.reverse && 'flex-direction: column-reverse;'}
	${ props => props.wrap && 'flex-wrap: wrap;'}
	${ props => props.sizeFull && 'width: 100%;'}
	${ props => props.size2 && 'width: 50%;'}
	${ props => props.size3 && 'width: 33%;'}
	${ props => props.size4 && 'width: 15%;'}
	${ props => props.shadow && 'box-shadow: 0px 0px 30px 0px rgba(204, 204, 204, 0.3);'}
	${ props => props.zIndex && `z-index: ${props.zIndex}`}
	${ props => props.full && `height: 100vh;`}
	${ props => props.fillHalf && `height: 50vh;`}
	${ props => props.fill75 && `height: 75vh;`}
	${ props => props.grow && `flex-grow: 1;`}

	${ props => props.round && `
			border-radius: 18px;`
	}

	${ props => props.round1 && `
			border-radius: 18px;
			border-bottom-right-radius: 0;`
	}

		${ props => props.borderGreen && `
		border: solid 0.2em;
		border-color: #006EBF;`
	}

	${ props => props.borderBlue && `
		border: solid 0.2em;
		border-color: #006EBF;`
	}


	${ props => props.border && `
		border: solid 0.2em;
		border-color: ${props => props.theme.border ? props.theme.border.color : '#909090'};`
	}

	${ props => props.backgroundMedia && `

		background: url(${props.backgroundMedia.desktop}) center top no-repeat transparent;
		background-size: cover;
		
		@media (max-width: 767px) {
			background: url(${props.backgroundMedia.tablet}) center top no-repeat transparent;
			background-size: cover;
		}; 


		@media (max-width: 500px) {
			background: url(${props.backgroundMedia.mobile}) center top no-repeat transparent;
			background-size: cover;
		};

	`}

	${ props => props.background && `
		background: url(${props.background}) center top no-repeat transparent;
		background-size: cover;
	`}
`

const Row = Col.extend`
	${ props => props.reverse && 'flex-direction: row-reverse;'}
	flex-direction: row;

	${ props => props.container && `
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin: 0 auto;

		@media (max-width: 767px) {
			flex-direction: column;
			overflow: hidden;
		};

		@media (min-width: 768px) { width: 750px; };
		@media (min-width: 992px) { width: 970px; };
		@media (min-width: 1920px) { width: 1170px; };
	`
	}

	${ props => props.marginBottom && `
		margin: 0 auto 2em;
	`}
	${ props => props.reverse && 'flex-direction: row-reverse;'}
`
export default Row
export {Row, Col}