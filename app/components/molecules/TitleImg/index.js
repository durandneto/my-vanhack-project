import React from 'react'
import styled from 'styled-components'

import * as Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import Img from  './../../atoms/img'
import { Row, Column } from  './../../atoms/container'

const TitleImg = (props) => (
 <Column { ...props } >
 	<Column>
 	<Title.H2 { ...props }>
	{
 		Array.isArray(props.text) ?
	 		props.text.map( ( text, index ) => {
	 			return <Description key={ index } >{ text }</Description> 
	 		})
	 	: <Description >{ props.text }</Description> 
	}
	</Title.H2>
  	</Column>
 	<Column>
	 	<Row>
		 	{
		 		Array.isArray(props.img) ?
			 		props.img.map( ( img, index ) => {
			 			return <Img key={ index } Img src={img} />
			 		})
			 	: <Img normal src={props.img} />
		 	}
		</Row>
	</Column>
	
 </Column>
)

export default TitleImg
