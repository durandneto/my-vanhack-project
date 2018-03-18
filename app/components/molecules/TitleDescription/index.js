import React from 'react'
import styled from 'styled-components'

import * as Title from  './../../atoms/title'
import Line from  './../../atoms/line'
import Description from  './../../atoms/description'
import { Col } from  './../../atoms/container'


const renderTitle = (props) => {
	switch ( props.size ) {

	case 1:
		return <Title.H1 {...props}>
		{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}
		</Title.H1>
		break
	case 2:
		return <Title.H2 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H2>
		break
	case 3:
		return <Title.H3 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H3>
		break
	case 4:
		return <Title.H4 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H4>
		break
	case 5:
		return <Title.H5 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H5>
		break
	case 6:
		return <Title.H6 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H6>
		break
	default:
		return <Title.H2 {...props}>	{
 		Array.isArray(props.Title2) ?
	 		props.Title2.map( ( text, index ) => {
	 			return <Description fontWeight='700' key={ index } >{ text }</Description>
	 		})
	 	: <Description fontWeight='700'>{ props.Title2 }</Description>
		}</Title.H2>

	}
}



const TitleDescription = (props) => (
 <Col alignCenter={props.alignCenter}  alignRight={props.alignRight} >
   {renderTitle(props)}
   <Description>{ props.Description2 }</Description>
   {
   	props.line && <Line margin/>
   }
 </Col>
);

export default TitleDescription;
