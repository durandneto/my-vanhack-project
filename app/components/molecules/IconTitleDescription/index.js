import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Img from  './../../atoms/img'
import { Column, Row } from  './../../atoms/container'
import Description from  './../../atoms/description'
import TitleDescription from './../../molecules/TitleDescription'
import Icon from './../../atoms/icons'

const IconTitleDescription = (props) => (
 <Container {...props} >
 	<Column>
		{
			Array.isArray(props.img.src) ?
				props.img.src.map( ( icon, index ) => {
					return <Img key={ index }  normal={props.img.normal} thumb={props.img.thumb}  icon={props.img.icon}   margin={props.img.margin} src={icon} />
				})
			: props.img.src ?
				<Img thumb={props.img.thumb}  icon={props.img.icon}  normal={props.img.normal}  margin={props.img.margin}  src={props.img.src} />
			: <Icon type={props.img.type} color={props.img.color} margin={props.img.margin} width={props.img.width} height={props.img.height}/>
		}
	</Column>
	<Column>
		<TitleDescription {...props}  />
  	</Column>
 </Container>
);

export default IconTitleDescription
